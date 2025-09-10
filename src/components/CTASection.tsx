import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTASection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add API call or email service integration here
  };
  return (
    <div className="our-clients  py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="col-lg-12">
            <div className="cta-content-box">
              {/* Section Title */}
              <div className="section-title mb-16 text-start">
                <motion.h3
                  className="text-accent text-lg font-semibold uppercase tracking-wider mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  reach out
                </motion.h3>
                <motion.h2
                  className="text-4xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Redefining office interiors, <span>one lease at a time.</span>
                </motion.h2>
                <motion.p
                  className="text-lg text-text leading-relaxed max-w-4xl mx-auto mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  We've helped businesses and landlords transform thousands of
                  square feet into scalable, branded workspaces that fuel
                  growth. With VeLease, your office becomes more than a place to
                  work — it becomes a strategic advantage.
                </motion.p>
                {/* Contact Form Start */}
                <div className="contact-form">
                  <form
                    onSubmit={handleSubmit}
                    className="wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="row">
                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="name"
                          placeholder="Name*"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="email"
                          placeholder="Email Address*"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-12 mb-4">
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          id="phone"
                          placeholder="Your Phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-12 mb-5">
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          rows={4}
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="col-md-12">
                        <button type="submit" className="btn-default">
                          submit
                        </button>
                        <div id="msgSubmit" className="h3 hidden"></div>
                      </div>
                    </div>
                  </form>
                </div>
                {/* Contact Form End */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
