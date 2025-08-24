import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectSingle: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="project-single-page pt-20">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-primary mb-6">
            Project Details
          </h1>
          <p className="text-lg text-text mb-8">
            Project ID: {id} - This page is under development
          </p>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">
              Project details content will go here
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectSingle;
