import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ClientsSection: React.FC = () => {
  const [currentClient, setCurrentClient] = useState(0);

  const clientLogos = [
    "/images/company-logo-1.png",
    "/images/company-logo-2.png",
    "/images/company-logo-3.png",
    "/images/company-logo-4.png",
    "/images/company-logo-5.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentClient((prev) => (prev + 1) % clientLogos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [clientLogos.length]);

  return (
    <div className="our-clients py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="col-lg-12">
            <div className="our-clients-box text-center">
              {/* Section Title */}
              <div className="section-title mb-16">
                <motion.h3
                  className="text-accent text-lg font-semibold uppercase tracking-wider mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  our clients
                </motion.h3>
                <motion.h2
                  className="text-4xl font-bold text-primary mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Transforming 1,000+ spaces with tailored designs
                </motion.h2>
                <motion.p
                  className="text-lg text-text leading-relaxed max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  We've had the privilege of designing and transforming over a
                  thousand interiors, creating spaces that truly resonate with
                  our clients' visions and needs. Our approach focuses on
                  blending aesthetics and functionality, ensuring each project
                  brings comfort, elegance, and a personalized touch.
                </motion.p>
              </div>

              {/* Client Logo Slider */}
              <div className="our-client-slider">
                <div className="swiper">
                  <div className="swiper-wrapper flex items-center justify-center">
                    {clientLogos.map((logo, index) => (
                      <div
                        key={index}
                        className={`swiper-slide transition-all duration-500 ${
                          index === currentClient
                            ? "opacity-100 scale-110"
                            : "opacity-40 scale-90"
                        }`}
                      >
                        <div className="client-logo mx-8">
                          <img
                            src={logo}
                            alt={`Client ${index + 1}`}
                            className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Logo Navigation */}
                <div className="flex justify-center mt-12 space-x-3">
                  {clientLogos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentClient(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentClient
                          ? "bg-accent scale-125"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Stats */}
              <motion.div
                className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    1000+
                  </div>
                  <div className="text-text">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    500+
                  </div>
                  <div className="text-text">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    15+
                  </div>
                  <div className="text-text">Years Experience</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
