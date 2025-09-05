import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

const BlogSingle: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="blog-single-page pt-20">
      <SEO
        title={`Blog Post ${id} | Office Interior Design | veLease`}
        description="Read our latest blog post about office interior design, workspace trends, and flexible leasing solutions in Pune."
        keywords="office interior design blog, workspace trends, office design insights, veLease blog post"
        canonical={`/blog/${id}`}
      />
      <div className="container mx-auto px-4 py-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-primary mb-6">Blog Post</h1>
          <p className="text-lg text-text mb-8">
            Blog ID: {id} - This page is under development
          </p>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Blog post content will go here</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogSingle;
