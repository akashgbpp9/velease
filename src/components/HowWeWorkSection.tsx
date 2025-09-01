import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HowWeWorkSection: React.FC = () => {
  const [currentLogo, setCurrentLogo] = useState(0);

  const workSteps = [
    {
      icon: "/images/icon-how-we-work-1.svg",
      title: "01. initial consultation",
      description:
        "We start with a one-on meeting to understand your vision preferences and requirement.",
    },
    {
      icon: "/images/icon-how-we-work-2.svg",
      title: "02. design planning",
      description:
        "This involves selecting materials, and layouts, furnishings, as well as creating 3D renderings.",
    },
    {
      icon: "/images/icon-how-we-work-3.svg",
      title: "03. project execution",
      description:
        "With the design plans in this place, we manage and coordinate all aspects of the projects.",
    },
    {
      icon: "/images/icon-how-we-work-4.svg",
      title: "04. final review",
      description:
        "After completing project we conduct a thorough walkthrough with you to review the space.",
    },
  ];

  const companyLogos = [
    "/images/company-logo-1.png",
    "/images/company-logo-2.png",
    "/images/company-logo-3.png",
    "/images/company-logo-4.png",
    "/images/company-logo-5.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % companyLogos.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [companyLogos.length]);

  return (
    <div className="how-we-work py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="row section-row align-items-center mb-16">
          <div className="col-lg-6">
            {/* Section Title */}
            <div className="section-title dark-section">
              <motion.h3
                className="text-accent text-lg font-semibold uppercase tracking-wider mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                how we work
              </motion.h3>
              <motion.h2
                className="text-4xl font-bold text-primary mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                From concept to completion in{" "}
                <span className="text-accent">our work</span>
              </motion.h2>
            </div>
          </div>

          <div className="col-lg-6">
            {/* Section Title Content */}
            <div className="section-title-content dark-section">
              <motion.p
                className="text-lg text-text leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our comprehensive approach guides you through each phase of the
                design process, from initial brainstorming and
                conceptualization.
              </motion.p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            {/* How We Work List */}
            <div className="how-we-work-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {workSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="how-we-work-item bg-white p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="icon-box mb-4">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-16 h-16"
                    />
                  </div>
                  <div className="how-we-work-content">
                    <h3 className="text-lg font-semibold text-primary mb-3 capitalize">
                      {step.title}
                    </h3>
                    <p className="text-text leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* How Work Company Slider */}
            <div className="how-work-company-slider">
              <div className="swiper">
                <div className="swiper-wrapper flex items-center justify-center">
                  {companyLogos.map((logo, index) => (
                    <div
                      key={index}
                      className={`swiper-slide transition-opacity duration-500 ${
                        index === currentLogo ? "opacity-100" : "opacity-30"
                      }`}
                    >
                      <div className="company-logo mx-4">
                        <img
                          src={logo}
                          alt={`Company ${index + 1}`}
                          className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Company Logo Navigation */}
              <div className="flex justify-center mt-8 space-x-2">
                {companyLogos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentLogo(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentLogo ? "bg-accent" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWorkSection;
