import React from "react";

interface FaqSectionProps {
  imageRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ imageRefs }) => {
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
                  Frequently Asked Questions{" "}
                  <span style={{ textTransform: "none" }}>(FAQs)</span>
                </h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Got questions? <span>We've got answers!</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Explore these common questions to understand how veLease
                  transforms office interiors into smarter, scalable, and
                  financially efficient solutions for landlords as well as
                  tenants.
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
                      <span>Q1.</span> How is veLease different from a
                      traditional interiors company?
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
                        Traditional firms charge large upfront CapEx for
                        fit-outs, locking your capital in depreciating assets.
                        veLease converts this into predictable monthly OpEx,
                        freeing liquidity while delivering world-class
                        interiors, upgrades, and maintenance under one
                        transparent agreement.
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
                      <span>Q2.</span> Who owns the furniture and fit-outs?
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
                        veLease retains full ownership of all furniture and
                        fit-outs. This means you avoid depreciation costs, while
                        upgrades, swaps, and maintenance are included. You enjoy
                        premium, functional interiors without the long-term
                        burden of ownership or hidden financial risks.
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
                      <span>Q3.</span> What is the minimum lease term?
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
                        Our standard lock-ins are 3 or 5 years, providing
                        stability and predictability. However, we also create
                        custom terms tailored to your business size, growth
                        projections, and capital needs, ensuring flexibility
                        without compromising long-term financial or operational
                        efficiency.
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
                      <span>Q4.</span> What happens if my team size changes
                      mid-lease?
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
                        Your workspace scales with you. Whether you need to
                        expand, reduce, or reconfigure, we adapt interiors
                        accordingly. Lease terms are adjusted to reflect
                        changes, ensuring your office evolves seamlessly
                        alongside your business without fresh CapEx investments.
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
                      <span>Q5.</span> Is veLease only for large offices?
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
                        No. We work with businesses of all sizes. Whether you
                        need a 5,000 sq.ft. startup hub or a 50,000 sq.ft.
                        enterprise headquarters, veLease ensures flexible,
                        premium interiors that align with your growth stage and
                        financial strategy.
                      </p>
                    </div>
                  </div>
                </div>
                {/* FAQ Item End */}

                {/* FAQ Item Start */}
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay="1.0s"
                >
                  <h2 className="accordion-header" id="heading6">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse6"
                      aria-expanded="false"
                      aria-controls="collapse6"
                    >
                      <span>Q6.</span> How fast can I move into my new office?
                    </button>
                  </h2>
                  <div
                    id="collapse6"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading6"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Timelines vary by scope, but we deliver fully branded,
                        functional offices in as little as 6–10 weeks. Our
                        turnkey process — from design to handover — eliminates
                        delays, giving you a plug-and-play workspace ready for
                        immediate use.
                      </p>
                    </div>
                  </div>
                </div>
                {/* FAQ Item End */}

                {/* FAQ Item Start */}
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay="1.2s"
                >
                  <h2 className="accordion-header" id="heading7">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse7"
                      aria-expanded="false"
                      aria-controls="collapse7"
                    >
                      <span>Q7.</span> How does leasing affect my company's
                      taxes?
                    </button>
                  </h2>
                  <div
                    id="collapse7"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading7"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        All monthly rentals paid to veLease are 100% deductible
                        as business expenses in the same year. This creates
                        faster tax savings, greater cash flow flexibility, and
                        stronger investor appeal compared to slow depreciation
                        from traditional CapEx-heavy interior investments.
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
