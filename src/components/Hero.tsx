import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const phrases = [
    "Here.",
    "OpEx > CapEx.",
    "Scalable Interiors.",
    "Unrestricted Growth.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsTransitioning(false);
      }, 300); // Half of the transition time
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

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
                  The Future of Office Leasing is <br />
                  <div className="animated-text-container">
                    <span
                      className={`animated-text ${
                        isTransitioning ? "fade-out" : "fade-in"
                      }`}
                      key={`current-${currentPhraseIndex}`}
                    >
                      {phrases[currentPhraseIndex]}
                    </span>
                    {isTransitioning && (
                      <span
                        className="animated-text fade-in"
                        key={`next-${
                          (currentPhraseIndex + 1) % phrases.length
                        }`}
                      >
                        {phrases[(currentPhraseIndex + 1) % phrases.length]}
                      </span>
                    )}
                  </div>
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
