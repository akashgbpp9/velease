import React from "react";
import "./NumbersThatMatter.css";

const NumbersThatMatter: React.FC = () => {
  return (
    <section className="numbers-that-matter-section wow fadeInUp">
      <div className="container">
        <div className="row section-row justify-content-center mb-2">
          <div className="col-lg-11">
            {/* <div className="section-title dark-section">
                <h3 className="wow fadeInUp">the veLease advantage</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  A smarter way to build, <span>finance your workspace</span>
                </h2>
              </div> */}
            <div className="section-title ">
              <h2 className="sub-heading">CapEx vs. OpEx: <span>Numbers That Matter</span></h2>
              <p >
                Owning interiors locks your capital in depreciating assets. Leasing with veLease
                preserves cash, provides higher tax shields, and keeps your balance sheet light.
              </p>
            </div>
          </div>
        </div>

        <div className="ntm-grid">
          {/* Labels column */}
          <div className=" ntm-col ntm-labels">
            <div className="ntm-label-head" aria-hidden="true"></div>
            <div className="ntm-label capex">CapEx</div>
            <div className="ntm-label opex">OpEx</div>
          </div>

          {/* Upfront Investment */}
          {/* <div className="ntm-col">
            <div className="ntm-col-head hidden"></div>
            <div className="ntm-label capex">CapEx</div>
            <div className="ntm-label opex">OpEx</div>
          </div> */}
          {/* Upfront Investment */}
          <div className="ntm-col">
            <div className="ntm-col-head">Upfront Investment</div>
            <div className="ntm-card value big">₹1 Cr</div>
            <div className="ntm-card value big">₹0</div>
          </div>

          {/* Tax Benefits */}
          <div className="ntm-col">
            <div className="ntm-col-head">Tax Benefits</div>
            <div className="ntm-card">
              <div className="ntm-strong">₹3L shield</div>
              <div className="ntm-muted">(10% WDV)</div>
            </div>
            <div className="ntm-card">
              <div className="ntm-strong">₹6L shield</div>
              <div className="ntm-muted">(100% deductible)</div>
            </div>
          </div>

          {/* Asset Value */}
          <div className="ntm-col">
            <div className="ntm-col-head">Asset Value</div>
            <div className="ntm-card text">Depreciates yearly</div>
            <div className="ntm-card text">Maintained by veLease</div>
          </div>

          {/* Cash Flow / Growth */}
          <div className="ntm-col">
            <div className="ntm-col-head">Cash Flow/Growth</div>
            <div className="ntm-card text">Heavy drain, limited liquidity</div>
            <div className="ntm-card text">Predictable, capital preserved</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersThatMatter;


