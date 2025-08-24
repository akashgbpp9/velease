import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Footer Header Start */}
            <div className="footer-header">
              <div className="row align-items-center">
                <div className="col-md-6">
                  {/* Footer Logo Start */}
                  <div className="footer-logo">
                    <img src="images/footer-logo.svg" alt="" />
                  </div>
                  {/* Footer Logo End */}
                </div>

                <div className="col-md-6">
                  {/* Footer Social Link Start */}
                  <div className="footer-social-links">
                    <div className="footer-social-link-title">
                      <h3>follow our socials</h3>
                    </div>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-dribbble"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Footer Social Link End */}
                </div>
              </div>
            </div>
            {/* Footer Header End */}
          </div>

          <div className="col-lg-3 col-md-6">
            {/* Footer Links Start */}
            <div className="footer-links">
              <h3>information</h3>
              <ul>
                <li>
                  <Link to="/about">about our company</Link>
                </li>
                <li>
                  <Link to="/services">view our service</Link>
                </li>
                <li>
                  <a href="#">careers at company</a>
                </li>
                <li>
                  <Link to="/blog">read our blog</Link>
                </li>
                <li>
                  <Link to="/projects">our latest projects</Link>
                </li>
              </ul>
            </div>
            {/* Footer Links End */}
          </div>

          <div className="col-lg-3 col-md-6">
            {/* Footer Links Start */}
            <div className="footer-links">
              <h3>portfolio</h3>
              <ul>
                <li>
                  <Link to="/project-single">luxury home design</Link>
                </li>
                <li>
                  <Link to="/project-single">residential interior design</Link>
                </li>
                <li>
                  <Link to="/project-single">commercial space design</Link>
                </li>
                <li>
                  <Link to="/project-single">residential interior design</Link>
                </li>
                <li>
                  <Link to="/project-single">
                    renovation and restoration design
                  </Link>
                </li>
              </ul>
            </div>
            {/* Footer Links End */}
          </div>

          <div className="col-lg-3 col-md-6">
            {/* Footer Contact Box Start */}
            <div className="footer-contact-box footer-links">
              <h3>contact us</h3>
              {/* Footer Contact Item Start */}
              <div className="footer-contact-item">
                <div className="icon-box">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="footer-contact-content">
                  <p>+1 (213) 465 789</p>
                </div>
              </div>
              {/* Footer Contact Item End */}

              {/* Footer Contact Item Start */}
              <div className="footer-contact-item">
                <div className="icon-box">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="footer-contact-content">
                  <p>info@domain.com</p>
                </div>
              </div>
              {/* Footer Contact Item End */}

              {/* Footer Contact Item Start */}
              <div className="footer-contact-item">
                <div className="icon-box">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="footer-contact-content">
                  <p>Generała Ziętka Jerzego 54, Mysłowice 41-412</p>
                </div>
              </div>
              {/* Footer Contact Item End */}
            </div>
            {/* Footer Contact Box End */}
          </div>

          <div className="col-lg-3 col-md-6">
            {/* Footer Newsletter Form Start */}
            <div className="footer-latest-news footer-links">
              <h3>get the latest trending news</h3>

              <div className="footer-newsletter-form">
                <p>
                  Your Dream Space Starts Here Get Exclusive Design Straight
                  Your Inbox!
                </p>

                <form id="newslettersForm" action="#" method="POST">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="mail"
                      placeholder="Enter your email"
                      required
                    />
                    <button type="submit">
                      <i className="fa-solid fa-arrow-right-long"></i>{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Footer Newsletter Form End */}
          </div>
        </div>

        {/* Footer Copyright Section Start */}
        <div className="footer-copyright">
          <div className="row">
            <div className="col-md-12">
              {/* Footer Copyright Start */}
              <div className="footer-copyright-text">
                <p>Copyright © 2024 All Rights Reserved.</p>
              </div>
              {/* Footer Copyright End */}
            </div>
          </div>
        </div>
        {/* Footer Copyright Section End */}
      </div>
    </footer>
  );
};

export default Footer;
