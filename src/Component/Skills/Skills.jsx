import React from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaCloud } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiGithubactions } from 'react-icons/si';

const Skills = () => {
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
        <div className="skills-round-section mt-5 pt-5 border-top container pb-5 mb-5">
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
    );
};

export default Skills;
