import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaRocket, FaImages, FaUserAlt, FaPaperPlane } from 'react-icons/fa';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 80) { 
                setIsVisible(false); 
            } else { 
                setIsVisible(true);  
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,600;0,800;0,900;1,900&display=swap');

                body {
                    padding-top: 35px; /* Final adjustment to 50px */
                }

                .navbar-smart {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 9999;
                    background: rgba(255, 255, 255, 0.8);
                    backdrop-filter: blur(25px) saturate(200%);
                    -webkit-backdrop-filter: blur(25px) saturate(200%);
                    border-bottom: 1px solid rgba(79, 70, 229, 0.1);
                    padding: 10px 0; /* Slightly thinner navbar */
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .navbar-smart.hidden {
                    transform: translateY(-100%);
                }

                .nav-container-inner {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 90%;
                    max-width: 1200px;
                }

                .brand-wrapper {
                    text-decoration: none;
                    position: relative;
                    border-radius: 12px;
                    display: inline-flex;
                    margin-left: 10px;
                }

                .brand-content {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    position: relative;
                    z-index: 1;
                    padding: 2px;
                }

                .brand-name {
                    display: flex;
                    align-items: baseline;
                }

                .mj-text {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-weight: 800;
                    font-size: 1.4rem;
                    color: #4f46e5; /* Indigo */
                    letter-spacing: -0.5px;
                }

                .virus-text {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-weight: 800;
                    font-size: 1.4rem;
                    color: #0f172a; /* Black */
                    letter-spacing: -0.5px;
                }

                .official-text {
                    font-weight: 600;
                    font-size: 0.8rem;
                    color: #64748b;
                    margin-left: 4px;
                }

                .nav-logo {
                    width: 38px;
                    height: 38px;
                    border-radius: 8px; /* Curved square */
                    object-fit: cover;
                    border: 2px solid #ffffff; /* Inner white gap */
                    box-shadow: 0 0 0 2px #4f46e5, 0 4px 10px rgba(79, 70, 229, 0.2); /* Outer indigo ring + soft shadow */
                }

                .nav-links-wrapper {
                    display: flex;
                    gap: 10px;
                }

                .nav-link-item {
                    text-decoration: none;
                    color: #64748b;
                    padding: 10px 20px;
                    border-radius: 50px;
                    font-weight: 600;
                    font-size: 0.95rem;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .nav-link-item svg {
                    font-size: 1.1rem;
                    opacity: 0.8;
                }

                .nav-link-item.active {
                    background: #4f46e5;
                    color: white;
                    box-shadow: 0 8px 16px rgba(79, 70, 229, 0.25);
                }

                .nav-link-item.active svg { opacity: 1; }

                .nav-link-item:hover:not(.active) {
                    background: rgba(79, 70, 229, 0.05);
                    color: #4f46e5;
                }

                @media (max-width: 991px) {
                    .nav-link-item span { display: none; }
                    .nav-link-item { padding: 10px; border-radius: 15px; } 
                    .nav-links-wrapper { 
                        gap: 22px; 
                        padding-left: 12px !important; /* Balanced gap */
                        padding-right: 12px !important;
                        justify-content: flex-start;
                    }
                    .navbar-smart { padding: 8px 0; }
                    body { padding-top: 55px; } /* Reduced from 65px */
                }

                @media (max-width: 480px) {
                    .brand-wrapper { margin-left: 5px; }
                    .brand-content { gap: 8px; }
                    .mj-text, .virus-text { font-size: 1.4rem; }
                    .official-text { display: inline; font-size: 0.7rem; margin-left: 2px; }
                    .nav-logo { width: 36px; height: 36px; border: 1.5px solid #ffffff; border-radius: 8px; box-shadow: 0 0 0 1.5px #4f46e5; }
                    .nav-container-inner { justify-content: space-between; width: 98%; }
                    .nav-link-item svg { font-size: 1.1rem; }
                    .nav-links-wrapper { gap: 4px; padding-left: 0 !important; } 
                    .nav-link-item { padding: 6px; }
                }
            `}</style>

            <nav className={`navbar-smart ${isVisible ? '' : 'hidden'}`}>
                <div className="nav-container-inner">
                    <NavLink to="/" className="brand-wrapper">
                        <div className="brand-content">
                            <img src="/MyAlbums/portfolioGalary/1744570911550.jpg" alt="Logo" className="nav-logo" />
                            <div className="brand-name">
                                <span className="mj-text">Mj</span>
                                <span className="virus-text">virus</span>
                                <span className="official-text">official</span>
                            </div>
                        </div>
                    </NavLink>

                    <div className="nav-links-wrapper">
                        <NavLink to="/" className="nav-link-item" exact>
                            <FaHome /> <span>Home</span>
                        </NavLink>
                        <NavLink to="/project" className="nav-link-item">
                            <FaRocket /> <span>Projects</span>
                        </NavLink>
                        <NavLink to="/gallery" className="nav-link-item">
                            <FaImages /> <span>Media</span>
                        </NavLink>
                        {/* <NavLink to="/study" className="nav-link-item">
                            <FaBook /> <span>Study</span>
                        </NavLink> */}
                        <NavLink to="/about" className="nav-link-item">
                            <FaUserAlt /> <span>About</span>
                        </NavLink>
                        <NavLink to="/contact" className="nav-link-item">
                            <FaPaperPlane /> <span>Ping</span>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;