import React from "react";
import { Link } from "react-router-dom";

const ThankYou: React.FC = () => {
  return (
    <div className="error-page">
      <div className="container">
        <div className="error-page-image">
          <img src="/images/velease-logo-website-main.svg" alt="veLease" />
        </div>
        <div className="error-page-content">
          <div className="section-title">
            <h3>thank you</h3>
            <h2>
              We've received your request.{" "}
              <span>We'll contact you shortly.</span>
            </h2>
          </div>
          <div className="error-page-content-body">
            <p>
              Our team will get back to you soon. In the meantime, you can
              continue exploring our solutions.
            </p>
            <Link to="/" className="btn-default">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
