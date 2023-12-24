const express = require("express");
const router = express.Router();
const { Order } = require("../Models/Orders");


router.get("/users/:userId", async (req, res) => {
    try {
        const userId = req.params.userId;


        const userOrders = await Order.find({ userId });

        res.status(200).json({ orders: userOrders });
    } catch (error) {
        console.error("Error fetching user orders:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
