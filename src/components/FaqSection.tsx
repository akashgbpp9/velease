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
                  Frequently Asked Questions (FAQs)
                </h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Got questions? We've got answers!
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
                        A traditional firm charges large upfront CapEx for
                        fit-outs. veLease converts this into a monthly OpEx
                        model, preserving your capital while still delivering
                        premium interiors.
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
                        veLease retains ownership, which means you don't bear
                        depreciation costs. We also handle upgrades, swaps, and
                        maintenance.
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
                        We typically work with 3-year and 5-year lock-ins, but
                        can create custom terms depending on your business
                        needs.
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
                        Your workspace scales with you. We can expand or
                        reconfigure interiors, with adjustments reflected in
                        your lease.
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
                        No. We design and lease for companies of all sizes —
                        from 5,000 sq.ft. startups to 50,000 sq.ft. enterprises.
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
                        Depending on the project size, we deliver fully
                        functional, branded offices in as little as 6–10 weeks.
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
                        Your monthly rent is 100% deductible as a business
                        expense. This gives you faster tax savings compared to
                        slow depreciation under CapEx.
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
