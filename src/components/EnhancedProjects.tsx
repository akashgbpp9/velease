import React, { useState } from "react";
import { Link } from "react-router-dom";

interface EnhancedProjectsProps {
  imageRefs: React.RefObject<(HTMLElement | null)[]>;
}

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const EnhancedProjects: React.FC<EnhancedProjectsProps> = ({ imageRefs }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Modern Tech Startup Office",
      category: "startup",
      image: "/images/project-1.jpg",
      description:
        "A collaborative workspace designed for innovation and creativity",
    },
    {
      id: 2,
      title: "Corporate Headquarters",
      category: "corporate",
      image: "/images/project-2.jpg",
      description:
        "Professional environment that reflects company values and culture",
    },
    {
      id: 3,
      title: "Co-working Space Hub",
      category: "coworking",
      image: "/images/project-3.jpg",
      description: "Flexible workspace solution for modern professionals",
    },
    {
      id: 4,
      title: "Creative Agency Studio",
      category: "creative",
      image: "/images/project-4.jpg",
      description:
        "Inspirational space that fuels creativity and collaboration",
    },
    {
      id: 5,
      title: "Financial Services Office",
      category: "corporate",
      image: "/images/project-5.jpg",
      description:
        "Sophisticated workspace that builds trust and professionalism",
    },
    {
      id: 6,
      title: "Healthcare Facility",
      category: "healthcare",
      image: "/images/project-6.jpg",
      description:
        "Comfortable and functional space for healthcare professionals",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "startup", label: "Startup" },
    { key: "corporate", label: "Corporate" },
    { key: "coworking", label: "Co-working" },
    { key: "creative", label: "Creative" },
    { key: "healthcare", label: "Healthcare" },
  ];

  return (
    <div className="enhanced-projects-section">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-5">
            <div className="section-title">
              <h3>Our Latest Projects</h3>
              <h2>Transforming Workspaces Across Industries</h2>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="section-title-content">
              <p>
                Discover how we've helped companies of all sizes create
                inspiring, functional, and cost-effective workspaces through our
                innovative Furniture-as-a-Service model.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="project-filters">
              <ul>
                {categories.map((category) => (
                  <li key={category.key}>
                    <button
                      className={activeFilter === category.key ? "active" : ""}
                      onClick={() => setActiveFilter(category.key)}
                    >
                      {category.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="col-lg-4 col-md-6 project-item-wrapper"
            >
              <div className="project-item">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <Link
                      to={`/project/${project.id}`}
                      className="project-link"
                    >
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link to={`/project/${project.id}`} className="project-btn">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="projects-cta">
              <Link to="/projects" className="btn-default btn-highlighted">
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedProjects;
