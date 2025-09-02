import React from "react";
import { motion } from "framer-motion";

const OurEdge: React.FC = () => {
  return (
    <div className="best-selling py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="col-lg-6">
            {/* Best Selling Content */}
            <div className="best-selling-content">
              {/* Best Selling Content Image */}
              <div className="best-selling-content-img mb-8">
                <motion.figure
                  className="image-anime"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="/images/best-selling-img-1.jpg"
                    alt="Best Selling"
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </motion.figure>
              </div>

              {/* Section Title */}
              <div className="section-title">
                <motion.h3
                  className="text-accent text-lg font-semibold uppercase tracking-wider mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  The veLease Edge
                </motion.h3>
                <motion.h2
                  // className="text-4xl font-bold text-primary mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Design <span>without Debt</span>, Build{" "}
                  <span>without Burden</span>.
                </motion.h2>
                <motion.p
                  className="text-lg text-text leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  We believe premium offices shouldn’t require massive upfront
                  spend. veLease transforms interiors into a predictable monthly
                  lease — freeing your capital for business growth.
                </motion.p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {/* Best Selling Image */}
            <div className="best-selling-image">
              <motion.figure
                className="image-anime"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <img
                  src="/images/best-selling-img-2.jpg"
                  alt="Best Selling Materials"
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEdge;
