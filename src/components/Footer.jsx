import React from "react";
import "./Footer.css"

function Footer() {
  return (
    <footer className="text-light ">
      <div className="container ">

        <div className="row py-4">
          <div className="col-md-5 mb-2 f1 text-light">
            <h3 className="fw-bold">🌿 PlantCare</h3>
            <p className="">
              Discover plants, learn how to take care of them,
              and create your own little green space.
            </p>
          </div>
          <div className="col-md-3 mb-4 f2">
            <h5 className="fw-bold text-light">Quick Links</h5>
            <ul className="list-unstyled" >
              <li className="mb-2">
                <Link to="/home" className=" text-decoration-none text-light">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/explore" className=" text-decoration-none text-light">
                  Explore
                </Link>
              </li>

              <li>
                <Link to="/myplant" className=" text-decoration-none text-light">
                  My Plants
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-4 text-light">
            <h5 className="fw-bold">Plant Care 🌱</h5>
            <p className="">
              Give your plants the right light, water,
              and a little love.
            </p>
          </div>

        </div>

        {/* <hr className="border-secondary" /> */}
      </div>
    </footer>
  );
}

export default Footer;
