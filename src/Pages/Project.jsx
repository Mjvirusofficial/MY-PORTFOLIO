import React from 'react';
import './Project.css';
import ProjectData from '../Component/Project/ProjectData';
import Structure from '../Component/Project/Structure/Structure';
import { FaCodeBranch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Project({ previewMode = false }) {
  // Reversing data to show latest projects first, but keeping specific order
  let projectsToDisplay = [ProjectData[0], ...[...ProjectData.slice(1)].reverse()];

  if (previewMode) {
    const dHisaabProject = ProjectData.find(p => p.title === 'D-Hisaab') || projectsToDisplay[0];
    projectsToDisplay = [dHisaabProject];
  }

  return (
    <div className="project-page-root">
      {/* Premium Header Section */}
      <section className="project-hero-section text-center py-5 mb-5">
        <div className="container">
          <div className="label-badge mb-3">
             <FaCodeBranch className="me-2" /> MY CREATIONS
          </div>
          <h1 className='display-3 fw-bold mb-3'>
            Featured <span className='text-indigo'>Projects</span>
          </h1>
          <p className="lead mx-auto project-subtitle">
            Exploring the intersection of code, design, and user experience through 
            practical engineering and creative problem-solving.
          </p>
          <div className="header-accent-line mx-auto"></div>
        </div>
      </section>

      {/* Project Grid */}
      <div className="projects-container pb-5">
        {projectsToDisplay.map((i, index) => (
          <Structure
            key={index}
            title={i.title}
            description={i.description}
            description2={i.description2}
            button={i.button}
            youtube={i.youtube}
            github={i.github}
          />
        ))}

        {previewMode && (
          <div className="text-center mt-5">
            <NavLink to="/project" className="hero-primary-btn">
              View All Projects <span className="btn-arrow">→</span>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Project;
