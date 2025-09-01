import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const AboutFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const aboutFAQs = [
    {
      question: "How long has VeLease been in business?",
      answer:
        "VeLease has been transforming spaces and lives for over 15 years. We started as a small design studio and have grown into a full-service interior design and architecture firm, serving clients across the region with exceptional design solutions.",
    },
    {
      question:
        "What makes VeLease different from other interior design firms?",
      answer:
        "Our unique approach combines creative expertise with a client-centered methodology. We focus on understanding your vision and bringing it to life with thoughtful attention to detail, whether it's transforming a single room or an entire home.",
    },
    {
      question: "What types of projects does VeLease handle?",
      answer:
        "We handle a diverse range of projects, from beautifully crafted residential spaces to functional and stylish commercial interiors. Our portfolio includes luxury home designs, residential interior design, commercial space design, and renovation projects.",
    },
    {
      question: "How does the design process work at VeLease?",
      answer:
        "Our comprehensive process includes initial consultation to understand your vision, design planning with material selection and 3D renderings, project execution with full coordination, and final review with thorough walkthrough.",
    },
    {
      question: "What is VeLease's design philosophy?",
      answer:
        "Our vision is rooted in the belief that thoughtfully designed spaces can transform lives. We create interiors that reflect our clients' unique identities, blending comfort, functionality, and beauty with timeless design and modern innovations.",
    },
    {
      question: "Does VeLease work with existing furniture and decor?",
      answer:
        "Absolutely! We believe in sustainable design and can incorporate your existing furniture and decor into new designs. Our team will assess your current pieces and suggest how to integrate them seamlessly with new elements.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="about-faqs py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="row align-items-center">
          <div className="col-lg-7">
            {/* About FAQ Content */}
            <div className="about-faqs-content">
              {/* Section Title */}
              <div className="section-title mb-12">
                <motion.h3
                  className="text-accent text-lg font-semibold uppercase tracking-wider mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  frequently asked questions
                </motion.h3>
                <motion.h2
                  className="text-4xl font-bold text-primary mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Everything you need to know{" "}
                  <span className="text-accent">about VeLease</span>
                </motion.h2>
                <motion.p
                  className="text-lg text-text leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Get answers to the most common questions about our services,
                  process, and what makes VeLease the right choice for your
                  interior design needs.
                </motion.p>
              </div>

              {/* FAQ Accordion */}
              <div className="faq-accordion">
                {aboutFAQs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="accordion-item border border-gray-200 rounded-lg mb-4 overflow-hidden hover:shadow-md transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
                        type="button"
                        onClick={() => toggleFAQ(index)}
                      >
                        <span className="flex items-center text-left">
                          <span className="text-accent font-bold mr-3">
                            {String(index + 1).padStart(2, "0")}.
                          </span>
                          <span className="text-primary font-semibold">
                            {faq.question}
                          </span>
                        </span>
                        <div className="flex-shrink-0 ml-4">
                          {openIndex === index ? (
                            <Minus size={20} className="text-accent" />
                          ) : (
                            <Plus size={20} className="text-accent" />
                          )}
                        </div>
                      </button>
                    </h2>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          className="accordion-collapse"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="accordion-body p-6 pt-0 bg-gray-50">
                            <p className="text-text leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Contact CTA */}
              <motion.div
                className="mt-8 p-6 bg-primary rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white text-xl font-semibold mb-2">
                  Still have questions?
                </h3>
                <p className="text-gray-200 mb-4">
                  Our team is here to help you with any questions about our
                  services.
                </p>
                <a
                  href="/contact"
                  className="btn-default inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-dark transition-colors"
                >
                  Contact Us Today
                </a>
              </motion.div>
            </div>
          </div>

          <div className="col-lg-5">
            {/* About FAQ Image */}
            <div className="about-faqs-image">
              <motion.figure
                className="image-anime"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="/images/faqs-image.jpg"
                  alt="About VeLease FAQ"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </motion.figure>

              {/* Additional Info Card */}
              <motion.div
                className="mt-8 p-6 bg-gray-100 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-primary text-lg font-semibold mb-3">
                  Why Choose VeLease?
                </h4>
                <ul className="space-y-2 text-text">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    15+ years of experience
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    1000+ successful projects
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    95% client satisfaction rate
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Verified suppliers only
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFAQSection;
