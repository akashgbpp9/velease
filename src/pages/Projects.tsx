import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

const Projects: React.FC = () => {
  return (
    <div className="projects-page pt-20">
      <SEO
        title="Office Interior Projects in Pune | veLease Portfolio"
        description="View veLease's portfolio of office interior design projects in Pune. See how we transform workspaces with modern design and flexible leasing solutions."
        keywords="office interior projects, Pune, veLease portfolio, workspace design examples, office transformation, project gallery"
        canonical="/projects"
      />
      <div className="container mx-auto px-4 py-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-primary mb-6">Our Projects</h1>
          <p className="text-lg text-text mb-8">
            This page is under development
          </p>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Projects portfolio will go here</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
