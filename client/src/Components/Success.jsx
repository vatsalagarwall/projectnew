import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="success-container">
      <div className="success">
        Order placed successfully.
        <div style={{ marginTop: "20px" }}>
          <Link to="/your-orders" className="btn btn-outline-dark card-button">
            My Orders
          </Link>
          <Link
            to="/products"
            className="btn btn-outline-dark card-button"
            style={{ marginLeft: "20px" }}
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Success;
