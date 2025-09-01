import React from "react";
import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook } from "lucide-react";

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "harry R. blackston",
      position: "co-founder & CEO",
      image: "/images/team-1.jpg",
      social: {
        instagram: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "alexa brook",
      position: "human resoures manager",
      image: "/images/team-2.jpg",
      social: {
        instagram: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "suzen hilly",
      position: "civil engineering",
      image: "/images/team-3.jpg",
      social: {
        instagram: "#",
        twitter: "#",
        facebook: "#",
      },
    },
  ];

  return (
    <div className="our-team py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="row section-row align-items-center mb-16">
          <div className="col-lg-6">
            {/* Section Title */}
            <div className="section-title">
              <motion.h3
                className="text-accent text-lg font-semibold uppercase tracking-wider mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                meet our team
              </motion.h3>
              <motion.h2
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Creative minds always <span>think something</span>
              </motion.h2>
            </div>
          </div>

          <div className="col-lg-6">
            {/* Section Title Content */}
            <div className="section-title-content">
              <motion.p
                className="text-lg text-text leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                We offer a range of bespoke interior design services tailored to
                your unique needs. From concept development to final
                installation.
              </motion.p>
            </div>
          </div>
        </div>

        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-lg-4 col-md-6">
              <motion.div
                key={index}
                className="team-member-item mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Team Image */}
                <div className="team-image relative group overflow-hidden rounded-lg mb-6">
                  <a href="/team-single" className="block">
                    <motion.figure
                      className="image-anime"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-96 object-cover transition-transform duration-300"
                      />
                    </motion.figure>
                  </a>

                  {/* Team Readmore Button */}
                  <div className="team-readmore-btn absolute top-4 right-4  group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#"
                      className="p-3 rounded-full shadow-lg hover:bg-accent hover:text-white transition-colors"
                    >
                      <img
                        src="/images/arrow-white.svg"
                        alt="View"
                        className="w-4 h-4"
                      />
                    </a>
                  </div>
                </div>

                {/* Team Body */}
                <div className="team-body">
                  {/* Team Content */}
                  <div className="team-content text-center mb-4">
                    <h3 className="text-xl font-semibold  mb-2 capitalize">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium capitalize">
                      {member.position}
                    </p>
                  </div>

                  {/* Team Social List */}
                  <div className="team-social-list">
                    <div className="team-social-icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-x-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
