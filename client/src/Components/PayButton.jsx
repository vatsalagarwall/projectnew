import axios from "axios";
import React from "react";

function PayButton({ cartItems, userId }) {
  const handleCheckout = () => {
    console.log("cartItems:", cartItems);
    console.log("userId:", userId);
    axios
      .post("http://localhost:5050/stripe/create-checkout-session", {
        cartItems,
        userId,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
        localStorage.removeItem("cartItems");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <button
        className="btn btn-outline-dark card-button"
        onClick={() => handleCheckout()}
      >
        CheckOut
      </button>
    </>
  );
}

export default PayButton;
