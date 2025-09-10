import React from "react";
import { Link } from "react-router-dom";

const CTASection: React.FC = () => {
  return (
    <div className="cta-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="cta-content">
              <h2>Reach Out</h2>
              <h3>Redefining office interiors, one lease at a time.</h3>
              <p>
                We've helped businesses and landlords transform thousands of
                square feet into scalable, branded workspaces that fuel growth.
                With VeLease, your office becomes more than a place to work — it
                becomes a strategic advantage.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cta-buttons">
              <Link to="/contact" className="btn-default btn-highlighted">
                Get Started Today
              </Link>
              <Link to="/projects" className="btn-default">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
