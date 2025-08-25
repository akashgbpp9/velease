import React from "react";

interface StatisticsProps {
  imageRefs: React.RefObject<(HTMLElement | null)[]>;
}

const Statistics: React.FC<StatisticsProps> = ({ imageRefs }) => {
  return (
    <div className="statistics-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-building"></i>
              </div>
              <div className="stat-content">
                <h3 className="counter">500+</h3>
                <p>Workspaces Delivered</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="stat-content">
                <h3 className="counter">50,000+</h3>
                <p>Employees Served</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="stat-content">
                <h3 className="counter">98%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-award"></i>
              </div>
              <div className="stat-content">
                <h3 className="counter">15+</h3>
                <p>Industry Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
