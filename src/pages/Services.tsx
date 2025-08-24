import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Palette,
  Home,
  Building,
  Wrench,
  Users,
  Lightbulb,
} from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: <Palette size={48} className="text-accent" />,
      title: "Interior Design",
      description:
        "Complete interior design solutions tailored to your lifestyle and preferences.",
      features: [
        "Space Planning",
        "Color Schemes",
        "Furniture Selection",
        "Lighting Design",
      ],
      image: "/images/service-1.jpg",
    },
    {
      id: 2,
      icon: <Building size={48} className="text-accent" />,
      title: "Architecture",
      description:
        "Innovative architectural designs that blend functionality with aesthetic appeal.",
      features: [
        "Concept Design",
        "Technical Drawings",
        "3D Visualization",
        "Project Management",
      ],
      image: "/images/service-2.jpg",
    },
    {
      id: 3,
      icon: <Wrench size={48} className="text-accent" />,
      title: "Renovation",
      description:
        "Transform your existing space with our comprehensive renovation services.",
      features: [
        "Kitchen Remodeling",
        "Bathroom Updates",
        "Whole House Renovation",
        "Custom Cabinetry",
      ],
      image: "/images/service-3.jpg",
    },
    {
      id: 4,
      icon: <Home size={48} className="text-accent" />,
      title: "Space Planning",
      description:
        "Optimize your space for maximum functionality and visual appeal.",
      features: [
        "Layout Optimization",
        "Traffic Flow",
        "Storage Solutions",
        "Multi-functional Design",
      ],
      image: "/images/service-4.jpg",
    },
    {
      id: 5,
      icon: <Users size={48} className="text-accent" />,
      title: "Consultation",
      description:
        "Expert advice to help you make informed decisions about your space.",
      features: [
        "Design Consultation",
        "Color Consultation",
        "Furniture Consultation",
        "Project Planning",
      ],
      image: "/images/service-5.jpg",
    },
    {
      id: 6,
      icon: <Lightbulb size={48} className="text-accent" />,
      title: "Custom Solutions",
      description:
        "Bespoke design solutions for unique spaces and requirements.",
      features: [
        "Custom Furniture",
        "Unique Lighting",
        "Specialty Materials",
        "Personalized Design",
      ],
      image: "/images/service-6.jpg",
    },
  ];

  return (
    <div className="services-page pt-20">
      {/* Page Header */}
      <section className="page-header bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive interior design and architecture services to transform
            your space
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="service-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">
                      What's included:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-text"
                        >
                          <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/services/${service.id}`}
                    className="btn-default w-full text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-accent text-lg font-semibold uppercase tracking-wider mb-4">
              our process
            </h3>
            <h2 className="text-4xl font-bold text-primary mb-6">
              How we work
            </h2>
            <p className="text-lg text-text max-w-2xl mx-auto">
              Our streamlined process ensures your project runs smoothly from
              concept to completion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "We start with a detailed consultation to understand your vision, needs, and budget.",
              },
              {
                step: "02",
                title: "Design Concept",
                description:
                  "Our team creates a comprehensive design concept tailored to your requirements.",
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "We carefully execute the design plan with attention to every detail.",
              },
              {
                step: "04",
                title: "Completion",
                description:
                  "Final touches and walkthrough to ensure your complete satisfaction.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Contact us today to discuss your project and receive a
              personalized quote.
            </p>
            <Link to="/contact" className="btn-highlighted text-lg px-10 py-5">
              Get Free Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
