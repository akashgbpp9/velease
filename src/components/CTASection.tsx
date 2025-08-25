import React from "react";
import { Link } from "react-router-dom";

const CTASection: React.FC = () => {
  return (
    <div className="cta-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="cta-content">
              <h2>Ready to Transform Your Workspace?</h2>
              <p>
                Join hundreds of companies who have already revolutionized their
                office environments with our Furniture-as-a-Service solution.
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
