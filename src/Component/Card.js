import React from 'react';
import '../Component/Card.css';
import { NavLink } from 'react-router-dom';
import { FaArrowRight, FaGraduationCap, FaBookmark } from 'react-icons/fa';

function Card(mj) {
  // Determine a category based on the title (simple logic for design)
  const isCS = mj.title.toLowerCase().includes('data') || mj.title.toLowerCase().includes('structure') || mj.title.toLowerCase().includes('algo');
  const category = isCS ? 'COMPUTER SCIENCE' : 'ENGINEERING';

  return (
    <div className="col-12 col-md-6 col-lg-4" style={{ animationDelay: `${mj.index * 0.1}s` }}>
      <div className="premium-study-card shadow-sm h-100">
        <div className="study-img-container">
          <img src={mj.img} className="study-card-img" alt={mj.title} />
          <div className="study-img-overlay">
             <FaGraduationCap className="study-overlay-icon" />
          </div>
          <div className="study-type-tag">
            <FaBookmark className="me-1" /> {category}
          </div>
        </div>
        <div className="study-card-body p-4">
          <h4 className="study-card-title mb-3">{mj.title}</h4>
          <p className="study-card-text mb-4">{mj.desc}</p>
          
          <div className="study-card-footer d-flex justify-content-between align-items-center">
             <NavLink className="study-learn-btn" to={mj.visit}>
                Learn <FaArrowRight className="ms-2 btn-icon-anim" />
             </NavLink>
             <span className="study-time-badge">30 mins read</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;