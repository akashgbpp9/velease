import React from "react";

interface SkillsProps {
  imageRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

const Skills: React.FC<SkillsProps> = ({ imageRefs }) => {
  return (
    <div className="our-skill">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* Our Skill Content Start */}
            <div className="our-skill-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">our edge</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Revolutionizing office interiors with{" "}
                  <span>flexible leasing.</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  We integrate world-class design with a financial model that
                  puts your capital back where it belongs — in your business.
                  <br /> <br />
                  No heavy upfront costs, just predictable monthly rentals that
                  grow with you.
                </p>
              </div>
              {/* Section Title End */}

              {/* About SkillBar Start */}
              <div className="our-skillbar">
                {/* Skills Progress Bar Start */}
                <div className="skills-progress-bar">
                  {/* Skill Item Start */}
                  <div className="skillbar" data-percent="100%">
                    <div className="skill-data">
                      <div className="skill-title">Design & Fit-Outs</div>
                      <div className="skill-no">100%</div>
                    </div>
                    <div className="skill-progress">
                      <div className="count-bar"></div>
                    </div>
                  </div>
                  {/* Skill Item End */}
                </div>
                {/* Skills Progress Bar End */}

                {/* Skills Progress Bar Start */}
                <div className="skills-progress-bar">
                  {/* Skill Item Start */}
                  <div className="skillbar" data-percent="90%">
                    <div className="skill-data">
                      <div className="skill-title">Flexible Leasing</div>
                      <div className="skill-no">90%</div>
                    </div>
                    <div className="skill-progress">
                      <div className="count-bar"></div>
                    </div>
                  </div>
                  {/* Skill Item End */}
                </div>
                {/* Skills Progress Bar End */}

                {/* Skills Progress Bar Start */}
                <div className="skills-progress-bar">
                  {/* Skill Item Start */}
                  <div className="skillbar" data-percent="80%">
                    <div className="skill-data">
                      <div className="skill-title">Furniture-as-a-Service</div>
                      <div className="skill-no">80%</div>
                    </div>
                    <div className="skill-progress">
                      <div className="count-bar"></div>
                    </div>
                  </div>
                  {/* Skill Item End */}
                </div>
                {/* Skills Progress Bar End */}
              </div>
              {/* About SkillBar End */}
            </div>
            {/* Our Skill Content End */}
          </div>

          <div className="col-lg-6">
            {/* Our Skill Image Start */}
            <div className="our-skill-image">
              <div className="our-skill-img-1">
                <figure
                  className="image-anime reveal"
                  ref={(el) => {
                    if (el && !imageRefs.current.includes(el)) {
                      imageRefs.current.push(el);
                    }
                  }}
                >
                  <img src="/images/our-skill-img-1.jpg" alt="" />
                </figure>
              </div>

              <div className="our-skill-img-2">
                <figure
                  className="image-anime reveal"
                  ref={(el) => {
                    if (el && !imageRefs.current.includes(el)) {
                      imageRefs.current.push(el);
                    }
                  }}
                >
                  <img src="/images/our-skill-img-2.jpg" alt="" />
                </figure>
              </div>

              <div className="our-skill-img-3">
                <figure
                  className="image-anime reveal"
                  ref={(el) => {
                    if (el && !imageRefs.current.includes(el)) {
                      imageRefs.current.push(el);
                    }
                  }}
                >
                  <img src="/images/our-skill-img-3.jpg" alt="" />
                </figure>
              </div>
            </div>
            {/* Our Skill Image End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
