import React from "react";
import { motion } from "framer-motion";

interface AboutFacilityListProps {
  imageRefs?: React.MutableRefObject<(HTMLElement | null)[]>;
}

const AboutFacilityList: React.FC<AboutFacilityListProps> = ({ imageRefs }) => {
  const facilities = [
    {
      icon: "/images/icon-about-facility-1.svg",
      title: "Capital-Friendly Model",
      description:
        "We eliminate heavy upfront CapEx with flexible leasing models, converting interiors into predictable monthly operating expenses.",
    },
    {
      icon: "/images/icon-about-facility-2.svg",
      title: "Design That Performs",
      description:
        "Our blend of design expertise and financial insight ensures every office is functional, scalable, and aligned with your brand.",
    },
    {
      icon: "/images/icon-about-facility-2.svg",
      title: "Partner-Led Execution",
      description:
        "From consultation to handover, our professional team manages every stage, creating consistent experiences for tenants, landlords, and IPC partners.",
    },
  ];

  return (
    <div className="col-lg-12 mt-16">
      {/* About Facility List */}
      <div className="about-facility-list grid grid-cols-1 md:grid-cols-3 gap-8">
        {facilities.map((facility, index) => (
          <motion.div
            key={index}
            className="about-facility-item "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="icon-box mb-4">
              <img
                src={facility.icon}
                alt={facility.title}
                className="w-16 h-16 mx-auto"
              />
            </div>
            <div className="about-facility-content">
              <h3 className="text-xl font-semibold mb-3 capitalize">
                {facility.title}
              </h3>
              <p className="text-text leading-relaxed">
                {facility.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutFacilityList;
