import React from "react";

interface ProjectsProps {
  imageRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

const Projects: React.FC<ProjectsProps> = ({ imageRefs }) => {
  return (
    <div className="our-project">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-5">
            {/* Section Title Start */}
            <div className="section-title">
              <h3 className="wow fadeInUp">latest project</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Creative projects that define<span> our style</span>
              </h2>
            </div>
            {/* Section Title End */}
          </div>

          <div className="col-lg-7">
            {/* Section Title Content Start */}
            <div className="section-title-content">
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                Our portfolio showcases a diverse range of projects, from
                beautifully crafted residential spaces functional and stylish
                commercial interiors
              </p>
            </div>
            {/* Section Title Content End */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            {/* Our Project Nav start */}
            <div className="our-Project-nav wow fadeInUp" data-wow-delay="0.4s">
              <ul>
                <li>
                  <a href="#" className="active-btn" data-filter="*">
                    all
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".architecture">
                    architecture
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".interior">
                    interior
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".bedroom">
                    bedroom
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".furniture">
                    furniture
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".kitchen">
                    kitchen
                  </a>
                </li>
              </ul>
            </div>
            {/* Our Project Nav End */}
          </div>

          <div className="col-lg-12">
            {/* Project Item Boxes start */}
            <div className="row project-item-boxes align-items-center">
              <div className="col-md-6 project-item-box architecture bedroom">
                {/* Project Item Start */}
                <div className="project-item wow fadeInUp">
                  <div className="project-image">
                    <div className="project-featured-image">
                      <figure
                        className="image-anime"
                        ref={(el) => {
                          if (el && !imageRefs.current.includes(el)) {
                            imageRefs.current.push(el);
                          }
                        }}
                      >
                        <img src="/images/project-1.jpg" alt="" />
                      </figure>
                    </div>

                    <div className="project-btn">
                      <a href="/project-single">
                        <img src="/images/arrow-white.svg" alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="project-content">
                    <h3>residential spaces</h3>
                    <h2>
                      <a href="/project-single">
                        urban retreat: modern design meets comfort
                      </a>
                    </h2>
                  </div>
                </div>
                {/* Project Item End */}
              </div>

              <div className="col-md-6 project-item-box interior kitchen">
                {/* Project Item Start */}
                <div
                  className="project-item wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="project-image">
                    <div className="project-featured-image">
                      <figure
                        className="image-anime"
                        ref={(el) => {
                          if (el && !imageRefs.current.includes(el)) {
                            imageRefs.current.push(el);
                          }
                        }}
                      >
                        <img src="/images/project-2.jpg" alt="" />
                      </figure>
                    </div>

                    <div className="project-btn">
                      <a href="/project-single">
                        <img src="/images/arrow-white.svg" alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="project-content">
                    <h3>luxury homes</h3>
                    <h2>
                      <a href="/project-single">
                        luxurious loft: industrial chic for living
                      </a>
                    </h2>
                  </div>
                </div>
                {/* Project Item End */}
              </div>

              <div className="col-md-6 project-item-box furniture architecture">
                {/* Project Item Start */}
                <div
                  className="project-item wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="project-image">
                    <div className="project-featured-image">
                      <figure
                        className="image-anime"
                        ref={(el) => {
                          if (el && !imageRefs.current.includes(el)) {
                            imageRefs.current.push(el);
                          }
                        }}
                      >
                        <img src="/images/project-3.jpg" alt="" />
                      </figure>
                    </div>

                    <div className="project-btn">
                      <a href="/project-single">
                        <img src="/images/arrow-white.svg" alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="project-content">
                    <h3>outdoor living spaces</h3>
                    <h2>
                      <a href="/project-single">
                        coastal vibes: serenity by the sea
                      </a>
                    </h2>
                  </div>
                </div>
                {/* Project Item End */}
              </div>

              <div className="col-md-6 project-item-box kitchen bedroom">
                {/* Project Item Start */}
                <div
                  className="project-item wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="project-image">
                    <div className="project-featured-image">
                      <figure
                        className="image-anime"
                        ref={(el) => {
                          if (el && !imageRefs.current.includes(el)) {
                            imageRefs.current.push(el);
                          }
                        }}
                      >
                        <img src="/images/project-4.jpg" alt="" />
                      </figure>
                    </div>

                    <div className="project-btn">
                      <a href="/project-single">
                        <img src="/images/arrow-white.svg" alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="project-content">
                    <h3>modern designs</h3>
                    <h2>
                      <a href="/project-single">
                        minimalist haven: simple, clean, inviting spaces
                      </a>
                    </h2>
                  </div>
                </div>
                {/* Project Item End */}
              </div>
            </div>
            {/* Project Item Boxes End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
