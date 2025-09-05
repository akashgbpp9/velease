import React from "react";

interface AboutUsProps {
  imageRefs: React.MutableRefObject<(HTMLElement | null)[]>;
  counterRefs: React.MutableRefObject<(HTMLSpanElement | null)[]>;
}

const AboutUs: React.FC<AboutUsProps> = ({ imageRefs, counterRefs }) => {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* About Us Images Start */}
            <div className="about-us-images">
              {/* About Image 1 Start */}
              <div className="about-img-1">
                <figure
                  className="image-anime reveal"
                  ref={(el) => {
                    imageRefs.current[0] = el;
                  }}
                >
                  <img src="/images/about-img-1.jpg" alt="About Us Image 1" />
                </figure>
              </div>
              {/* About Image 1 End */}

              {/* About Image 2 Start */}
              <div className="about-img-2">
                <figure
                  className="image-anime reveal"
                  ref={(el) => {
                    imageRefs.current[1] = el;
                  }}
                >
                  <img src="/images/about-img-2.jpg" alt="About Us Image 2" />
                </figure>

                {/* Feedback Counter Start */}
                <div className="experience-counter">
                  <h3>
                    <span
                      className="counter"
                      ref={(el) => {
                        counterRefs.current[0] = el;
                      }}
                    >
                      0
                    </span>
                    %
                  </h3>
                  <p>Upfront cost</p>
                </div>
                {/* Feedback Counter End */}
              </div>
              {/* About Image 2 End */}

              {/* Feedback Counter Start */}
              <div className="feedback-counter">
                <p>
                  <span
                    className="counter"
                    ref={(el) => {
                      counterRefs.current[1] = el;
                    }}
                  >
                    100
                  </span>
                  %
                </p>
                <h3>tax deductible</h3>
              </div>
              {/* Feedback Counter End */}
            </div>
            {/* About Us Images End */}
          </div>

          <div className="col-lg-6">
            {/* About Us Content Start */}
            <div className="about-us-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">about us</h3>
                <h2
                  className="text-anime-style-2 gradient-text"
                  data-cursor="-opaque"
                >
                  Design without debt, growth <span> without compromise.</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  We believe workspaces should accelerate business, not drain
                  it. veLease transforms bare-shells into fully-functional
                  offices with zero upfront cost — so your capital stays free to
                  fuel growth. 🚀
                </p>
              </div>
              {/* Section Title End */}

              {/* About Us Content Body Start */}
              <div className="about-us-content-body">
                {/* About Content Info Start */}
                <div className="about-us-content-info">
                  {/* About Us Content List Start */}
                  <div
                    className="about-us-content-list wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <ul>
                      <li>smart interiors</li>
                      <li>flexible leasing</li>
                      <li>predictable monthly expense</li>
                    </ul>
                  </div>
                  {/* About Us Content List End */}

                  {/* About Us Content Button Start */}
                  <div
                    className="about-us-content-btn wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <button
                      className="btn-default"
                      onClick={() => {
                        const element = document.getElementById("how-it-works");
                        if (element) {
                          element.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }
                      }}
                    >
                      How it Works
                    </button>
                  </div>
                  {/* About Us Content Button End */}
                </div>
                {/* About Content Info End */}
                {/* About Content List Start */}
                <div className="about-us-contact-list">
                  {/* About Contact Item Start */}
                  <div
                    className="about-contact-item wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="icon-box">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="about-contact-content">
                      <p>need any help?</p>
                      <h3>+91 989 090 7614</h3>
                    </div>
                  </div>
                  {/* About Contact Item End */}
                  {/* About Contact Item Start */}
                  <div
                    className="about-contact-item wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="icon-box">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="about-contact-content ">
                      <h3 style={{ textTransform: "lowercase" }}>
                        sales@velease.com
                      </h3>
                    </div>
                  </div>
                  {/* About Contact Item End */}

                  {/* About Contact Item Start */}
                  {/* <div
                    className="about-contact-item wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-box">
                      <figure className="image-anime">
                        <img src="/images/author-1.jpg" alt="Amaan Kazi" />
                      </figure>
                    </div>
                    <div className="about-contact-content">
                      <h3>Amaan Kazi</h3>
                      <p>co founder</p>
                    </div>
                  </div> */}
                  {/* About Contact Item End */}
                </div>
                {/* About Content List End */}
              </div>
              {/* About Us Content Body End */}
            </div>
            {/* About Us Content End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
