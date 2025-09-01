import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const phrases = [
    "Here",
    "OpEx > CapEx",
    "Scalable Interiors",
    "Unrestricted Growth"
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (!isDeleting) {
      // Typing effect
      if (currentText.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Pause before deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(100); // Faster deletion
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Move to next phrase
        setIsDeleting(false);
        setTypingSpeed(150); // Reset typing speed
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    }
  }, [currentText, currentPhraseIndex, isDeleting, typingSpeed, phrases]);

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
                  The Future of Office Leasing is <br/>
                  <div className="animated-text-container">
                    <span className="animated-text">
                      {currentText}
                      <span className="typewriter-cursor">.</span>
                    </span>
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
