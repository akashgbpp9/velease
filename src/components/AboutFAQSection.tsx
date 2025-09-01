import React from "react";

interface AboutFAQSectionProps {
  imageRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

const AboutFAQSection: React.FC<AboutFAQSectionProps> = ({ imageRefs }) => {
  return (
    <div className="our-faqs">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            {/* Our Faq Content Start */}
            <div className="our-faqs-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">
                  Frequently Asked Questions (FAQs)
                </h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Have a question? Here's clarity!
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  We know landlords, tenants, and IPCs want certainty before
                  committing. Here are answers to the most frequent questions:
                </p>
              </div>
              {/* Section Title End */}

              {/* FAQ Accordion Start */}
              <div className="faq-accordion" id="accordion">
                {/* FAQ Item Start */}
                <div className="accordion-item wow fadeInUp">
                  <h2 className="accordion-header" id="heading1">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      aria-expanded="true"
                      aria-controls="collapse1"
                    >
                      <span>Q1.</span> How does veLease differ from traditional
                      interior firms?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        We shift interiors from CapEx to OpEx, offering
                        predictable leases, faster ROI, and hassle-free
                        scalability — unlike CapEx-heavy firms.
                      </p>
                    </div>
                  </div>
                </div>
                {/* FAQ Item End */}

                {/* FAQ Item Start */}
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <h2 className="accordion-header" id="heading2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                      aria-expanded="false"
                      aria-controls="collapse2"
                    >
                      <span>Q2.</span> What's the typical process for starting a
                      project?
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading2"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        We begin with consultation, test fits, and financial
                        modeling, followed by design concepts, execution
                        planning, and plug-and-play handover.
                      </p>
                    </div>
                  </div>
                </div>
                {/* FAQ Item End */}

                {/* FAQ Item Start */}
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <h2 className="accordion-header" id="heading3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="false"
                      aria-controls="collapse3"
                    >
                      <span>Q3.</span> How long does a project usually take?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading3"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Timelines range from 6–10 weeks depending on size,
                        complexity, and customization. Larger builds may require
                        additional coordination.
                      </p>
                    </div>
                  </div>
                </div>
                {/* FAQ Item End */}

                {/* FAQ Item Start */}
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <h2 className="accordion-header" id="heading4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4"
                      aria-expanded="false"
                      aria-controls="collapse4"
                    >
                      <span>Q4.</span> Do you work with landlords as well as
                      tenants?
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading4"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes. We help landlords convert bare shells into
                        market-ready spaces, boosting occupancy, rental yield,
                        and long-term tenant retention.
                      </p>
                    </div>
                  </div>
                </div>
                {/* FAQ Item End */}

                {/* FAQ Item Start */}
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  <h2 className="accordion-header" id="heading5">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                      <span>Q5.</span> What support do you provide after
                      handover?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading5"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Furniture swaps, maintenance, and upgrades are built
                        into your lease — ensuring your workspace stays fresh
                        and functional over time.
                      </p>
                    </div>
                  </div>
                </div>
                {/* FAQ Item End */}
              </div>
              {/* FAQ Accordion End */}
            </div>
            {/* Our Faq Content End */}
          </div>

          <div className="col-lg-5">
            {/* Our Faq Image Start */}
            <div className="our-faqs-image">
              <figure
                className="image-anime reveal"
                ref={(el) => {
                  if (el && !imageRefs.current.includes(el)) {
                    imageRefs.current.push(el);
                  }
                }}
              >
                <img src="/images/faqs-image.jpg" alt="" />
              </figure>
            </div>
            {/* Our Faq Image End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFAQSection;
