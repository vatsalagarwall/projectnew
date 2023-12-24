import React, { useState, useRef } from "react";
import { data, datanew } from "../data";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../pages/Navbar";
import { useCart } from "../Context/CartContext";

function ProductList({ cart, addItemToCart }) {
  const [search, setSearch] = useState("");
  const firstCardRef = useRef(null);

  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:5050",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? // ? toast(`Welcome, ${user}`, {
          //     position: "top-left",
          //     autoClose: 1000,
          //   })
          null
        : (removeCookie("token"), navigate("/login"));
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/");
    localStorage.clear();
  };

  const { dispatch } = useCart();
  const addToCart = (item, index) => {
    // dispatch({ type: "ADD_ITEM", payload: item });
    dispatch({
      type: "ADD_ITEM",
      payload: { ...item, img: datanew[index]?.img },
    });

    toast.success(
      `${item.name} added to cart!
    You can edit quantity in Cart.`,
      {
        position: "bottom-right",
        autoClose: 2000,
      }
    );
  };

  const handleExploreMenuClick = () => {
    if (firstCardRef.current) {
      firstCardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        marginTop: "30px",
        marginBottom: "30px",
      }}
    >
      <ToastContainer />
      <Navbar username={username} onLogout={Logout} cart={cart} />
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
                rice bowls, delivered to your doorstep for a delicious wellness
                journey.
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
                    onClick={() => addToCart(item, index)}
                    className="btn btn-outline-dark card-button"
                    // style={{ width: "33%" }}
                    style={{ marginLeft: "50px" }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductList;
