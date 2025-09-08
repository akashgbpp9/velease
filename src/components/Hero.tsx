import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // Background image slider state
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const backgroundImages = ["/images/hero-bg-1.jpg", "/images/hero-bg-2.jpg"];

  const phrases = useMemo(
    () => ["Here", "OpEx > CapEx", "Scalable Interiors", "Unrestricted Growth"],
    []
  );

  // Variable typing speeds for more natural feel
  const getTypingSpeed = useCallback(
    (isDeleting: boolean, charIndex: number, phraseLength: number) => {
      if (isDeleting) {
        // Faster deletion with slight variation
        return Math.random() * 30 + 50; // 50-80ms
      } else {
        // Variable typing speed based on character position and type
        const baseSpeed = 80;
        const variation = Math.random() * 40; // 0-40ms variation

        // Slower for punctuation and spaces
        if (charIndex < phraseLength) {
          const char = phrases[currentPhraseIndex][charIndex];
          if (char === " " || char === ">" || char === "<") {
            return baseSpeed + variation + 40; // 120-160ms
          }
        }

        return baseSpeed + variation; // 80-120ms
      }
    },
    [currentPhraseIndex, phrases]
  );

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    if (!isDeleting) {
      // Typing effect
      if (currentText.length < currentPhrase.length) {
        setIsTyping(true);
        const speed = getTypingSpeed(
          false,
          currentText.length,
          currentPhrase.length
        );
        const timeout = setTimeout(() => {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
          setIsTyping(false);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        // Pause before deleting - longer pause for better readability
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2500);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (currentText.length > 0) {
        const speed = getTypingSpeed(
          true,
          currentText.length,
          currentPhrase.length
        );
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        // Move to next phrase with a brief pause
        const timeout = setTimeout(() => {
          setIsDeleting(false);
          setCurrentPhraseIndex(
            (prevIndex) => (prevIndex + 1) % phrases.length
          );
        }, 300);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentText, currentPhraseIndex, isDeleting, getTypingSpeed, phrases]);

  // Background image slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Smooth scroll function
  const scrollToContact = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const contactSection = document.getElementById("contact-us");
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
    []
  );

  return (
    <div
      className="hero parallaxie"
      style={{
        backgroundImage: `url('${backgroundImages[currentBgIndex]}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        transition: "background-image 1s ease-in-out",
      }}
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
                  The Future of Office Leasing is{" "}
                  <span className="animated-text-container">
                    <span
                      className={`animated-text ${isTyping ? "typing" : ""}`}
                    >
                      {currentText}
                      <span className="typewriter-cursor">.</span>
                    </span>
                  </span>
                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  We design, build, and furnish plug-and-play workspaces — you
                  just pay a simple monthly rent per sq.ft.
                </p>
              </div>
              {/* Section Title End */}

              {/* Hero Button Start */}
              <div className="hero-btn wow fadeInUp" data-wow-delay="0.4s">
                <a
                  href="#contact-us"
                  className="btn-default"
                  onClick={scrollToContact}
                >
                  Find your Workspace
                </a>
                <Link to="/solutions" className="btn-default btn-highlighted">
                  View Solutions
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
