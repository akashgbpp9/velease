import React from "react";

const Services: React.FC = () => {
  return (
    <div className="our-services">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            {/* Section Title Start */}
            <div className="section-title">
              <h3>our solutions</h3>
              <h2>
                Smart workspace solutions for{" "}
                <span>every stage of growth.</span>
              </h2>
            </div>
            {/* Section Title End */}
          </div>

          <div className="col-lg-6">
            {/* Section Title Content Start */}
            <div className="section-title-content">
              <p>
                We go beyond interiors to offer flexible, finance-first
                solutions that help companies move in faster, scale smarter, and
                preserve their capital. <br /> <br />
                From tailored fit-outs to furniture leasing, veLease makes
                office expansion effortless.
              </p>
            </div>
            {/* Section Title Content End */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            {/* Service Item Start */}
            <div className="service-item">
              {/* Service Image Start */}
              <div className="service-image">
                <a href="/solutions/office-interiors-consultation" data-cursor-text="View">
                  <figure>
                    <img
                      src="images/service-1.jpg"
                      alt="Workspace Strategy & Consultation"
                    />
                  </figure>
                </a>
              </div>
              {/* Service Image End */}

              {/* Service Button Start */}
              <div className="service-btn">
                <a href="/solutions/office-interiors-consultation">
                  <img src="/images/arrow-white.svg" alt="View Service" />
                </a>
              </div>
              {/* Service Button End */}

              {/* Service Content Start */}
              <div className="service-content">
                <h3>
                  <a href="/solutions/office-interiors-consultation">Office Interiors Consultation</a>
                </h3>
                <p>
                  We design offices aligned to business goals, offering smart
                  space planning and financial structuring strategies.
                </p>
              </div>
              {/* Service Content End */}
            </div>
            {/* Service Item End */}
          </div>

          <div className="col-lg-4 col-md-6">
            {/* Service Item Start */}
            <div className="service-item">
              {/* Service Image Start */}
              <div className="service-image">
                <a href="/solutions/design-and-build-execution" data-cursor-text="View">
                  <figure>
                    <img
                      src="images/service-2.jpg"
                      alt="Design & Build Execution"
                    />
                  </figure>
                </a>
              </div>
              {/* Service Image End */}

              {/* Service Button Start */}
              <div className="service-btn">
                <a href="/solutions/design-and-build-execution">
                  <img src="/images/arrow-white.svg" alt="View Service" />
                </a>
              </div>
              {/* Service Button End */}

              {/* Service Content Start */}
              <div className="service-content">
                <h3>
                  <a href="/solutions/design-and-build-execution">Design & Build Execution</a>
                </h3>
                <p>
                  From design to fit-out and furnishing, we handle it
                  all—delivering a seamless, ready-to-move-in workspace.
                </p>
              </div>
              {/* Service Content End */}
            </div>
            {/* Service Item End */}
          </div>

          <div className="col-lg-4 col-md-6">
            {/* Service Item Start */}
            <div className="service-item">
              {/* Service Image Start */}
              <div className="service-image">
                <a href="/solutions/furniture-as-a-service" data-cursor-text="View">
                  <figure>
                    <img
                      src="images/service-3.jpg"
                      alt="Furniture-as-a-Service (FaaS)"
                    />
                  </figure>
                </a>
              </div>
              {/* Service Image End */}

              {/* Service Button Start */}
              <div className="service-btn">
                <a href="/solutions/furniture-as-a-service">
                  <img src="/images/arrow-white.svg" alt="View Service" />
                </a>
              </div>
              {/* Service Button End */}

              {/* Service Content Start */}
              <div className="service-content">
                <h3>
                  <a href="/solutions/furniture-as-a-service">Furniture-as-a-Service (FaaS)</a>
                </h3>
                <p>
                  Lease premium furniture & interiors—no upfront cost. Monthly
                  rent covers upgrades, swaps, and hassle-free maintenance.
                </p>
              </div>
              {/* Service Content End */}
            </div>
            {/* Service Item End */}
          </div>

          <div className="col-lg-12">
            {/* All Services Button Start */}
            <div className="all-services-btn">
              <a href="/solutions" className="btn-default">
                see all solutions
              </a>
            </div>
            {/* All Services Button End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
