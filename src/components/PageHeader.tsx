import React from "react";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  breadcrumbs: Array<{
    label: string;
    href?: string;
    active?: boolean;
  }>;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  breadcrumbs,
  backgroundImage = "/images/page-header-bg.jpg",
}) => {
  return (
    <div
      className="page-header relative py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header-box text-center">
              <motion.h1
                className="text-5xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {title}
              </motion.h1>
              <motion.nav
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ol className="breadcrumb flex items-center space-x-2 text-gray-300">
                  {breadcrumbs.map((crumb, index) => (
                    <li
                      key={index}
                      className="breadcrumb-item flex items-center"
                    >
                      {crumb.href ? (
                        <a
                          href={crumb.href}
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          {crumb.label}
                        </a>
                      ) : (
                        <span
                          className={
                            crumb.active ? "text-white" : "text-gray-300"
                          }
                        >
                          {crumb.label}
                        </span>
                      )}
                      {index < breadcrumbs.length - 1 && (
                        <span className="mx-2 text-gray-400">/</span>
                      )}
                    </li>
                  ))}
                </ol>
              </motion.nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
