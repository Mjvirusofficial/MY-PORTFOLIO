import React from 'react';
import './About.css';
import img2 from '../image/img2.jpg';
import { FaWhatsapp, FaEnvelope, FaTerminal, FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaInstagram, FaLinkedin, FaGithub, FaCloud } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiGithubactions } from 'react-icons/si';

import Skills from '../Component/Skills/Skills';

const About = ({ hideSkills = false }) => {

    return (
        <div id="about-me-section" className="about-final-ultra container mt-5 pb-5">
            {/* Header */}
            <div className="text-center mb-5 position-relative">
                <div className="bg-text-ultra">ABOUT ME</div>
                <h1 className='display-4 fw-bold'>About <span className='text-indigo'>Me</span></h1>
                <div className='indigo-dot mx-auto'></div>
            </div>

            <div className="row g-5">
                {/* Left Side: Profile Image */}
                <div className="col-lg-5">
                    <div className="sticky-top" style={{ top: '100px' }}>
                        <div className="image-frame-final shadow-lg">
                            <img src={img2} alt="Deepak Ravidas" className="profile-img-zoom-h" />
                            <div className="role-chip-final">Software Engineer & Creator 👨‍💻🎬</div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Bio, Socials & Connect (Top Aligned) */}
                <div className="col-lg-7">
                    <div className="content-side-ultra h-100 d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-start flex-wrap">
                            <div className="bio-intro">
                                <div className="label-v4">SOFTWARE ENGINEER & DIGITAL CREATOR ✨</div>
                                <h1 className="name-title-v4">Hi, I'm <span className="text-indigo-gradient">Deepak Ravidas</span> 👋</h1>
                                <h4 className="role-sub-v4 mb-4">Full Stack Developer | <span className="text-indigo">Video Editor</span> | DevOps Learner</h4>
                            </div>
                            
                            {/* Social Icons Updated with real links */}
                            <div className="social-pill-right p-2 rounded-5 d-flex gap-3 mb-3">
                                <a href="https://github.com/Mjvirusofficial" className="s-link" target="_blank" rel="noreferrer"><FaGithub /></a>
                                <a href="https://www.linkedin.com/in/deepak-ravidas-65956a388/?skipRedirect=true" className="s-link" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                                <a href="https://www.instagram.com/0ye_its_deepak/?hl=en" className="s-link" target="_blank" rel="noreferrer"><FaInstagram /></a>
                                <a href="https://wa.me/7061335711" className="s-link" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
                            </div>
                        </div>

                        <div className="bio-description-v4 mt-3">
                            <p>I am a <span className="text-indigo fw-bold">Software Engineer</span> and <span className="text-indigo fw-bold">Creative Digital Artist</span> with a dual passion for building robust applications and crafting compelling visual stories. As a <span className="text-indigo fw-bold">Professional Full Stack Developer</span>, I specialize in the <span className="text-indigo fw-bold">MERN Stack</span>, creating <span className="text-indigo fw-bold">high-performance</span> web applications using <strong>React.js, Next.js, and Tailwind CSS</strong>.</p>
                            
                            <p className="mt-3">Beyond code, I am also a skilled <span className="text-indigo fw-bold">Video Editor 🎬</span>, where I combine design aesthetics with storytelling to create engaging content. Currently, I am expanding my technical depth by <span className="text-indigo fw-bold">Learning DevOps ⚙️</span> to master <span className="text-indigo fw-bold">Cloud Infrastructure</span> and <span className="text-indigo fw-bold">Automated Deployments</span>. My mission is to bridge the gap between <span className="text-indigo fw-bold">UI Designing</span>, <span className="text-indigo fw-bold">Scalable Backend Architecture</span>, and <span className="text-indigo fw-bold">Visual Storytelling</span>.</p>
                            
                            <div className="status-highlight-v4 mt-4 mb-4">
                                🚀 <span className="fw-bold">Software Engineer | Full Stack Developer | DevOps Learner | Video Editor | Open to Work 💼</span>
                            </div>
                        </div>

                        <div className="connect-card-v4 p-4 rounded-5 border mt-auto shadow-sm">
                            <h5 className="fw-bold mb-3"><FaTerminal className="text-indigo me-2" /> Let's Build Something Amazing! 📩</h5>
                            <div className="d-grid gap-3 d-md-flex">
                                <a href="https://wa.me/7061335711" className="btn-v4-fill flex-grow-1">
                                    <FaWhatsapp className="me-2" /> WhatsApp 💬
                                </a>
                                <a href="mailto:deepak.ravidas7061@gmail.com" className="btn-v4-outline flex-grow-1 text-center">
                                    <FaEnvelope className="me-2" /> Email Me 📧
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Educational Qualifications Section */}
            <div className="education-clean-section mt-5 pt-5">
                <div className="text-center mb-5 position-relative">
                    <h3 className="fw-bold display-6">Educational <span className="text-indigo">Journey</span> 🎓</h3>
                    <div className='indigo-dot mx-auto mt-3'></div>
                </div>

                <div className="timeline-journey-container mx-auto" style={{ maxWidth: '900px' }}>
                    {/* The Animated Bar */}
                    <div className="timeline-vertical-bar">
                        <div className="bar-fill-animation"></div>
                    </div>

                    {/* Diploma - Top Item */}
                    <div className="timeline-item mb-5">
                        <div className="timeline-dot-v6 pulse-indigo">
                            <span className="dot-icon">🎓</span>
                        </div>
                        <div className="premium-edu-box glass-card-v5 p-4 p-md-5 rounded-5 position-relative">

                            <div className="row align-items-center g-4">
                                <div className="col-md-8">
                                    <div className="d-flex align-items-center mb-3">
                                        <div>
                                            <h4 className="fw-bold text-dark mb-0">Diploma in Engineering</h4>
                                            <span className="text-indigo fw-semibold small">Computer Science Engineering</span>
                                        </div>
                                    </div>
                                    <div className="institute-details p-3 rounded-4 bg-light-indigo mb-3">
                                        <p className="mb-0 fw-bold text-dark">Government Polytechnic, Koderma</p>
                                        <p className="mb-0 text-secondary small">(खनन संस्थान कोडरमा) – Board: JUT, Ranchi</p>
                                    </div>
                                </div>
                                <div className="col-md-4 text-md-end">
                                    <div className="score-badge p-3 rounded-4 bg-white shadow-sm border border-indigo-subtle">
                                        <span className="d-block text-secondary small fw-bold">RESULT</span>
                                        <span className="text-indigo display-6 fw-bold">80%</span>
                                        <span className="d-block text-indigo small fw-bold mt-1">✓ Completed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* B.Tech - Bottom Item */}
                    <div className="timeline-item">
                        <div className="timeline-dot-v6 pulse-indigo delay-dot">
                            <span className="dot-icon">💻</span>
                        </div>
                        <div className="premium-edu-box glass-card-v5 p-4 p-md-5 rounded-5 position-relative">

                            <div className="row align-items-center g-4">
                                <div className="col-md-8">
                                    <div className="d-flex align-items-center mb-3">
                                        <div>
                                            <h4 className="fw-bold text-dark mb-0">Bachelor of Technology (B.Tech)</h4>
                                            <span className="text-indigo fw-semibold small">Computer Science Engineering</span>
                                        </div>
                                    </div>
                                    <div className="institute-details p-3 rounded-4 bg-light-indigo mb-3">
                                        <p className="mb-0 fw-bold text-dark">Swami Vivekanand College of Science and Technology</p>
                                        <p className="mb-0 text-secondary small">Bhopal (M.P.) – Board: RGPV, Bhopal</p>
                                    </div>
                                </div>
                                <div className="col-md-4 text-md-end">
                                    <div className="score-badge p-3 rounded-4 bg-white shadow-sm border border-indigo-subtle">
                                        <span className="d-block text-secondary small fw-bold">RESULT</span>
                                        <span className="text-indigo display-6 fw-bold">7.8</span>
                                        <span className="small text-indigo fw-bold ms-1">CGPA</span>
                                        <span className="d-block text-indigo small fw-bold mt-1">✓ Completed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technical Expertise component */}
            {hideSkills ? null : <Skills />}
        </div>
    );
};

export default About;