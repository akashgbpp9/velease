import React from "react";

interface TeamProps {
  imageRefs: React.RefObject<(HTMLElement | null)[]>;
}

const Team: React.FC<TeamProps> = ({ imageRefs }) => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      image: "/images/team-1.jpg",
      description: "15+ years in workspace design and furniture industry",
    },
    {
      name: "Michael Chen",
      position: "Head of Design",
      image: "/images/team-2.jpg",
      description: "Expert in creating functional and beautiful workspaces",
    },
    {
      name: "Emily Rodriguez",
      position: "Operations Director",
      image: "/images/team-3.jpg",
      description: "Specializes in scaling operations and client success",
    },
  ];

  return (
    <div className="team-section">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h3>Meet Our Team</h3>
              <h2>Experts in Workspace Transformation</h2>
              <p>
                Our experienced team combines deep industry knowledge with
                innovative thinking to deliver exceptional workspace solutions
                that drive business success.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-title-content">
              <p>
                With decades of combined experience in workspace design,
                furniture management, and business operations, we understand
                what it takes to create environments that inspire productivity
                and collaboration.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="team-member">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-overlay">
                    <div className="team-social">
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fas fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h3>{member.name}</h3>
                  <p className="position">{member.position}</p>
                  <p className="description">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
