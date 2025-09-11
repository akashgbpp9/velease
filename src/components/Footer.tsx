import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
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
                    <img
                      src="images/velease-logo-website-inverted2.svg"
                      alt=""
                    />
                    {/* <img src="images/footer-logo.svg" alt="" /> */}
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
                        <a href="https://www.facebook.com/veLeaseHQ">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/veleasehq/">
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/veleasehq/">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com/@veleaseHQ">
                          <i className="fa-brands fa-x-twitter"></i>
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
              <h3>Our Firm</h3>
              <ul>
                <li>
                  <Link to="/about" onClick={scrollToTop}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="#" onClick={scrollToTop}>
                    Careers
                  </Link>
                </li>
                <li>
                  <a href="#" onClick={scrollToTop}>
                    Blogs & Resources
                  </a>
                </li>

                {/* <li>
                  <Link to="/projects">our latest projects</Link>
                </li> */}
              </ul>
            </div>
            {/* Footer Links End */}
          </div>

          <div className="col-lg-3 col-md-6">
            {/* Footer Links Start */}
            <div className="footer-links">
              <h3>Solutions</h3>
              <ul>
                <li>
                  <Link
                    to="/solutions/office-interiors-consultation"
                    onClick={scrollToTop}
                  >
                    Office Interiors Consultation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions/design-and-build-execution"
                    onClick={scrollToTop}
                  >
                    Design & Build Execution
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions/furniture-as-a-service"
                    onClick={scrollToTop}
                  >
                    Furniture-as-a-Service (FaaS)
                  </Link>
                </li>
                {/* <li>
                  <Link to="/project-single">residential interior design</Link>
                </li>
                <li>
                  <Link to="/project-single">
                    renovation and restoration design
                  </Link>
                </li> */}
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
                  <p>
                    <a href="tel:+919890907614">+91 989 090 7614</a>
                  </p>
                </div>
              </div>
              {/* Footer Contact Item End */}

              {/* Footer Contact Item Start */}
              <div className="footer-contact-item">
                <div className="icon-box">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="footer-contact-content">
                  <p>
                    <a href="mailto:sales@velease.com">sales@velease.com</a>
                  </p>
                </div>
              </div>
              {/* Footer Contact Item End */}

              {/* Footer Contact Item Start */}
              <div className="footer-contact-item">
                <div className="icon-box">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="footer-contact-content">
                  <p>
                    <b>Pune Experience Center </b>
                    <br /> 101-B, Gamma-1, Giga Space IT Park, Viman Nagar,
                    Pune, India
                  </p>
                </div>
              </div>
              {/* Footer Contact Item End */}
            </div>
            {/* Footer Contact Box End */}
          </div>

          <div className="col-lg-3 col-md-6">
            {/* Footer Newsletter Form Start */}
            <div className="footer-latest-news footer-links">
              <h3>Get Latest Office Designs</h3>

              <div className="footer-newsletter-form">
                <p>
                  Strategically powered by flexible leasing options for your
                  next dream space!
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
                <p>Copyright © 2025 All Rights Reserved.</p>
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
