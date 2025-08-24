import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const NotFound: React.FC = () => {
  return (
    <div className="not-found-page pt-20 min-h-screen bg-secondary flex items-center">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-8xl font-bold text-primary mb-6">404</div>
          <h1 className="text-4xl font-bold text-primary mb-6">
            Page Not Found
          </h1>
          <p className="text-lg text-text mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Let's
            get you back on track to creating your dream space.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="btn-default flex items-center justify-center"
            >
              <Home size={20} className="mr-2" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-highlighted flex items-center justify-center"
            >
              <ArrowLeft size={20} className="mr-2" />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
