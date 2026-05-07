import React from 'react';
import StudyPageLayout from '../../Component/StudyLayout/StudyPageLayout';
import { FaTerminal, FaClock, FaMemory, FaSortAmountUp, FaInfinity, FaMicrochip } from 'react-icons/fa';

function Algoritham() {
    return (
        <StudyPageLayout 
            title="Algorithm Analysis" 
            badge="ENGINEERING LOGIC" 
            icon={<FaTerminal className="me-2" />}
        >
            {/* Intro Section */}
            <div className="glass-info-card p-5 mb-5 shadow-sm">
                <h2 className="fw-bold mb-3">What is an Algorithm?</h2>
                <p className="lead">
                    An algorithm is a <strong>finite sequence</strong> of well-defined, computer-implementable instructions, 
                    typically to solve a class of specific problems or to perform a computation.
                </p>
                <div className="bg-dark text-success p-3 rounded-3 mt-3 font-monospace small">
                    // Example: AddTwoNumbers(a, b)<br/>
                    1. Start<br/>
                    2. Take inputs a and b<br/>
                    3. Calculate c = a + b<br/>
                    4. Output result c<br/>
                    5. End
                </div>
            </div>

            {/* Properties Section */}
            <section className="mb-5">
                <h2 className="section-title mb-4 text-center">Core Properties</h2>
                <div className="row g-4">
                    {[
                        { title: 'Finiteness', icon: <FaClock />, desc: 'Must terminate after a finite number of steps.' },
                        { title: 'Definiteness', icon: <FaTerminal />, desc: 'Each step must be precisely defined.' },
                        { title: 'Input/Output', icon: <FaMemory />, desc: 'Takes zero or more inputs and produces at least one output.' },
                        { title: 'Effectiveness', icon: <FaMicrochip />, desc: 'Steps must be simple enough to be done by hand.' }
                    ].map((prop, idx) => (
                        <div className="col-md-3" key={idx}>
                            <div className="concept-card p-4 h-100 text-center shadow-sm">
                                <div className="concept-icon mx-auto mb-3">{prop.icon}</div>
                                <h5 className="fw-bold">{prop.title}</h5>
                                <p className="small text-muted mb-0">{prop.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Complexity Analysis Section */}
            <section className="p-5 bg-dark text-white rounded-5 shadow-lg mb-5">
                <h2 className="fw-bold mb-4 d-flex align-items-center text-indigo-light">
                    <FaInfinity className="me-3" /> Time & Space Complexity
                </h2>
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="p-4 border border-secondary rounded-4 h-100">
                            <h4 className="text-indigo-light fw-bold">Time Complexity</h4>
                            <p className="small opacity-75">Refers to the amount of time taken by an algorithm to run as a function of the input size.</p>
                            <div className="alert alert-secondary py-2 mt-2 bg-transparent text-white border-secondary">
                                Focus: Finding Loops where CPU spends most time.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="p-4 border border-secondary rounded-4 h-100">
                            <h4 className="text-warning fw-bold">Space Complexity</h4>
                            <p className="small opacity-75">Amount of memory space required by the algorithm during its execution.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Analysis Types */}
            <div className="row g-4 mb-5">
                <div className="col-md-6">
                    <div className="concept-card p-4 h-100 border-start border-indigo border-5 shadow-sm">
                        <h4 className="fw-bold">Aposteriori Analysis</h4>
                        <p className="text-muted small">Language and hardware dependent. Gives exact answer but changes from system to system.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="concept-card p-4 h-100 border-start border-success border-5 shadow-sm">
                        <h4 className="fw-bold">Apriori Analysis</h4>
                        <p className="text-muted small">Independent of language/hardware. Provides approximate (Absolute) answers and is widely used.</p>
                    </div>
                </div>
            </div>

            {/* Asymptotic Notations */}
            <section className="mb-5">
                <h2 className="section-title mb-4">Asymptotic Notations</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="p-4 bg-light rounded-4 text-center border">
                            <h3 className="fw-bold text-danger">O(n)</h3>
                            <h5 className="fw-bold">Big-Oh</h5>
                            <p className="small text-muted">Upper Bound (Worst Case)</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 bg-light rounded-4 text-center border">
                            <h3 className="fw-bold text-success">Ω(n)</h3>
                            <h5 className="fw-bold">Omega</h5>
                            <p className="small text-muted">Lower Bound (Best Case)</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 bg-light rounded-4 text-center border">
                            <h3 className="fw-bold text-primary">Θ(n)</h3>
                            <h5 className="fw-bold">Theta</h5>
                            <p className="small text-muted">Average Case (Tight Bound)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recursion Section */}
            <section className="p-5 bg-light rounded-5 border mb-5">
                <h2 className="fw-bold mb-4 d-flex align-items-center">
                    <FaSortAmountUp className="text-indigo me-3" /> Recursion
                </h2>
                <p className="lead">Solving big problems by breaking them into smaller instances of the same problem.</p>
                <div className="p-4 bg-white rounded-4 border-start border-indigo border-5 shadow-sm mt-4">
                    <strong>Real Example: Factorial(6)</strong>
                    <p className="text-muted mt-2 mb-0">Factorial(6) waits for Factorial(5), which waits for Factorial(4)... until it reaches the base case Factorial(1).</p>
                </div>
            </section>
        </StudyPageLayout>
    );
}

export default Algoritham;