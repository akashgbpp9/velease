import React from "react";
import { motion } from "framer-motion";

interface VeLeasePromiseProps {
  imageRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

const VeLeasePromise: React.FC<VeLeasePromiseProps> = ({ imageRefs }) => {
  return (
    <div id="how-it-works" className="how-we-work">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            {/* Section Title Start */}
            <div className="section-title dark-section">
              <h3 className="wow fadeInUp">The VeLease Promise</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Scaling offices & ambitions, <span>together.</span>
              </h2>
            </div>
            {/* Section Title End */}
          </div>

          <div className="col-lg-6">
            {/* Section Title Content Start */}
            <div className="section-title-content dark-section">
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                With VeLease, you don’t just lease interiors — you gain a
                strategic growth partner who ensures your workspace evolves
                seamlessly as your ambitions expand.
              </p>
            </div>
            {/* Section Title Content End */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            {/* How We Work List Start */}
            <div className="how-we-work-list">
              {/* How We Item Start */}
              <div className="how-we-work-item wow fadeInUp">
                <div className="icon-box">
                  <img
                    src="/images/icon-how-we-work-1.svg"
                    alt=""
                    ref={(el) => {
                      if (el && !imageRefs.current.includes(el)) {
                        imageRefs.current.push(el);
                      }
                    }}
                  />
                </div>
                <div className="how-we-work-content">
                  <h3>01. Consultation & Space Planning</h3>
                  <p>
                    We start with a one-on-one consultation to understand your
                    business needs, growth plans, and brand identity. Our team
                    evaluates your bare shell space, assesses technical
                    requirements, and maps out a tailored plan for your ideal
                    office layout.
                  </p>
                </div>
              </div>
              {/* How We Item End */}

              {/* How We Item Start */}
              <div
                className="how-we-work-item wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="icon-box">
                  <img
                    src="/images/icon-how-we-work-2.svg"
                    alt=""
                    ref={(el) => {
                      if (el && !imageRefs.current.includes(el)) {
                        imageRefs.current.push(el);
                      }
                    }}
                  />
                </div>
                <div className="how-we-work-content">
                  <h3>02. Design, Build & Furnish</h3>
                  <p>
                    Once the vision is set, we handle the complete design and
                    execution. From 3D concepts to sourcing furniture and
                    finishes, to managing contractors and timelines — everything
                    is coordinated under one roof. The result is a plug-and-play
                    office built to world-class standards.
                  </p>
                </div>
              </div>
              {/* How We Item End */}

              {/* How We Item Start */}
              <div
                className="how-we-work-item wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="icon-box">
                  <img
                    src="/images/icon-how-we-work-3.svg"
                    alt=""
                    ref={(el) => {
                      if (el && !imageRefs.current.includes(el)) {
                        imageRefs.current.push(el);
                      }
                    }}
                  />
                </div>
                <div className="how-we-work-content">
                  <h3>03. Lease & Scale</h3>
                  <p>
                    Instead of large upfront costs, your interiors become a
                    predictable monthly rent per sq.ft. You move in, start
                    working immediately, and scale your office as your business
                    grows — without reinvesting in interiors every few years.
                  </p>
                </div>
              </div>
              {/* How We Item End */}
            </div>
            {/* How We Work List End */}

            {/* How Work Company Slider Start */}
            <div className="how-work-company-slider">
              <div className="company-logos-container">
                <div className="company-logos-grid">
                  <div className="company-logo">
                    <img
                      src="/images/company-logo-1.png"
                      alt="Company Logo 1"
                      className="image-anime"
                      ref={(el) => {
                        if (el && !imageRefs.current.includes(el)) {
                          imageRefs.current.push(el);
                        }
                      }}
                    />
                  </div>
                  <div className="company-logo">
                    <img
                      src="/images/company-logo-2.png"
                      alt="Company Logo 2"
                      className="image-anime"
                      ref={(el) => {
                        if (el && !imageRefs.current.includes(el)) {
                          imageRefs.current.push(el);
                        }
                      }}
                    />
                  </div>
                  <div className="company-logo">
                    <img
                      src="/images/company-logo-3.png"
                      alt="Company Logo 3"
                      className="image-anime"
                      ref={(el) => {
                        if (el && !imageRefs.current.includes(el)) {
                          imageRefs.current.push(el);
                        }
                      }}
                    />
                  </div>
                  <div className="company-logo">
                    <img
                      src="/images/company-logo-4.png"
                      alt="Company Logo 4"
                      className="image-anime"
                      ref={(el) => {
                        if (el && !imageRefs.current.includes(el)) {
                          imageRefs.current.push(el);
                        }
                      }}
                    />
                  </div>
                  <div className="company-logo">
                    <img
                      src="/images/company-logo-5.png"
                      alt="Company Logo 5"
                      className="image-anime"
                      style={{ maxHeight: "75px" }}
                      ref={(el) => {
                        if (el && !imageRefs.current.includes(el)) {
                          imageRefs.current.push(el);
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* How Work Company Slider End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VeLeasePromise;
