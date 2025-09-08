import React from "react";

const QuoteSection: React.FC = () => {
  return (
    <section className="quote-section">
      <div className="h-100">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="quote-content">
              <blockquote className="wow fadeInUp" data-wow-delay="0.4s">
                <p>
                  India's office market continues to outperform global peers,
                  with H1 2025 gross leasing hitting a historic ~42 million
                  sq.ft; on track to surpass 90 million sq.ft annually.
                </p>
                <cite>— Cushman & Wakefield India</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
