import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaRocket, FaImages, FaBook, FaUserAlt, FaPaperPlane } from 'react-icons/fa';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY && window.scrollY > 80) { 
            setIsVisible(false); 
        } else { 
            setIsVisible(true);  
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap');

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

                .brand-text {
                    font-weight: 800;
                    font-size: 1.3rem;
                    color: #1e293b;
                    text-decoration: none;
                }

                .brand-text span { color: #4f46e5; }

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
                    .nav-link-item { padding: 12px; }
                    .nav-links-wrapper { gap: 8px; }
                    .navbar-smart { padding: 10px 0; }
                    body { padding-top: 75px; }
                }

                @media (max-width: 480px) {
                    .brand-text { display: none; }
                    .nav-container-inner { justify-content: center; }
                    .nav-link-item svg { font-size: 1.3rem; }
                }
            `}</style>

            <nav className={`navbar-smart ${isVisible ? '' : 'hidden'}`}>
                <div className="nav-container-inner">
                    <NavLink to="/" className="brand-text">
                        Mjvirus<span>official</span>
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