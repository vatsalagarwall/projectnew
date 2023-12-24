import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function CartStart({ userId }) {
  const navigate = useNavigate();

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <Link to="/" className="btn btn-outline-dark  card-button">
        Back
      </Link>
      <h3 className="continue">Login to add items to Cart.</h3>
      <Link to="/login" style={{ color: "black", fontWeight: "bold" }}>
        <button className="btn btn-outline-dark card-button">Login</button>
      </Link>
    </div>
  );
}

export default CartStart;
