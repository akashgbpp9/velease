import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div
      className="hero parallaxie"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-10">
            {/* Hero Content Start */}
            <div className="hero-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3>Furniture-as-a-Service (FaaS)</h3>
                <h1>The Future of Office Leasing is Here.</h1>
                <p>
                  We design, build, and furnish plug-and-play workspaces — you
                  just pay a simple monthly rent per sq.ft.
                </p>
              </div>
              {/* Section Title End */}

              {/* Hero Button Start */}
              <div className="hero-btn">
                <Link to="/about" className="btn-default">
                  Find your Workspace
                </Link>
                <Link to="/projects" className="btn-default btn-highlighted">
                  View Projects
                </Link>
              </div>
              {/* Hero Button End */}
            </div>
            {/* Hero Content End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
