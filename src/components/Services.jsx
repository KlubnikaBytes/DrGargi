import React from 'react';
import { Activity, Shield } from 'lucide-react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container text-center">
        <h2 className="section-title text-white">Helping You Return <br/> To An Active Life</h2>
        <p className="section-subtitle mx-auto text-white-muted">
          Specialized pain management treatments tailored to your unique condition. Our goal is to alleviate suffering and improve your overall quality of life.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <Activity size={32} />
            </div>
            <h3>Chronic Pain Management</h3>
            <p>
              Comprehensive care for long-term pain conditions including back pain, neck pain, joint pain, neuropathy, and fibromyalgia. We utilize advanced interventional techniques and tailored therapies.
            </p>
            <ul className="service-list">
              <li>Neuropathic Pain</li>
              <li>Spine & Joint Pain</li>
              <li>Headaches & Migraines</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <Shield size={32} />
            </div>
            <h3>Cancer Pain Management</h3>
            <p>
              Specialized palliative care focused on relieving the symptoms and stress of cancer. Our multi-disciplinary approach ensures you receive the maximum comfort during your treatment journey.
            </p>
            <ul className="service-list">
              <li>Palliative Care</li>
              <li>Nerve Blocks</li>
              <li>Advanced Pain Therapy</li>
            </ul>
          </div>
        </div>

        <div className="services-cta">
          <button className="btn btn-white" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
