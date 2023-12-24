import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div>
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
            <div className="container" style={{ marginTop: "50px" }}>
              <p className="desc">
                <h1>About Us</h1>
                Embark on a journey into our culinary world, where passion meets
                purpose. We're committed to offering wholesome meals that
                nourish your body and bring joy to your taste buds. Join us in
                our mission to make healthy eating an enjoyable and accessible
                experience for everyone.
              </p>
              <p className="desc">
                Explore the art of flavor in our culinary adventure, where
                passion blends seamlessly with purpose. Our dedication lies in
                crafting nutritious meals that not only fuel your body but also
                tantalize your taste buds. Join us as we strive to make the
                pleasure of healthy eating accessible to all.
              </p>
              <p className="desc">
                Immerse yourself in our culinary world, where passion and
                purpose converge. Dedicated to providing nourishing meals that
                satisfy both body and palate, we invite you to join our mission
                in making healthy eating a delightful and inclusive experience
                for everyone.
              </p>

              <Link to="/products" className="btn navButton btn-outline-dark">
                Back to Home
              </Link>
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
    </div>
  );
}

export default AboutUs;
