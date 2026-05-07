import React from 'react';
import StudyPageLayout from '../../Component/StudyLayout/StudyPageLayout';
import { FaJs, FaCode, FaRocket, FaBolt } from 'react-icons/fa';

function Javascript() {
    return (
        <StudyPageLayout 
            title="JavaScript" 
            badge="WEB PROGRAMMING" 
            icon={<FaJs className="me-2" style={{ color: '#F7DF1E' }} />}
        >
            <div className="glass-info-card p-5 mb-5 shadow-sm text-center">
                <FaJs className="display-1 mb-4" style={{ color: '#F7DF1E' }} />
                <h2 className="fw-bold mb-3">The Language of the Web</h2>
                <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
                    JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript specification. 
                    It is the core technology of the World Wide Web alongside HTML and CSS.
                </p>
            </div>

            <div className="row g-4 mb-5">
                {[
                    { title: 'Dynamic Typing', icon: <FaBolt />, desc: 'Variables in JavaScript are not directly associated with any particular value type.' },
                    { title: 'First-class Functions', icon: <FaCode />, desc: 'Functions are treated like any other variable. They can be passed as arguments.' },
                    { title: 'Asynchronous', icon: <FaRocket />, desc: 'Features like Promises and Async/Await allow for non-blocking operations.' }
                ].map((item, idx) => (
                    <div className="col-md-4" key={idx}>
                        <div className="concept-card p-4 h-100 text-center border-bottom border-indigo border-4">
                            <div className="concept-icon mx-auto mb-3">{item.icon}</div>
                            <h4 className="fw-bold">{item.title}</h4>
                            <p className="small text-muted">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <section className="p-5 bg-dark text-white rounded-5 shadow-lg">
                <h3 className="fw-bold mb-4">Core Concepts to Master</h3>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="list-unstyled opacity-75">
                            <li className="mb-3">🔹 Closures & Scope</li>
                            <li className="mb-3">🔹 Prototypal Inheritance</li>
                            <li className="mb-3">🔹 DOM Manipulation</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-unstyled opacity-75">
                            <li className="mb-3">🔹 Event Loop & Concurrency</li>
                            <li className="mb-3">🔹 ES6+ Features</li>
                            <li className="mb-3">🔹 Modules (Import/Export)</li>
                        </ul>
                    </div>
                </div>
            </section>
        </StudyPageLayout>
    );
}

export default Javascript;