import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import PageHeader from "../components/PageHeader";
import SEO from "../components/SEO";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-page">
      <SEO
        title="Contact veLease - Office Interior Design in Pune"
        description="Get in touch with veLease for office interior design services in Pune. Contact us for consultation, design, and flexible leasing solutions for your workspace."
        keywords="contact veLease, office interior design contact, Pune, workspace consultation, get quote, office design inquiry"
        canonical="/contact"
      />
      {/* Page Header */}
      <PageHeader
        title="Contact us"
        breadcrumbs={[
          { label: "home", href: "/" },
          { label: "contact us", href: "/contact" },
        ]}
      />

      {/* Page Contact Us */}
      <div className="page-contact-us py-20">
        <div className="container mx-auto px-4">
          <div className="row">
            {/* Contact Us Image */}
            <div className="col-lg-6">
              <div className="contact-us-image">
                <motion.figure
                  className="image-anime reveal"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="/images/service-entry-img.jpg"
                    alt="Contact Us"
                    className="w-full h-auto rounded-lg"
                  />
                </motion.figure>
              </div>
            </div>

            {/* Contact Us Form */}
            <div className="col-lg-6">
              <div className="contact-us-form">
                {/* Section Title */}
                <div className="section-title mb-8">
                  <motion.h3
                    className="text-lg font-medium text-accent mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    contact form
                  </motion.h3>
                  <motion.h2
                    className="text-4xl font-bold  mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    We would love to hear{" "}
                    <span className="text-accent">from you</span>
                  </motion.h2>
                  <motion.p
                    className="text-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Your email address will not be published. Required fields
                    are marked *
                  </motion.p>
                </div>

                {/* Contact Form */}
                <motion.div
                  className="contact-form"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                          placeholder="Name*"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                          placeholder="Email Address*"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                        placeholder="Your Phone"
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Your Message"
                      />
                    </div>

                    <div>
                      <button type="submit" className="btn-default">
                        submit
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="google-map py-20">
        <div className="container mx-auto px-4">
          <div className="row">
            <div className="col-lg-12">
              {/* Section Title */}
              <div className="section-title text-center mb-12">
                <motion.h3
                  className="text-lg font-medium text-accent mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Our contact
                </motion.h3>
                <motion.h2
                  className="text-4xl font-bold  mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Get in touch with us
                </motion.h2>
                <motion.p
                  className="text-text max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Get in touch to discuss your employee wellbeing needs today.
                  Please give us a call, drop us an email or fill out the
                  contact form and we'll get back to you.
                </motion.p>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-lg-12">
                {/* Contact Info Box */}
                <div className="contact-info-box">
                  {/* Phone Number Contact Info */}
                  <motion.div
                    className="contact-info-item"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0 }}
                    viewport={{ once: true }}
                  >
                    {/* Icon Box */}
                    <div className="icon-box flex justify-center mb-4">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                        <i className="fa-solid fa-phone"></i>
                      </div>
                    </div>

                    {/* Contact Info Content */}
                    <div className="contact-info-content">
                      <h3 className="text-lg font-bold mb-3 capitalize">
                        phone number
                      </h3>
                      <p className="text-text mb-1">
                        <a href="tel:+919890907614">+91 989 090 7614</a>
                      </p>
                    </div>
                  </motion.div>

                  {/* Email Support Contact Info */}
                  <motion.div
                    className="contact-info-item"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {/* Icon Box */}
                    <div className="icon-box flex justify-center mb-4">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                        <i className="fa-regular fa-envelope"></i>
                      </div>
                    </div>

                    {/* Contact Info Content */}
                    <div className="contact-info-content">
                      <h3 className="text-lg font-bold mb-3 capitalize">
                        e-mail support
                      </h3>
                      <p className="text-text mb-1">
                        <a href="mailto:sales@velease.com">sales@velease.com</a>
                      </p>
                    </div>
                  </motion.div>

                  {/* Headquarter Contact Info */}
                  <motion.div
                    className="contact-info-item"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {/* Icon Box */}
                    <div className="icon-box flex justify-center mb-4">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                        <i className="fa-solid fa-house"></i>
                      </div>
                    </div>

                    {/* Contact Info Content */}
                    <div className="contact-info-content">
                      <h3 className="text-lg font-bold mb-3 capitalize">
                        Pune Experience Center
                      </h3>
                      <p className="text-text mb-1">
                        101-B, Gamma-1, Giga Space IT Park, Viman Nagar, Pune,
                        India
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              {/* Google Map IFrame */}
              <motion.div
                className="google-map-iframe mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps - New York Location"
                  className="w-full h-96 rounded-lg"
                /> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11642.76212806078!2d73.9012288652697!3d18.566357035004167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1004fe79edf%3A0x7bdea6756fd3ea95!2sGiga%20Space%20IT%20Park%20Exit%20Gate!5e0!3m2!1sen!2sin!4v1756848354114!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96 rounded-lg"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
