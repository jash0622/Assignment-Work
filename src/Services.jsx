/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Phone, Droplet, Wrench, Flame } from 'lucide-react';
import './animation.css'

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="service-card">
    <div className="service-icon">
      <Icon size={48} strokeWidth={1} />
    </div>
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
    <button className="service-button">
      EXPLORE THIS SERVICE &gt;
    </button>
  </div>
);

const ServicesSection = () => (
  <div id="assignment" className="services-section">
    <h2 className="services-title">OUR SERVICES</h2>
    <div className="services-grid">
      <ServiceCard
        icon={Phone}
        title="Emergency Plumbing Services"
        description="Our plumbers are ready to go 24/7 for emergencies - including nights, weekends and holidays."
      />
      <ServiceCard
        icon={Wrench}
        title="Plumbing and Drains"
        description="As the largest plumbing and drain service company, we make thousands of repairs every day."
      />
      <ServiceCard
        icon={Droplet}
        title="Water Damage"
        description="Our teams are equipped with state-of-the-art water extraction and cleanup equipment."
      />
      <ServiceCard
        icon={Flame}
        title="Water Heaters"
        description="Trust Roto-Rooter for repair and replacement of gas, electric and tankless water heaters."
      />
    </div>
  </div>
);

export default ServicesSection;