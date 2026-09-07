import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <h2 className="stat-number">10+</h2>
            <p className="stat-label">Years of Experience</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">10K+</h2>
            <p className="stat-label">Patients Treated</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">99%</h2>
            <p className="stat-label">Patient Satisfaction</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">2+</h2>
            <p className="stat-label">Specialized Fields</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
