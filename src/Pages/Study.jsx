import React, { useState, useEffect } from 'react';
import Card from '../Component/Card';
import StudyData from './Study/StudyData';
import './Study.css';
import { FaBookOpen, FaLightbulb, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Study() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(StudyData.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const currentItems = StudyData.slice(startIndex, startIndex + itemsPerPage);

  // Reset to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const nextSet = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const prevSet = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="study-page-root pb-5">
      {/* Premium Header */}
      <section className="study-hero-section text-center py-5 mb-5">
        <div className="container">
          <div className="study-badge mb-3">
             <FaBookOpen className="me-2" /> KNOWLEDGE BASE
          </div>
          <h1 className='display-3 fw-bold mb-3'>
            Educational <span className='text-indigo'>Path</span>
          </h1>
          <p className="lead mx-auto study-subtitle">
            A curated collection of my learning journey, academic milestones, 
            and technical certifications that define my expertise.
          </p>
          <div className="study-header-line mx-auto"></div>
        </div>
      </section>

      <div className="container" key={currentPage}>
        <div className="row gy-5">
            {currentItems.map((i, index) => (
              <Card
                key={`${currentPage}-${index}`}
                img={i.img}
                title={i.tittle}
                desc={i.desc}
                visit={i.visit}
                index={index} // Pass index for staggered animation
              />
            ))}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="study-pagination-container mt-5 pt-4">
        <div className="d-flex justify-content-center align-items-center gap-4">
          <button 
            className={`study-nav-btn ${currentPage === 0 ? 'disabled' : ''}`} 
            onClick={prevSet}
            disabled={currentPage === 0}
          >
            <FaArrowLeft />
          </button>
          
          <div className="page-indicator">
            Page <span>{currentPage + 1}</span> of {totalPages}
          </div>

          <button 
            className={`study-nav-btn ${currentPage === totalPages - 1 ? 'disabled' : ''}`} 
            onClick={nextSet}
            disabled={currentPage === totalPages - 1}
          >
            <FaArrowRight />
          </button>
        </div>
        
        {/* Pagination Dots */}
        <div className="study-dots-row d-flex justify-content-center mt-3 gap-2">
           {[...Array(totalPages)].map((_, i) => (
             <span 
              key={i} 
              className={`study-page-dot ${currentPage === i ? 'active' : ''}`}
              onClick={() => setCurrentPage(i)}
             ></span>
           ))}
        </div>
      </div>
      
      {/* Motivation Section */}
      <div className="container mt-5 pt-5">
        <div className="study-quote-card p-5 text-center shadow-sm">
           <FaLightbulb className="quote-icon mb-4" />
           <h2 className="fw-bold">"Learning is a lifelong journey, not a destination."</h2>
           <p className="text-muted mt-3">Continuously evolving and mastering new technologies to build a better future.</p>
        </div>
      </div>
    </div>
  );
}

export default Study;