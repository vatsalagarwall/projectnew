import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import ricebowl from "../images/gif-rice.gif";
import { data, datanew } from "../data";
import { ToastContainer, toast } from "react-toastify";

const Start = () => {
  const [search, setSearch] = useState("");
  const firstCardRef = useRef(null);

  const navigate = useNavigate("");

  const addToCart = () => {
    // alert("You need to login first");
    toast("Login to add items to cart.", {
      position: "top-left",
      autoClose: 1000,
    });
  };
  const handleExploreMenuClick = () => {
    if (firstCardRef.current) {
      firstCardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
    // style={{
    //   display: "flex",
    //   flexDirection: "column",
    //   alignItems: "center",
    //   justifyContent: "center",
    //   height: "100vh",
    // }}
    >
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
                <div class="dropdown me-5 navButton"></div>

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
                  <button
                    className="nav-link"
                    onClick={() => navigate("/cart-start")}
                  >
                    <span className="material-symbols-outlined">
                      shopping_cart
                    </span>
                    <sup>0</sup>
                  </button>
                </li>

                <li className="me-3">
                  <button className="btn navButton">
                    <Link
                      to="/login"
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                      <button className="btn btn-outline-dark card-button">
                        Login
                      </button>
                    </Link>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div
        style={{
          backgroundColor: "white",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <ToastContainer />

        <div
          className="container-fluid hero-section d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="row h-100">
            {/* Left Column for Text */}
            <div
              className="col-md-6 d-flex align-items-center justify-content-center hero-text"
              style={{ marginTop: "-50px" }}
            >
              <div className="container">
                <h1>
                  {/* <p style={{ fontSize: "20px" }}>Dear {username}</p> */}
                  <p className="text">Your Search for</p>
                  <p className="header">Healthy Meals</p>
                  <p className="text">Ends Here...</p>
                </h1>
                <p className="desc">
                  Explore a world of healthy indulgence with our nutrient-packed
                  rice bowls, delivered to your doorstep for a delicious
                  wellness journey.
                </p>
                <button
                  className="btn navButton btn-outline-dark"
                  onClick={handleExploreMenuClick}
                >
                  Explore Menu
                </button>
              </div>
            </div>

            <div
              className="col-md-6 hero-images d-flex align-items-center justify-content-center"
              style={{ marginLeft: "-10px", marginTop: "-10px" }}
            >
              <div
                id="carouselExample"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="2000"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://images.unsplash.com/photo-1594998893017-36147cbcae05?q=80&w=1786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1695030934401-2dd6b05bf77f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fHJpY2UlMjBib3dsfGVufDB8MHwwfHx8MA%3D%3D"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1701006579460-e7c6939a3558?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://hildaskitchenblog.com/wp-content/uploads/2019/10/mexican-rice-bowl-8.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://images.unsplash.com/photo-1580442151529-343f2f6e0e27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form
          className="d-flex mt-3"
          role="search"
          style={{ marginLeft: "42px" }}
        >
          <input
            className="form-control me-2 navButton"
            type="search"
            placeholder="Search Food Items"
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

        <div
          className="row row-cols-1 row-cols-md-3"
          style={{ marginTop: "20px", maxWidth: "1200px", margin: "auto" }}
        >
          {data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(search);
            })
            .map((item, index) => (
              <div
                className="col mb-4"
                key={index}
                ref={index === 0 ? firstCardRef : null}
              >
                <div className="card h-100" style={{ marginTop: "20px" }}>
                  {datanew[index] && (
                    <img
                      src={datanew[index].img}
                      className="card-img-top"
                      alt={item.name}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  )}

                  <div className="card-body">
                    <h5 className="card-title cardItems">
                      <p className="item-text cardItems">{item.name}</p>
                    </h5>
                    <p className="cardItems-description">
                      {datanew[index] && datanew[index].description}
                    </p>

                    <p className="cardItems-price">Price: ₹{item.price}</p>

                    <button
                      type="button"
                      class="btn btn-outline-dark card-button"
                      data-bs-toggle="modal"
                      data-bs-target={`#exampleModal${index}`}
                      // style={{ width: "33%" }}
                    >
                      More Info
                    </button>

                    <div
                      class="modal fade "
                      id={`exampleModal${index}`}
                      tabindex="-1"
                      aria-labelledby={`exampleModalLabel${index}`}
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1
                              class="modal-title fs-5 card-button"
                              id="exampleModalLabel"
                            >
                              {item.name} contains
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body card-button">
                            <span className="moreinfo">Main Ingredients: </span>
                            {datanew[index] &&
                              datanew[index].info &&
                              datanew[index].info.mainIngredients}
                          </div>
                          <div class="modal-body card-button">
                            <span className="moreinfo">
                              Calories (per bowl):{" "}
                            </span>
                            {datanew[index] &&
                              datanew[index].info &&
                              datanew[index].info.calories}
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={addToCart}
                      className="btn btn-outline-dark card-button"
                      // style={{ width: "33%" }}
                      style={{ marginLeft: "50px" }}
                    >
                      Add to Cart
                    </button>

                    {/* <button
                      type="button"
                      className="btn btn-outline-dark card-button"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      style={{ marginLeft: "50px" }}
                    >
                      Add to Cart
                    </button>

                    <div
                      class="modal"
                      id="staticBackdrop"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabindex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">You need to Login First.</div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* 
      <Link to="/login" style={{ color: "black", fontWeight: "bold" }}>
        <button className="btn btn-outline-dark card-button">Login</button>
      </Link> */}
    </div>
  );
};

export default Start;
