import React from "react";
interface AdvantagesProps {
  imageRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

const VisionMissionSection: React.FC<AdvantagesProps> = ({ imageRefs }) => {
  return (
    <>
      <div className="vision-mission">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              {/* Section Title Start */}
              <div className="section-title dark-section">
                <h3 className="wow fadeInUp">the veLease advantage</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  A behind-the-scenes <span>look at veLease</span>
                </h2>
              </div>
              {/* Section Title End */}
            </div>

            <div className="col-lg-6">
              {/* Section Title Content Start */}
              <div className="section-title-content dark-section">
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  We don’t just design offices — we reimagine how businesses and
                  landlords think about workspace investments.
                </p>
              </div>
              {/* Section Title Content End */}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              {/* Vision Mission Box Start */}
              <div className="vision-mission-box">
                {/* Vision Mission Item Start */}
                <div className="vision-mission-item wow fadeInUp">
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
                  <div className="vision-mission-content">
                    <h3>Our Vision</h3>
                    <p>
                      Our vision is to redefine office interiors as strategic
                      assets. By merging architecture with financial innovation,
                      we help businesses grow faster while keeping their capital
                      free for what matters most.
                    </p>
                  </div>
                </div>
                {/* Vision Mission Item End */}

                {/* Vision Mission Item Start */}
                <div
                  className="vision-mission-item wow fadeInUp"
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
                  <div className="vision-mission-content">
                    <h3>Our Mission</h3>
                    <p>
                      Our mission is to deliver world-class, plug-and-play
                      workspaces without the burden of heavy CapEx. By offering
                      flexible leasing, end-to-end design, and continuous
                      upgrades, veLease ensures every office is future-proof,
                      scalable, and financially efficient.
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
