import React from 'react';
import { FaBook, FaCode, FaArrowLeft } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const StudyPageLayout = ({ title, badge, icon, children }) => {
    return (
        <div className="study-detail-page pb-5">
            {/* Standard Premium Header for ALL Study Pages */}
            <header className="detail-hero-section text-center py-5">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <NavLink to="/study" className="back-btn-study">
                            <FaArrowLeft className="me-2" /> Back to Study
                        </NavLink>
                        <div className="detail-badge">
                            {icon || <FaCode className="me-2" />} {badge || "COMPUTER SCIENCE"}
                        </div>
                    </div>
                    <h1 className="display-3 fw-bold detail-main-title">
                        {title}
                    </h1>
                    <div className="detail-header-line mx-auto"></div>
                </div>
            </header>

            <div className="container mt-4">
                {children}
            </div>
        </div>
    );
};

export default StudyPageLayout;
