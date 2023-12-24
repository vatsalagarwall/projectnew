import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ricebowl from "../images/gif-rice.gif";
import { useCart } from "../Context/CartContext";

function Navbar({ username, onLogout }) {
  const { cart } = useCart();
  const [isCartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "white" }}>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{
          position: "fixed",
          width: "100%",
          top: 0,
          zIndex: 100,
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand navButton" to="/">
            <img src={ricebowl} style={{ height: "40px" }} alt="logo" />
            Meal-Co
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {/* <li className="nav-item me-5">
                <Link className="nav-link navButton" aria-current="page" to="/">
                  Home
                </Link>
              </li> */}
              <div class="dropdown me-5 navButton">
                <button
                  class="btn dropdown-toggle nav-link"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hi {username}
                </button>
                <ul class="dropdown-menu">
                  <li className="nav-item navButton me-5">
                    <Link
                      className="nav-link navButton"
                      aria-current="page"
                      to="/your-orders"
                      style={{ fontSize: "16px", whiteSpace: "nowrap" }}
                    >
                      My Orders
                    </Link>
                  </li>
                </ul>
              </div>

              <li className="nav-item me-5">
                <Link
                  className="nav-link navButton"
                  aria-current="page"
                  to="/about-us"
                >
                  About Us
                </Link>
              </li>

              <li className="nav-item navButton me-5">
                <button className="nav-link" onClick={() => navigate("/cart")}>
                  <span className="material-symbols-outlined">
                    shopping_cart
                  </span>
                  <sup>{cart.length}</sup>
                </button>
              </li>

              <li className="me-3">
                <button onClick={onLogout} className="btn navButton">
                  Logout
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
                    className="lucide lucide-log-out"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" x2="9" y1="12" y2="12" />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
