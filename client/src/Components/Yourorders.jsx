import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Yourorders = ({ userId }) => {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5050/orders/users/${userId}`
        );

        http: console.log(response.data.orders);
        setOrders(response.data.orders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [userId]);

  return (
    <div className="container tableOrder">
      <Link to="/products" className="btn btn-outline-dark card-button">
        Home
      </Link>
      <h2>Your Orders</h2>

      <form
        className="d-flex mt-3"
        role="search"
        style={{ marginLeft: "42px" }}
      >
        <input
          className="form-control me-2 navButton"
          type="search"
          placeholder="Search your orders by Name or by Order Id"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="btn navButton btn-outline-dark"
          type="submit"
          style={{ marginRight: "40px" }}
        >
          Search
        </button>
      </form>
      {orders.length === 0 ? (
        <p>No orders to display. </p>
      ) : (
        <table
          className="table table-striped table-bordered"
          style={{ marginTop: "20px" }}
        >
          <thead className="thead-dark">
            <tr>
              <th rowSpan="2">Order ID</th>
              <th rowSpan="2">Date of Order</th>
              <th rowSpan="2">Delivery Address</th>
              <th rowSpan="2">Customer Name</th>
              <th rowSpan="2">Phone Number</th>
              <th rowSpan="2">Status</th>
              <th colSpan="4">Product Details</th>
              <th rowSpan="2">Amount Paid</th>{" "}
            </tr>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {orders
              .filter((item) => {
                return (
                  (search ?? "").toLowerCase() === "" ||
                  item._id
                    .toLowerCase()
                    .includes((search ?? "").toLowerCase()) ||
                  item.products.some((product) =>
                    product.name
                      ?.toLowerCase()
                      .includes((search ?? "").toLowerCase())
                  )
                );
              })
              .map((order) => (
                <React.Fragment key={order._id}>
                  {order.products.map((product, index) => (
                    <tr
                      key={`${order._id}-${index}`}
                      className="table-secondary"
                    >
                      {index === 0 && (
                        <>
                          <td rowSpan={order.products.length}>{order._id}</td>
                          <td rowSpan={order.products.length}>
                            {new Date(order.createdAt).toLocaleDateString()}
                          </td>
                          <td rowSpan={order.products.length}>
                            {order.shipping.address.line2},
                            {order.shipping.address.line1},
                            {order.shipping.address.city},{" "}
                            {order.shipping.address.state} -{" "}
                            {order.shipping.address.postal_code}
                          </td>
                          <td rowSpan={order.products.length}>
                            {order.shipping.name}
                          </td>
                          <td rowSpan={order.products.length}>
                            {order.shipping.phone}
                          </td>
                          <td rowSpan={order.products.length}>
                            {order.delivery_status}
                          </td>
                        </>
                      )}
                      <td>{product.name}</td>
                      <td>₹{product.price}</td>
                      <td>{product.quantity}</td>
                      <td>₹{product.price * product.quantity}</td>
                      {index === 0 && (
                        <td rowSpan={order.products.length}>
                          ₹{order.subtotal / 100} {/* Display amount paid */}
                        </td>
                      )}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Yourorders;
