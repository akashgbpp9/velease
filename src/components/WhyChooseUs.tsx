import React from "react";

interface WhyChooseUsProps {
  imageRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ imageRefs }) => {
  return (
    <div className="why-choose-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            {/* Why Choose Content Start */}
            <div className="why-choose-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3>why choose us</h3>
                <h2>
                  Workspaces that don't drain your <span>capital.</span>
                </h2>
                <p>
                  With veLease, interiors shift from CapEx to OpEx — giving you
                  premium offices on a predictable monthly lease while your
                  capital stays free to fuel business growth.
                </p>
              </div>
              {/* Section Title End */}

              {/* Why Choose Item List Start */}
              <div className="why-choose-item-list">
                {/* Why Choose Item Start */}
                <div className="why-choose-item">
                  {/* Icon Box Start */}
                  <div className="icon-box">
                    <img
                      src="/images/icon-why-choose-1.svg"
                      alt="CapEx to OpEx Conversion"
                    />
                  </div>
                  {/* Icon Box End */}

                  {/* Why Choose Item Content Start */}
                  <div className="why-choose-item-content">
                    <h3>CapEx → OpEx</h3>
                    <p>
                      Instead of heavy upfront bills on capex spend for the
                      office interiors, our model converts interiors into a
                      predictable monthly operating expense.
                    </p>
                  </div>
                  {/* Why Choose Item Content End */}
                </div>
                {/* Why Choose Item End */}

                {/* Why Choose Item Start */}
                <div className="why-choose-item">
                  {/* Icon Box Start */}
                  <div className="icon-box">
                    <img
                      src="/images/icon-why-choose-2.svg"
                      alt="End-to-End Workspace Design"
                    />
                  </div>
                  {/* Icon Box End */}

                  {/* Why Choose Item Content Start */}
                  <div className="why-choose-item-content">
                    <h3>End-to-End Workspace Design</h3>
                    <p>
                      From concept to completion, we manage every detail —
                      design, build, furniture, and maintenance.
                    </p>
                  </div>
                  {/* Why Choose Item Content End */}
                </div>
                {/* Why Choose Item End */}

                {/* Why Choose Item Start */}
                <div className="why-choose-item">
                  {/* Icon Box Start */}
                  <div className="icon-box">
                    <img
                      src="/images/icon-why-choose-3.svg"
                      alt="Flexible Leasing"
                    />
                  </div>
                  {/* Icon Box End */}

                  {/* Why Choose Item Content Start */}
                  <div className="why-choose-item-content">
                    <h3>Flexible Leasing</h3>
                    <p>
                      Whether you need a 3-year, 5-year, or custom lock-in, our
                      predictable rent-per-sq.ft. model scales with your
                      business.
                    </p>
                  </div>
                  {/* Why Choose Item Content End */}
                </div>
                {/* Why Choose Item End */}
              </div>
              {/* Why Choose Item List End */}
            </div>
            {/* Why Choose Content End */}
          </div>

          <div className="col-lg-7">
            {/* Why Choose Images Images Start */}
            <div className="why-choose-images">
              {/* Why Choose Box 1 Start */}
              <div className="why-choose-img-box-1">
                {/* Why Choose img 1 Start */}
                <div className="why-choose-img-1">
                  <figure
                    className="image-anime reveal"
                    ref={(el) => {
                      imageRefs.current[2] = el;
                    }}
                  >
                    <img
                      src="/images/why-choose-img-1.jpg"
                      alt="Why Choose Image 1"
                    />
                  </figure>
                </div>
                {/* Why Choose img 1 End */}

                {/* Why Choose img 2 Start */}
                <div className="why-choose-img-2">
                  <figure
                    className="image-anime reveal"
                    ref={(el) => {
                      imageRefs.current[3] = el;
                    }}
                  >
                    <img
                      src="/images/why-choose-img-2.jpg"
                      alt="Why Choose Image 2"
                    />
                  </figure>
                </div>
                {/* Why Choose img 2 End */}
              </div>
              {/* Why Choose Box 1 End */}

              {/* Why Choose Box 2 Start */}
              <div className="why-choose-img-box-2">
                {/* Why Choose img 3 Start */}
                <div className="why-choose-img-3">
                  <figure
                    className="image-anime reveal"
                    ref={(el) => {
                      imageRefs.current[4] = el;
                    }}
                  >
                    <img
                      src="/images/why-choose-img-3.jpg"
                      alt="Why Choose Image 3"
                    />
                  </figure>
                </div>
                {/* Why Choose img 3 End */}

                {/* Why Choose img 4 Start */}
                <div className="why-choose-img-4">
                  <figure
                    className="image-anime reveal"
                    ref={(el) => {
                      imageRefs.current[5] = el;
                    }}
                  >
                    <img
                      src="/images/why-choose-img-4.jpg"
                      alt="Why Choose Image 4"
                    />
                  </figure>
                </div>
                {/* Why Choose img 4 End */}
              </div>
              {/* Why Choose Box 2 End */}
            </div>
            {/* Why Choose Images Images End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
