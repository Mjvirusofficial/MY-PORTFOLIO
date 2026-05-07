import React from 'react';
import { NavLink } from 'react-router-dom';
import cd from './Img/cd2.jpg';
import { FaBook, FaCode, FaCoffee, FaInfoCircle, FaSitemap, FaLightbulb } from 'react-icons/fa';

function DSA() {
    return (
        <div className="study-detail-page pb-5">
            {/* Premium Header */}
            <header className="detail-hero-section text-center py-5">
                <div className="container">
                    <div className="detail-badge mb-3">
                        <FaCode className="me-2" /> COMPUTER SCIENCE CORE
                    </div>
                    <h1 className="display-3 fw-bold detail-main-title">
                        Data Structure & <span className="text-indigo">Algorithm</span>
                    </h1>
                    <div className="detail-header-line mx-auto"></div>
                </div>
            </header>

            <div className="container mt-4">
                {/* Intro Card */}
                <div className="glass-info-card p-5 mb-5 shadow-sm">
                    <div className="row align-items-center">
                        <div className="col-lg-1">
                            <FaInfoCircle className="info-large-icon d-none d-lg-block" />
                        </div>
                        <div className="col-lg-11">
                            <p className="lead mb-0">
                                Data Structure and Algorithms (DSA) are the building blocks of efficient software. 
                                Think of <strong>Data Structure</strong> as the "organization" and <strong>Algorithm</strong> as the "logic".
                            </p>
                        </div>
                    </div>
                </div>

                {/* Definition Cards */}
                <div className="row g-4 mb-5">
                    <div className="col-md-6">
                        <div className="concept-card h-100 p-4">
                            <div className="concept-icon"><FaSitemap /></div>
                            <h3 className="fw-bold mt-3">Data Structure</h3>
                            <p className="text-muted">
                                A specialized format for organizing, processing, retrieving, and storing data. 
                                It's a way to arrange data in memory for efficient usage.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="concept-card h-100 p-4">
                            <div className="concept-icon"><FaBook /></div>
                            <h3 className="fw-bold mt-3">Algorithm</h3>
                            <p className="text-muted">
                                A step-by-step procedure or a set of rules to be followed in calculations 
                                or other problem-solving operations.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Real World Example Section */}
                <section className="example-section p-5 mb-5 rounded-5 border shadow-sm">
                    <div className="d-flex align-items-center mb-4">
                        <FaCoffee className="text-indigo me-3 fs-2" />
                        <h2 className="fw-bold mb-0">Real-World Analogy: Making Tea ☕</h2>
                    </div>
                    <div className="example-content">
                        <p>Imagine you want to make tea. There is a specific process (Algorithm) you follow:</p>
                        <ul className="step-list">
                            <li><strong>Step 1:</strong> Take water in a container (The data holder).</li>
                            <li><strong>Step 2:</strong> Boil it on the stove (Processing).</li>
                            <li><strong>Step 3:</strong> Add tea leaves, milk, and sugar (Adding more data).</li>
                            <li><strong>Step 4:</strong> Wait for a few minutes and your tea is ready!</li>
                        </ul>
                        <p className="mt-4 bg-light p-3 rounded-3 border-start border-indigo border-4">
                            In computer language, <strong>Tea Making</strong> is the problem, 
                            and the <strong>Process</strong> is the Algorithm.
                        </p>
                    </div>
                </section>

                {/* Classification Section */}
                <section className="classification-section mb-5">
                    <h2 className="section-title mb-4">Classification of Data Structures</h2>
                    <div className="row align-items-center g-5">
                        <div className="col-lg-5">
                            <div className="image-wrapper shadow-lg rounded-4 overflow-hidden">
                                <img src={cd} className="img-fluid" alt="Classification" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="p-4 bg-white rounded-4 border">
                                <p className="mb-4">
                                    Data structures are broadly classified into two categories:
                                </p>
                                <div className="mb-3">
                                    <h5 className="fw-bold text-indigo">1. Primitive Data Structure</h5>
                                    <p className="text-muted">Basic types like int, float, char, and double that are predefined by the language.</p>
                                </div>
                                <div>
                                    <h5 className="fw-bold text-indigo">2. Non-Primitive Data Structure</h5>
                                    <p className="text-muted">Complex structures like Linked Lists, Stacks, Queues, and Trees that we build using primitive types.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Data & Information Section */}
                <div className="row g-4 mb-5">
                    <div className="col-md-12">
                        <div className="p-5 bg-dark text-white rounded-5 shadow-lg">
                            <h2 className="mb-4 d-flex align-items-center">
                                <FaLightbulb className="text-warning me-3" /> Data vs Information
                            </h2>
                            <div className="row">
                                <div className="col-md-6 border-end border-secondary">
                                    <h4 className="fw-bold text-indigo-light">Data</h4>
                                    <p className="opacity-75">Raw facts, numbers, or symbols. On its own, it might be incomplete (e.g., just the name "Bunty").</p>
                                </div>
                                <div className="col-md-6 ps-md-4">
                                    <h4 className="fw-bold text-success">Information</h4>
                                    <p className="opacity-75">Processed data that is meaningful (e.g., Bunty's full name, address, and city for delivery).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Abstract Data Type Section */}
                <section className="adt-section p-5 mb-5 rounded-5 border-indigo-subtle border">
                    <h2 className="fw-bold mb-4">Abstract Data Type (ADT)</h2>
                    <p className="lead">
                        An ADT is a mathematical model for data types where behavior is defined by a set of values and operations, 
                        but the implementation is hidden.
                    </p>
                    <div className="alert alert-indigo mt-4 border-0 rounded-4">
                        <strong>Key Takeaway:</strong> Abstraction hides non-essential details and only shows the high-level services to the user.
                    </div>
                </section>

                {/* Footer Feedback */}
                <div className="text-center mt-5">
                    <NavLink to="/contact" className="premium-feedback-btn">
                        Found this helpful? Give Feedback!
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default DSA;