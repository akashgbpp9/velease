import React from "react";
import { motion } from "framer-motion";

interface VeLeasePromiseProps {
  imageRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

const VeLeasePromise: React.FC<VeLeasePromiseProps> = ({ imageRefs }) => {
  return (
    <div className="velease-promise py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="row section-row align-items-center">
          <div className="col-lg-12 text-center">
            <motion.h3
              className="text-accent text-lg font-semibold uppercase tracking-wider mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              the veLease promise
            </motion.h3>
            <motion.h2
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Scaling offices &{" "}
              <span className="text-accent">ambitions, together.</span>
            </motion.h2>
            <motion.p
              className="text-xl text-text leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              With VeLease, you don't just lease interiors — you gain a
              strategic growth partner who ensures your workspace evolves
              seamlessly as your ambitions expand.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VeLeasePromise;
