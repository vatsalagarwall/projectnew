const express = require('express');
const app = express();
const Stripe = require('stripe');
const { Order } = require('../Models/Orders');
require("dotenv").config()


const stripe = Stripe(process.env.STRIPE_KEY)


const router = express.Router()



router.post('/create-checkout-session', async (req, res) => {

    console.log(req.body)
    const customer = await stripe.customers.create({
        metadata: {
            userId: req.body.userId,
            cart: JSON.stringify(req.body.cartItems)

        }
    })

    const line_items = req.body.cartItems.map((item) => {
        return {
            price_data: {
                currency: 'inr',
                product_data: {
                    name: item.name,
                    images: [item.img],
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity,
            // instructions: specialInstructions[index],
        }
    })

    const session = await stripe.checkout.sessions.create({

        payment_method_types: ['card'],
        shipping_address_collection: {
            allowed_countries: ['IN'],
        },
        shipping_options: [
            {
                shipping_rate_data: {
                    type: 'fixed_amount',
                    fixed_amount: {
                        amount: 0,
                        currency: 'inr',
                    },
                    display_name: 'Free Delivery',
                    delivery_estimate: {
                        minimum: {
                            unit: 'hour',
                            value: 1,
                        },
                        maximum: {
                            unit: 'hour',
                            value: 1,
                        },
                    },
                },
            },
            // {
            //     shipping_rate_data: {
            //         type: 'fixed_amount',
            //         fixed_amount: {
            //             amount: 15050,
            //             currency: 'inr',
            //         },
            //         display_name: 'Delivery within 15 business_days',
            //         delivery_estimate: {
            //             minimum: {
            //                 unit: 'business_day',
            //                 value: 1,
            //             },
            //             maximum: {
            //                 unit: 'business_day',
            //                 value: 1,
            //             },
            //         },
            //     },
            // },
        ],
        phone_number_collection: {
            enabled: true,
        },
        customer: customer.id,
        line_items,
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cart',

    });

    res.send({ url: session.url });
});






const createOrder = async (customer, data) => {
    const Items = JSON.parse(customer.metadata.cart);

    const newOrder = new Order({
        userId: customer.metadata.userId,
        customerId: data.customer,
        paymentIntentId: data.payment_intent,
        // products: Items,
        products: Items.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            description: item.description,
            quantity: item.quantity,
            instructions: item.instructions || '',
        })),
        subtotal: data.amount_subtotal,
        total: data.amount_total,
        shipping: data.customer_details,
        payment_status: data.payment_status,

    });

    try {
        const savedOrder = await newOrder.save()
        console.log("Processed Order: ", savedOrder)
    }
    catch (err) {
        console.log(err)
    }

}



let endpointSecret;


router.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
    const sig = req.headers['stripe-signature'];

    let data;
    let eventType;

    if (endpointSecret) {
        let event;

        try {
            event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
            console.log("Webhook Verified")
        } catch (err) {
            console.log(`Webhook Error: ${err.message}`)
            res.status(400).send(`Webhook Error: ${err.message}`);
            return;
        }
        data = event.data.object
        eventType = event.type;
    }
    else {
        data = req.body.data.object;
        eventType = req.body.type
    }

    // Handle the event
    if (eventType === "checkout.session.completed") {
        stripe.customers.retrieve(data.customer).then((customer) => {
            console.log(customer)
            console.log(data)
            createOrder(customer, data)
            // localStorage.removeItem("cartItems");
        }).catch(err => {
            console.log(err.message)
        })
    }

    res.send();


    // Return a 200 res to acknowledge receipt of the event

});




module.exports = router
