import { NavLink , Link } from "react-router-dom";
import './Nav.css'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg  sticky-top">
      <div className="container-fluid">

        <NavLink to="/" className="navbar-brand text-light">
          Navbar
        </NavLink>
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
          <ul className="navbar-nav">

            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/explore" className="nav-link">
                Explore
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/myplant" className="nav-link">
                  Myplant
              </NavLink>
            </li>
          </ul>
          <Link to="/login" className="btn login-btn ms-auto">login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;