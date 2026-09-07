import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="hero-badge">
            <Star className="badge-icon" size={16} />
            <span>Consultant Pain & Palliative Care Physician</span>
          </div>
          <h1 className="hero-title">
            Expert Care for <br />
            Every Pain & Comfort
          </h1>
          <p className="hero-subtitle">
            MBBS - North Bengal Medical College | MD, DNB (Anesthesiology)<br/>
            Fellowship in Interventional Pain Management (WBUHS), CCEPC<br/>
            FPM - ESI Institute of Pain Management<br/><br/>
            Experience in Chronic Pain & Cancer Pain Management
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Book Consultation
            </button>
            <button className="btn btn-outline" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
              Explore Services <ArrowRight size={18} />
            </button>
          </div>

          <div className="hero-doctor-info">
            <div className="doctor-avatar">
              <Star size={30} color="var(--accent)" />
            </div>
            <div>
              <h4>Dr. Gargi Nandi</h4>
              <p>10+ Years Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-graphics animate-fade-in">
           <img src={`/doctor.jpg?t=${new Date().getTime()}`} alt="Dr. Gargi Nandi" className="graphics-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
