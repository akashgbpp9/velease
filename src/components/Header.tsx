import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="container">
          <div className="navbar navbar-expand-lg">
            {/* Logo Start */}
            <Link className="navbar-brand" to="/">
              <img src="/images/logo.svg" alt="Logo" />
            </Link>
            {/* Logo End */}

            {/* Main Menu Start */}
            <div className="collapse navbar-collapse justify-content-end main-menu">
              {/* <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className="nav-item submenu">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                    <ul>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">
                          Home - Image
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">
                          Home - Video
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">
                          Home - Slider
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/services">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/projects">
                      Projects
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item submenu">
                    <Link className="nav-link" to="#">
                      Pages
                    </Link>
                    <ul>
                      <li className="nav-item">
                        <Link className="nav-link" to="/services/1">
                          Service Details
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/projects/1">
                          Project Details
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/blog/1">
                          Blog Details
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/gallery">
                          Image Gallery
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/faqs">
                          FAQs
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/404">
                          404
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div> */}
              {/* Header Btn Start */}
              <div className="header-btn d-inline-flex ml-auto">
                <Link to="/contact" className="btn-default">
                  get in touch
                </Link>
              </div>
              {/* Header Btn End */}
            </div>
            {/* Main Menu End */}
            <div className="navbar-toggle"></div>
          </div>
        </nav>
        <div className="responsive-menu"></div>
      </div>
    </header>
  );
};

export default Header;
