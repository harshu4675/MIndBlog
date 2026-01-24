import React from "react";
import { Target, MessageSquare } from "lucide-react";
import "./Styles/About.css";

const About = () => {
  const stats = [
    { label: "Uptime", val: "99.9%" },
    { label: "Nodes", val: "1,204" },
    { label: "Latency", val: "0.2ms" },
    { label: "Security", val: "Lvl 9" },
  ];

  return (
    <div className="about-container">
      <h2 className="about-title">
        System <span>Specs</span>
      </h2>

      <div className="about-grid">
        {/* Left Content */}
        <div className="about-text">
          <div className="about-block">
            <h4>
              <Target size={18} /> The Vision
            </h4>
            <p>
              CORE.OS is an experimental content hub built to demonstrate modern
              React proficiency. This project explores the intersection of
              aesthetic futurism and complex data visualization.
            </p>
          </div>

          <div className="about-block">
            <h4>
              <MessageSquare size={18} /> Integration
            </h4>
            <p>
              All broadcast data is sourced from global nodes. Our mission is to
              bridge the gap between human intuition and machine precision.
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="about-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <p className="stat-label">{stat.label}</p>
              <p className="stat-value">{stat.val}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
