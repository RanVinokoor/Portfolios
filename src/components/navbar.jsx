import { Link, NavLink } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <nav
      className="navbar navbar-expand-sm shadow-sm"
      aria-label="Third navbar example"
    >
      <div className="container">
        <Link to="/" className="navbar-brand">
          <i className="bi bi-camera2"></i> <b>Portfolios</b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"><i className="bi bi-list"></i></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav me-auto mb-sm-0">
            {user?.biz && (
              <li className="nav-item">
                <NavLink to="/my-portfolio" className="nav-link">
                  My Portfolio
                </NavLink>
              </li>
            )}
            <li className="nav-item">
              <NavLink to="/photos" className="nav-link">
                Top Photos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
            {user ? (
              <li className="nav-item">
                <NavLink to="/logout" className="nav-link">
                  Sign Out
                </NavLink>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/signin" className="nav-link">
                    Sign In
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/signup" className="nav-link">
                    Sign Up
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
