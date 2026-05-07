import React, { useState, useEffect } from 'react';
import './Preloader.css';
import { TypeAnimation } from 'react-type-animation';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Minimum loading time for the premium feel
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2800);

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="preloader-ultra">
            <div className="loader-glass-panel">
                <div className="premium-avatar-wrapper">
                    {/* Concentric Animated Rings */}
                    <div className="ring-layer layer-1"></div>
                    <div className="ring-layer layer-2"></div>
                    <div className="ring-layer layer-3"></div>
                    
                    <div className="avatar-frame">
                        <img 
                            src="/MyAlbums/portfolioGalary/1744570911550.jpg" 
                            alt="MJ VIRUS" 
                            className="avatar-img-glow"
                        />
                    </div>
                </div>

                <div className="loader-branding mt-4">
                    <h1 className="brand-name-loader">MJ<span>VIRUS</span></h1>
                    <div className="dynamic-loader-text">
                        <TypeAnimation
                            sequence={[
                                'Building Innovation...', 1000,
                                'Crafting Experiences...', 1000,
                                'Deploying Excellence...', 1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                    <div className="premium-progress-container mt-4">
                        <div className="premium-progress-bar"></div>
                    </div>
                    <p className="static-loading-text mt-3">Loading...</p>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
