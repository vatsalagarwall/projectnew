import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import PayButton from "./PayButton";
function Cart({ userId }) {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(cart);

  useEffect(() => {
    console.log(cartItems);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleDelete = (index) => {
    dispatch({ type: "REMOVE_ITEM", payload: index });
    setCartItems((prev) => prev.filter((item, idx) => index !== idx));
  };

  const handleIncrement = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity++;
    setCartItems(updatedCart);
  };

  const handleDecrement = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 0) {
      updatedCart[index].quantity--;
      setCartItems(updatedCart);

      // If quantity becomes 0, remove the item from the cart
      if (updatedCart[index].quantity === 0) {
        handleDelete(index);
      }
    }
  };

  const total = cartItems.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
    // accumulator is a parameter in the reduce function that represents the accumulated result of the previous iterations.
  );

  const onToken = (token) => {
    console.log(token);
    dispatch({ type: "CLEAR_CART" });
    navigate("/products");
  };

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <Link to="/products" className="btn btn-outline-dark  card-button">
        Home
      </Link>
      {total > 0 ? (
        <>
          <h2 className=" cardItems">Your Cart</h2>
          <table
            style={{ borderCollapse: "collapse", width: "100%" }}
            className="cart"
          >
            <thead>
              <tr>
                <th
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "left",
                  }}
                >
                  Item
                </th>
                <th
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "left",
                  }}
                >
                  Name
                </th>
                <th
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "left",
                  }}
                >
                  Quantity
                </th>
                <th
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "left",
                  }}
                >
                  Price
                </th>
                <th
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "left",
                  }}
                >
                  Total
                </th>

                <th
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "left",
                  }}
                >
                  Action
                </th>
                <th
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "left",
                  }}
                >
                  Add Cooking Instructions
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #ddd",
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{ height: "100px", width: "150px" }}
                    />
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #ddd",
                      textAlign: "left",
                    }}
                  >
                    {item.name}
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #ddd",
                      textAlign: "left",
                    }}
                  >
                    <button
                      class="btn btn-outline"
                      onClick={() => handleDecrement(index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-minus-circle"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 12h8" />
                      </svg>
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      class="btn btn-outline"
                      onClick={() => handleIncrement(index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-plus-circle"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 12h8" />
                        <path d="M12 8v8" />
                      </svg>
                    </button>
                  </td>

                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #ddd",
                      textAlign: "left",
                    }}
                  >
                    ₹{item.price}
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #ddd",
                      textAlign: "left",
                    }}
                  >
                    ₹{item.price * item.quantity}
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #ddd",
                      textAlign: "left",
                    }}
                  >
                    <button
                      class="material-symbols-outlined btn btn-light"
                      onClick={() => handleDelete(index)}
                    >
                      delete_forever
                    </button>
                  </td>

                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #ddd",
                      textAlign: "left",
                    }}
                  >
                    <textarea
                      name="cooking instructions"
                      placeholder="Tap to add any special instructions"
                      id=""
                      cols="40"
                      rows="1"
                      value={item.instructions || ""}
                      onChange={(e) => {
                        const updatedCart = [...cartItems];
                        updatedCart[index].instructions = e.target.value;
                        setCartItems(updatedCart);
                      }}
                    ></textarea>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className=" card-button">Total: ₹{total}</p>
          {/* <PayButton cartItems={cartItems} userId={userId} /> */}

          <PayButton
            cartItems={cartItems.map((item) => ({ ...item, img: undefined }))}
            userId={userId}
          />
        </>
      ) : (
        <h3 className="continue">Cart is Empty. Continue Shopping.</h3>
      )}
    </div>
  );
}

export default Cart;
