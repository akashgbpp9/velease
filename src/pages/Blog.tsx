import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

const Blog: React.FC = () => {
  return (
    <div className="blog-page pt-20">
      <SEO
        title="Office Interior Design Blog | veLease Insights"
        description="Read the latest insights on office interior design, workspace trends, and flexible leasing solutions from veLease experts in Pune."
        keywords="office interior design blog, workspace trends, office design insights, veLease blog, workplace design tips"
        canonical="/blog"
      />
      <div className="container mx-auto px-4 py-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-primary mb-6">Our Blog</h1>
          <p className="text-lg text-text mb-8">
            This page is under development
          </p>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Blog posts will go here</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
