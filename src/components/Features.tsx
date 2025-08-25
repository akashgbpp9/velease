import React from "react";

interface FeaturesProps {
  imageRefs: React.RefObject<(HTMLElement | null)[]>;
}

const Features: React.FC<FeaturesProps> = ({ imageRefs }) => {
  const features = [
    {
      icon: "fas fa-sync-alt",
      title: "Flexible Scaling",
      description:
        "Easily scale your workspace up or down based on business needs without capital investment.",
    },
    {
      icon: "fas fa-tools",
      title: "Maintenance Included",
      description:
        "All maintenance, repairs, and replacements are covered under your monthly subscription.",
    },
    {
      icon: "fas fa-palette",
      title: "Custom Design",
      description:
        "Tailored workspace design that reflects your brand and company culture.",
    },
    {
      icon: "fas fa-clock",
      title: "Quick Setup",
      description:
        "Get your workspace up and running in days, not months with our rapid deployment.",
    },
    {
      icon: "fas fa-leaf",
      title: "Sustainable Options",
      description:
        "Eco-friendly furniture and materials that support your sustainability goals.",
    },
    {
      icon: "fas fa-headset",
      title: "24/7 Support",
      description:
        "Round-the-clock support for any workspace-related questions or issues.",
    },
  ];

  return (
    <div className="features-section">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h3>Why Choose Our Service</h3>
              <h2>Everything You Need for a Modern Workspace</h2>
              <p>
                Our comprehensive Furniture-as-a-Service solution provides
                everything you need to create an inspiring, functional, and
                cost-effective workspace without the traditional hassles of
                furniture ownership.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="features-image">
              <img
                src="/images/why-choose-img-1.jpg"
                alt="Modern Workspace Features"
              />
            </div>
          </div>
        </div>

        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className={feature.icon}></i>
                </div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
