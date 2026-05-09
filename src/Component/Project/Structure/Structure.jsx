import React from 'react';
import './Structure.css';
import { FaGithub, FaExternalLinkAlt, FaPlayCircle } from 'react-icons/fa';

const Structure = (mj) => {
    return (
        <div className="premium-project-card container my-5">
            <div className="project-inner-wrapper row align-items-center g-0">
                {/* Media Section: Video or Placeholder */}
                <div className="col-lg-6 project-media-container">
                    {mj.youtube && mj.youtube !== 'coming_soon' ? (
                        <div className={`video-responsive-wrapper shadow-lg ${mj.youtube.includes('instagram.com') ? 'insta-reel-wrapper' : ''}`}>
                            <iframe 
                                className='project-iframe' 
                                src={mj.youtube} 
                                title={mj.title} 
                                frameBorder="0" 
                                scrolling={mj.youtube.includes('instagram.com') ? "no" : "auto"}
                                allowtransparency={mj.youtube.includes('instagram.com') ? "true" : "false"}
                                allow={mj.youtube.includes('instagram.com') ? "encrypted-media" : "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}
                                allowFullScreen
                            ></iframe>
                        </div>
                    ) : (
                        <div className="project-placeholder d-flex flex-column align-items-center justify-content-center">
                            <FaPlayCircle className="placeholder-icon mb-3" />
                            <h4>Demo Coming Soon</h4>
                        </div>
                    )}
                </div>

                {/* Content Section */}
                <div className="col-lg-6 project-content-side p-5">
                    <div className="project-badge mb-3">FEATURED PROJECT</div>
                    <h2 className='premium-project-title mb-3'>{mj.title}</h2>
                    <div className="project-description-box mb-4">
                        <p className='desc-text-p'>{mj.description}</p>
                        <p className='desc-text-p secondary-p'>{mj.description2}</p>
                    </div>

                    <div className="project-action-row d-flex gap-3">
                        <a href={mj.button} target="_blank" rel="noreferrer" className="proj-btn primary-proj">
                            Live Demo <FaExternalLinkAlt className="ms-2" />
                        </a>
                        {mj.github && (
                            <a href={mj.github} target="_blank" rel="noreferrer" className="proj-btn secondary-proj">
                                <FaGithub className="me-2" /> Source Code
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Structure;