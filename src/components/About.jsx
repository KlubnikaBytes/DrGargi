import React from 'react';
import { Award, BookOpen, HeartPulse } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-header text-center">
          <p className="subtitle-small">ABOUT THE DOCTOR</p>
          <h2 className="section-title">Your Journey To A <br/> Pain-Free Life</h2>
          <p className="section-subtitle mx-auto">
            A trusted medical professional dedicated to accurate diagnosis, personalized care, and long-term recovery.
          </p>
        </div>

        <div className="about-content">
          <div className="about-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800&h=1000" 
              alt="Medical Office" 
              className="about-img"
            />
            <div className="about-badge">
              <div className="badge-circle">
                <HeartPulse size={24} color="var(--primary)" />
              </div>
              <div>
                <strong>Compassionate Care</strong>
                <p>Patient-first approach</p>
              </div>
            </div>
          </div>

          <div className="about-qualifications">
            <div className="qual-card">
              <div className="qual-icon">
                <BookOpen size={24} />
              </div>
              <div className="qual-text">
                <h3>Medical Education</h3>
                <p>MBBS - North Bengal Medical College</p>
                <p>MD - IPGME&R/SSKM Kolkata</p>
                <p>MD, DNB (Anesthesiology)</p>
              </div>
            </div>

            <div className="qual-card">
              <div className="qual-icon">
                <Award size={24} />
              </div>
              <div className="qual-text">
                <h3>Specialized Fellowships</h3>
                <p>Fellowship in Interventional Pain Management (WBUHS)</p>
                <p>FPM - ESI Institute of Pain Management</p>
                <p>CCEPC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
