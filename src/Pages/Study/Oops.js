import React from 'react';
import StudyPageLayout from '../../Component/StudyLayout/StudyPageLayout';
import { FaShapes, FaCube, FaProjectDiagram, FaShieldAlt, FaGhost, FaUsersCog, FaMagic, FaBug } from 'react-icons/fa';

function Oops() {
  return (
    <StudyPageLayout 
        title="Object Oriented Programming" 
        badge="OOP CONCEPTS" 
        icon={<FaShapes className="me-2" />}
    >
        {/* Intro Section */}
        <div className="glass-info-card p-5 mb-5 shadow-sm">
            <h2 className="fw-bold mb-3">The Main Purpose</h2>
            <p className="lead">
                OOPs (Object Oriented Programming System) is a paradigm that deals with <strong>real-world entities</strong> 
                using programming languages. It focuses on objects rather than logic.
            </p>
        </div>

        {/* Pillars of OOPs */}
        <h2 className="section-title mb-4 text-center">The 6 Pillars of OOPs</h2>
        <div className="row g-4 mb-5">
            {[
                { name: 'Class', icon: <FaProjectDiagram />, desc: 'A blueprint or group of objects. It takes no memory.' },
                { name: 'Object', icon: <FaCube />, desc: 'An instance of a class. Memory is allocated here.' },
                { name: 'Inheritance', icon: <FaUsersCog />, desc: 'Accessing properties of another class for reusability.' },
                { name: 'Encapsulation', icon: <FaShieldAlt />, desc: 'Wrapping data and methods into a single unit.' },
                { name: 'Abstraction', icon: <FaGhost />, desc: 'Hiding implementation details, showing only essentials.' },
                { name: 'Polymorphism', icon: <FaMagic />, desc: 'Same object behaving differently in different situations.' }
            ].map((pill, idx) => (
                <div className="col-md-4 col-sm-6" key={idx}>
                    <div className="concept-card p-4 h-100 text-center">
                        <div className="concept-icon mx-auto mb-3">{pill.icon}</div>
                        <h4 className="fw-bold">{pill.name}</h4>
                        <p className="text-muted small">{pill.desc}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Detailed Sections */}
        <section className="mb-5 p-5 bg-light rounded-5 border">
            <h3 className="fw-bold mb-4 text-indigo">Deep Dive into Polymorphism</h3>
            <div className="row align-items-center">
                <div className="col-lg-8">
                    <p>Polymorphism comes from Greek words meaning "many forms".</p>
                    <div className="p-4 bg-white rounded-4 border-start border-indigo border-5 shadow-sm">
                        <strong>Analogy:</strong> A person can be a boss at the office, a brother at home, and a son to his parents. Same person (object), different behavior.
                    </div>
                </div>
                <div className="col-lg-4 d-none d-lg-block">
                    <FaMagic className="display-1 text-indigo opacity-10" />
                </div>
            </div>
        </section>

        {/* Compiler vs Interpreter */}
        <h2 className="section-title mb-4">Compiler vs Interpreter</h2>
        <div className="row g-4 mb-5">
            <div className="col-md-6">
                <div className="p-4 bg-dark text-white rounded-4 h-100 shadow-lg">
                    <h4 className="fw-bold text-indigo-light mb-3">Compiler</h4>
                    <ul className="small opacity-75 list-unstyled">
                        <li className="mb-2">✔️ Scans the entire program first.</li>
                        <li className="mb-2">✔️ Errors shown at once after scanning.</li>
                        <li className="mb-2">✔️ Execution time is less.</li>
                        <li className="mb-2">✔️ Used by C, C++.</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-6">
                <div className="p-4 bg-indigo text-white rounded-4 h-100 shadow-lg" style={{ background: '#4f46e5' }}>
                    <h4 className="fw-bold mb-3">Interpreter</h4>
                    <ul className="small opacity-75 list-unstyled">
                        <li className="mb-2">✔️ Scans line-by-line.</li>
                        <li className="mb-2">✔️ Error occurs after each line.</li>
                        <li className="mb-2">✔️ Execution time is more.</li>
                        <li className="mb-2">✔️ Used by JAVA, PYTHON.</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Platform Independency */}
        <div className="glass-info-card p-5 mb-5 border-start border-success border-5">
            <h3 className="fw-bold mb-3">CORA / WORA 🌍</h3>
            <p className="lead mb-0">
                <strong>CORA:</strong> Compile Once Run Anywhere. <br/>
                <strong>WORA:</strong> Write Once Run Anywhere.
            </p>
            <p className="text-muted mt-2">This means you can compile on one OS and run on any other OS seamlessly.</p>
        </div>

        {/* Multi-threading & Exception Handling */}
        <div className="row g-4 mb-5">
            <div className="col-md-6">
                <div className="concept-card p-4 h-100">
                    <h4 className="fw-bold d-flex align-items-center mb-3">
                        <FaUsersCog className="text-indigo me-2" /> Multithreading
                    </h4>
                    <p className="small text-muted">Process of executing multiple threads simultaneously to save time. Like multiple people cleaning a ground together.</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="concept-card p-4 h-100">
                    <h4 className="fw-bold d-flex align-items-center mb-3">
                        <FaBug className="text-danger me-2" /> Exception Handling
                    </h4>
                    <p className="small text-muted">Using Try, Catch, Throw, Throws, and Finally to handle errors without crashing the program.</p>
                </div>
            </div>
        </div>
    </StudyPageLayout>
  );
}

export default Oops;