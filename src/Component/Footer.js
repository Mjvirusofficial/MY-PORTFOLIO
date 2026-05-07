import React from 'react';
import './Footer.css';
import { 
    FaFacebookSquare, 
    FaTwitter, 
    FaYoutube, 
    FaInstagram, 
    FaLinkedinIn, 
    FaGithub, 
    FaArrowUp
} from 'react-icons/fa';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="minimal-premium-footer">
            <div className="container text-center">
                {/* Back to Top Section */}
                <div className="footer-top-btn-wrapper mb-5">
                    <button onClick={scrollToTop} className="premium-scroll-top">
                        <FaArrowUp />
                        <span className="tooltip-text">Jump to Top</span>
                    </button>
                </div>

                {/* Social Icons Row */}
                <div className="footer-icons-row mb-4">
                    <a href="https://www.facebook.com/profile.php?id=100039237225286" target="_blank" rel="noreferrer" className="social-icon-link">
                        <FaFacebookSquare />
                    </a>
                    <a href="https://twitter.com/MjVirus3" target="_blank" rel="noreferrer" className="social-icon-link">
                        <FaTwitter />
                    </a>
                    <a href="https://www.youtube.com/@mjvirus" target="_blank" rel="noreferrer" className="social-icon-link">
                        <FaYoutube />
                    </a>
                    <a href="https://www.instagram.com/0ye_its_deepak/?hl=en" target="_blank" rel="noreferrer" className="social-icon-link">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/deepak-ravidas-65956a388/" target="_blank" rel="noreferrer" className="social-icon-link">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://github.com/Mjvirusofficial" target="_blank" rel="noreferrer" className="social-icon-link">
                        <FaGithub />
                    </a>
                </div>

                {/* Copyright Line */}
                <div className="footer-copyright-minimal">
                    <p>© {new Date().getFullYear()} Mjvirus<span>official</span>. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;