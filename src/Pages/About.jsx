import React from 'react';
import './About.css';
import img2 from '../image/img2.jpg';
import { FaWhatsapp, FaEnvelope, FaCode, FaRocket, FaTerminal, FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaInstagram, FaLinkedin, FaGithub, FaCloud, FaVideo } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiGithubactions } from 'react-icons/si';

const About = () => {
    // Technical expertise data (untouched)
    const skills = [
        { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'React', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'DevOps', icon: <FaCloud />, color: '#4285F4' },
        { name: 'CI/CD', icon: <SiGithubactions />, color: '#2088FF' },
    ];

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

            {/* UNTOUCHED: Technical Expertise (Round Circles) */}
            <div className="skills-round-section mt-5 pt-5 border-top">
                <h3 className="text-center fw-bold display-6 mb-5">Technical <span className="text-indigo">Expertise</span> 🔧</h3>
                <div className="round-skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-circle-wrapper">
                            <div className="skill-circle" style={{ '--skill-color': skill.color }}>
                                <div className="skill-icon-large">{skill.icon}</div>
                                <div className="skill-overlay-name">{skill.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;