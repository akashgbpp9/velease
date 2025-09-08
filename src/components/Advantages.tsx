import React from "react";
import NumbersThatMatter from "./NumbersThatMatter";

interface AdvantagesProps {
  imageRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

export const Advantages: React.FC<AdvantagesProps> = ({ imageRefs }) => {
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
                  A smarter way to build, <span>finance your workspace</span>
                </h2>
              </div>
              {/* Section Title End */}
            </div>

            <div className="col-lg-6">
              {/* Section Title Content Start */}
              <div className="section-title-content dark-section">
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  We combine design excellence with financial innovation,
                  delivering offices that are not only beautifully crafted but
                  also flexible, scalable, and strategically aligned with your
                  business growth.
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
                      style={{ height: "50px", width: "50px" }}
                    />
                  </div>
                  <div className="velease-advantage-content">
                    <h3>financial freedom</h3>
                    <p>
                      Our approach is rooted in the belief that your capital
                      should power your business, not be locked into
                      depreciating interiors. By shifting investment from CapEx
                      to OpEx, we ensure you can preserve liquidity while still
                      enjoying world-class workspaces. With veLease, every
                      square foot becomes a predictable monthly expense, freeing
                      you to focus on what matters most — scaling your company.
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
                      style={{ height: "50px", width: "50px" }}
                    />
                  </div>
                  <div className="velease-advantage-content">
                    <h3>asset-backed interiors</h3>
                    <p>
                      Unlike traditional fit-outs, veLease retains ownership of
                      the furniture and interiors. This means upgrades, swaps,
                      and maintenance are built into your lease — keeping your
                      workspace fresh and functional without unexpected costs.
                      It's a smarter way to ensure long-term value without
                      additional capital outlay.
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
      {/* Numbers That Matter Section */}
      <NumbersThatMatter />
    </>
  );
};
