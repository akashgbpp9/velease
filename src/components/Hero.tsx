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
                <h3 className="wow fadeInUp">Furniture-as-a-Service (FaaS)</h3>
                <h1 className="text-anime-style-2" data-cursor="-opaque">
                  The Future of Office Leasing is Here.
                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  We design, build, and furnish plug-and-play workspaces — you
                  just pay a simple monthly rent per sq.ft.
                </p>
              </div>
              {/* Section Title End */}

              {/* Hero Button Start */}
              <div className="hero-btn wow fadeInUp" data-wow-delay="0.4s">
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
