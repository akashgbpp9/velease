import React from "react";
interface AdvantagesProps {
  imageRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

const VisionMissionSection: React.FC<AdvantagesProps> = ({ imageRefs }) => {
  return (
    <>
      <div className="velease-advantage">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              {/* Section Title Start */}
              <div className="section-title dark-section">
                <h3 className="wow fadeInUp">the veLease advantage</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Smarter workspaces, <span>simplified growth.</span>
                </h2>
              </div>
              {/* Section Title End */}
            </div>

            <div className="col-lg-6">
              {/* Section Title Content Start */}
              <div className="section-title-content dark-section">
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  VeLease combines interior design, commercial real estate
                  expertise, and financial structuring into one solution. We
                  deliver premium, plug-and-play offices that scale with your
                  ambition while preserving capital for real business growth.
                </p>
              </div>
              {/* Section Title Content End */}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              {/* Vision Mission Box Start */}
              <div className="velease-advantage-box">
                {/* Vision Mission Item Start */}
                <div className="velease-advantage-item wow fadeInUp">
                  <div
                    className="icon-box"
                    ref={(el) => {
                      imageRefs.current.push(el);
                    }}
                  >
                    <img
                      src="/images/icon-our-vision.svg"
                      alt="Financial Freedom Icon"
                    />
                  </div>
                  <div className="velease-advantage-content">
                    <h3>Our Vision</h3>
                    <p>
                      To revolutionize India's office interiors by making
                      world-class, asset-light workplaces accessible to every
                      business through Furniture-as-a-Service, blending premium
                      design with financial innovation.
                    </p>
                  </div>
                </div>
                {/* Vision Mission Item End */}

                {/* Vision Mission Item Start */}
                <div
                  className="velease-advantage-item wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div
                    className="icon-box"
                    ref={(el) => {
                      imageRefs.current.push(el);
                    }}
                  >
                    <img
                      src="/images/icon-our-mission.svg"
                      alt="Asset-Backed Interiors Icon"
                    />
                  </div>
                  <div className="velease-advantage-content">
                    <h3>Our Mission</h3>
                    <p>
                      To enable companies of all sizes to scale smarter with
                      turnkey, plug-and-play interiors that convert CapEx into
                      predictable OpEx — combining design precision, operational
                      speed, and financial flexibility.
                    </p>
                  </div>
                </div>
                {/* Vision Mission Item End */}
              </div>
              {/* Vision Mission Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Numbers That Matter Section
      <div className="numbers-that-matter-section mb-5 py-20 bg-gray-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center">
              <img
                src="/images/numbers_that_matters.png"
                alt="Numbers that matters"
                className="img-fluid"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default VisionMissionSection;
