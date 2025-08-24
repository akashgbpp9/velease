import React from "react";
import { motion } from "framer-motion";
import { Users, Award, Clock, Star, CheckCircle } from "lucide-react";

const About: React.FC = () => {
  const stats = [
    { number: "15+", label: "Years Experience", icon: <Clock size={24} /> },
    {
      number: "200+",
      label: "Projects Completed",
      icon: <CheckCircle size={24} />,
    },
    { number: "95%", label: "Client Satisfaction", icon: <Star size={24} /> },
    { number: "25+", label: "Team Members", icon: <Users size={24} /> },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      position: "Lead Interior Designer",
      image: "/images/team-1.jpg",
      description:
        "With over 10 years of experience, Sarah specializes in modern minimalist designs.",
    },
    {
      name: "Michael Chen",
      position: "Senior Architect",
      image: "/images/team-2.jpg",
      description:
        "Michael brings innovative architectural solutions to every project.",
    },
    {
      name: "Emily Rodriguez",
      position: "Creative Director",
      image: "/images/team-3.jpg",
      description:
        "Emily oversees the creative vision and ensures every detail is perfect.",
    },
  ];

  return (
    <div className="about-page pt-20">
      {/* Page Header */}
      <section className="page-header bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our story, mission, and the passionate team behind Inspaire
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="story-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="section-title">
                <h3>our story</h3>
                <h2>
                  Creating beautiful spaces since{" "}
                  <span className="text-accent">2009</span>
                </h2>
                <p>
                  Founded with a passion for exceptional design, Inspaire has
                  been transforming spaces and lives for over 15 years. What
                  started as a small design studio has grown into a full-service
                  interior design and architecture firm, serving clients across
                  the region.
                </p>
                <p>
                  Our journey has been marked by countless successful projects,
                  satisfied clients, and a commitment to pushing the boundaries
                  of what's possible in interior design.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="story-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/about-us-bg-shape.svg"
                alt="About Us Background"
                className="w-full h-96 object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4 text-accent">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-text font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="mission"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary text-white p-8 rounded-lg h-full">
                <div className="mb-6">
                  <Award size={48} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-200 leading-relaxed">
                  To create exceptional living spaces that inspire, comfort, and
                  reflect the unique personality and lifestyle of each client,
                  while maintaining the highest standards of quality and
                  craftsmanship.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="vision"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-accent text-white p-8 rounded-lg h-full">
                <div className="mb-6">
                  <Star size={48} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-200 leading-relaxed">
                  To be the leading interior design firm known for innovative
                  design solutions, exceptional client experiences, and creating
                  spaces that stand the test of time while embracing modern
                  trends and technologies.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-accent text-lg font-semibold uppercase tracking-wider mb-4">
              our team
            </h3>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Meet the experts
            </h2>
            <p className="text-lg text-text max-w-2xl mx-auto">
              Our talented team of designers, architects, and craftsmen work
              together to bring your vision to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-text leading-relaxed">
                    {member.description}
                  </p>
                </div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to work with us?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Let's discuss your project and how we can help bring your vision
              to life.
            </p>
            <a href="/contact" className="btn-highlighted text-lg px-10 py-5">
              get in touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
