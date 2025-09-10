import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ClientsSection: React.FC = () => {
  // const [currentClient, setCurrentClient] = useState(0);

  // const clientLogos = [
  //   "/images/company-logo-1.png",
  //   "/images/company-logo-2.png",
  //   "/images/company-logo-3.png",
  //   "/images/company-logo-4.png",
  //   "/images/company-logo-5.png",
  // ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentClient((prev) => (prev + 1) % clientLogos.length);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [clientLogos.length]);

  return (
    <div className="our-clients py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="col-lg-12">
            <div className="our-clients-box ">
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
                  className="text-4xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Redefining office interiors, one lease at a time.
                </motion.h2>
                <motion.p
                  className="text-lg text-text leading-relaxed max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  We’ve helped businesses and landlords transform thousands of
                  square feet into scalable, branded workspaces that fuel
                  growth. With veLease, your office becomes more than a place to
                  work — it becomes a strategic advantage.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
