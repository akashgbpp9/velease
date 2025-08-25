import React from "react";

const CompanyLogos: React.FC = () => {
  return (
    <div className="company-logos-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="company-logos-wrapper">
              <div className="company-logos-title text-center">
                <h3>Trusted by Leading Companies</h3>
                <p>
                  We partner with industry leaders to deliver exceptional
                  workspaces
                </p>
              </div>

              <div className="company-logos-grid">
                <div className="company-logo-item">
                  <img src="/images/company-logo-1.svg" alt="Company Logo 1" />
                </div>
                <div className="company-logo-item">
                  <img src="/images/company-logo-2.svg" alt="Company Logo 2" />
                </div>
                <div className="company-logo-item">
                  <img src="/images/company-logo-3.svg" alt="Company Logo 3" />
                </div>
                <div className="company-logo-item">
                  <img src="/images/company-logo-4.svg" alt="Company Logo 4" />
                </div>
                <div className="company-logo-item">
                  <img src="/images/company-logo-5.svg" alt="Company Logo 5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
