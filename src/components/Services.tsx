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
                preserve their capital. From tailored fit-outs to furniture
                leasing, veLease makes office expansion effortless.
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
                <a href="/services/1" data-cursor-text="View">
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
                <a href="/services/1">
                  <img src="/images/arrow-white.svg" alt="View Service" />
                </a>
              </div>
              {/* Service Button End */}

              {/* Service Content Start */}
              <div className="service-content">
                <h3>
                  <a href="/services/1">Workspace Strategy & Consultation</a>
                </h3>
                <p>
                  We align your office design with your business goals,
                  providing strategic advice on space planning, growth
                  forecasting, and financial structuring.
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
                <a href="/services/2" data-cursor-text="View">
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
                <a href="/services/2">
                  <img src="/images/arrow-white.svg" alt="View Service" />
                </a>
              </div>
              {/* Service Button End */}

              {/* Service Content Start */}
              <div className="service-content">
                <h3>
                  <a href="/services/2">Design & Build Execution</a>
                </h3>
                <p>
                  We manage the entire process — from design concepts to fit-out
                  and furnishing — delivering a branded, plug-and-play workspace
                  ready to move in.
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
                <a href="/services/3" data-cursor-text="View">
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
                <a href="/services/3">
                  <img src="/images/arrow-white.svg" alt="View Service" />
                </a>
              </div>
              {/* Service Button End */}

              {/* Service Content Start */}
              <div className="service-content">
                <h3>
                  <a href="/services/3">Furniture-as-a-Service (FaaS)</a>
                </h3>
                <p>
                  We lease premium furniture and interiors you don't have to
                  buy, with upgrades, swaps, and maintenance included in your
                  monthly rent.
                </p>
              </div>
              {/* Service Content End */}
            </div>
            {/* Service Item End */}
          </div>

          <div className="col-lg-12">
            {/* All Services Button Start */}
            <div className="all-services-btn">
              <a href="/services" className="btn-default">
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
