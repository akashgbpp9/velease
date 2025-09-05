import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

const FAQs: React.FC = () => {
  return (
    <div className="faqs-page pt-20">
      <SEO
        title="Office Interior Design FAQs | veLease Pune"
        description="Find answers to frequently asked questions about office interior design, flexible leasing, and workspace solutions from veLease in Pune."
        keywords="office interior design FAQs, workspace design questions, veLease FAQ, office leasing questions, Pune interior design"
        canonical="/faqs"
      />
      <div className="container mx-auto px-4 py-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-primary mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-text mb-8">
            This page is under development
          </p>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">FAQ content will go here</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQs;
