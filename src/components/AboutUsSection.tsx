import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

interface AboutUsProps {
  imageRefs: React.MutableRefObject<(HTMLElement | null)[]>;
  counterRefs: React.MutableRefObject<(HTMLSpanElement | null)[]>;
}

const AboutUsSection: React.FC<AboutUsProps> = ({ imageRefs, counterRefs }) => {
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
    <div className="about-us page-about-us py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* About Us Images Start */}
            <div className="about-us-images relative">
              {/* About Image 1 Start */}
              <div className="about-img-1 mb-4">
                <motion.figure
                  className="image-anime reveal"
                  ref={(el) => {
                    imageRefs.current[0] = el;
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="/images/about-img-1.jpg"
                    alt="About Us"
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </motion.figure>
              </div>
              {/* About Image 1 End */}

              {/* About Image 2 Start */}
              <div className="about-img-2 relative">
                <motion.figure
                  className="image-anime reveal"
                  ref={(el) => {
                    imageRefs.current[1] = el;
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="/images/about-img-2.jpg"
                    alt="About Us"
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </motion.figure>

                {/* Experience Counter Start */}
                <div className="experience-counter absolute -bottom-6 -right-6  text-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-3xl font-bold">
                    <span
                      className="counter"
                      ref={(el) => {
                        counterRefs.current[0] = el;
                      }}
                    >
                      15
                    </span>
                    +
                  </h3>
                  <p className="text-sm">Years of experience</p>
                </div>
                {/* Experience Counter End */}
              </div>
              {/* About Image 2 End */}

              {/* Feedback Counter Start */}
              <div className="feedback-counter absolute -top-6 -left-6 text-white p-6 ">
                <p className="text-3xl font-bold">
                  <span
                    className="counter"
                    ref={(el) => {
                      counterRefs.current[1] = el;
                    }}
                  >
                    95
                  </span>
                  %
                </p>
                <h3 className="text-sm">positive feedback</h3>
              </div>
              {/* Feedback Counter End */}
            </div>
            {/* About Us Images End */}
          </div>

          <div className="col-lg-6">
            {/* About Us Content Start */}
            <div className="about-us-content">
              {/* Section Title Start */}
              <div className="section-title mb-8">
                <motion.h3
                  className="text-accent text-lg font-semibold uppercase tracking-wider mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  about us
                </motion.h3>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Smart interiors, built for <span>business growth</span>
                </motion.h2>
                <motion.p
                  className="text-lg text-text leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  At veLease, we believe offices shouldn’t drain capital or slow
                  expansion. Our team brings together expertise in design,
                  leasing, and financial structuring to help companies and
                  landlords unlock the true value of their spaces. From
                  bare-shell transformations to scalable interiors, we turn
                  workplaces into growth engines.
                </motion.p>
              </div>
              {/* Section Title End */}

              {/* About Us Content Body Start */}
              <div className="about-us-content-body">
                {/* About Content Info Start */}
                <div className="about-us-content-info mb-8">
                  {/* About Us Content List Start */}
                  <motion.div
                    className="about-us-content-list mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <ul className="space-y-2">
                      <li className="flex items-center text-text">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        financially smart solutions
                      </li>
                      <li className="flex items-center text-text">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        growth-focused approach
                      </li>
                      <li className="flex items-center text-text">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        flexible, future-ready models
                      </li>
                    </ul>
                  </motion.div>
                  {/* About Us Content List End */}

                  {/* About Us Content Button Start */}
                  <motion.div
                    className="about-us-content-btn"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="/contact"
                      className="btn-default inline-block text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                    >
                      Talk to Us
                    </a>
                  </motion.div>
                  {/* About Us Content Button End */}
                </div>
                {/* About Content Info End */}

                {/* About Content List Start */}
                <div className="about-us-contact-list space-y-4">
                  {/* About Contact Item Start */}
                  <motion.div
                    className="about-contact-item flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="icon-box bg-accent text-white p-3 rounded-lg mr-4">
                      <Phone size={20} />
                    </div>
                    <div className="about-contact-content">
                      <p className="text-sm text-text">need any help?</p>
                      <h3 className="text-lg font-semibold ">
                        <a href="tel:+919890907614">+91 989 090 7614</a>
                      </h3>
                    </div>
                  </motion.div>
                  {/* About Contact Item End */}

                  {/* About Contact Item Start */}
                  {/* <motion.div
                    className="about-contact-item flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="icon-box mr-4">
                      <figure className="image-anime">
                        <img
                          src="/images/author-1.jpg"
                          alt="Co Founder"
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      </figure>
                    </div>
                    <div className="about-contact-content">
                      <h3 className="text-lg font-semibold text-primary">
                        leslie alexander
                      </h3>
                      <p className="text-sm text-text">co founder</p>
                    </div>
                  </motion.div> */}
                  {/* About Contact Item End */}
                </div>
                {/* About Content List End */}
              </div>
              {/* About Us Content Body End */}
            </div>
            {/* About Us Content End */}
          </div>

          <div className="col-lg-12 mt-16">
            {/* About Facility List Start */}
            <div className="about-facility-list grid grid-cols-1 md:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  className="about-facility-item"
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
            {/* About Facility List End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
