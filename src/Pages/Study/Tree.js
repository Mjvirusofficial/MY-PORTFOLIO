import React from 'react';
import fbt from './Img/fbt.png';
import pbt from './Img/pbt.jpg';
import cbt from './Img/cbt.jpg';
import dbt from './Img/dbt.png';
import sbt from './Img/skewedbt.png';
import StudyPageLayout from '../../Component/StudyLayout/StudyPageLayout';
import { FaTree, FaProjectDiagram, FaLevelUpAlt, FaExchangeAlt } from 'react-icons/fa';

function Tree() {
    return (
        <StudyPageLayout 
            title="Tree Data Structure" 
            badge="NON-LINEAR HIERARCHY" 
            icon={<FaTree className="me-2" />}
        >
            {/* Intro Section */}
            <div className="glass-info-card p-5 mb-5 shadow-sm">
                <h2 className="fw-bold mb-3">Hierarchical Organization</h2>
                <p className="lead">
                    A Tree is a non-linear data structure that organizes data in a <strong>hierarchical structure</strong>. 
                    It is defined recursively as a collection of nodes connected by edges.
                </p>
                <div className="alert alert-indigo mt-3 border-0">
                    <strong>Key Property:</strong> For a tree with N nodes, there are exactly <strong>N-1 edges</strong>.
                </div>
            </div>

            {/* Binary Tree Section */}
            <section className="mb-5">
                <h2 className="section-title mb-4">Binary Tree Types</h2>
                <div className="row g-4">
                    {[
                        { title: 'Full Binary Tree', img: fbt, desc: 'Every node has either 0 or 2 children.' },
                        { title: 'Perfect Binary Tree', img: pbt, desc: 'All internal nodes have 2 children and all leaves are at the same level.' },
                        { title: 'Complete Binary Tree', img: cbt, desc: 'All levels are filled except possibly the last, which is filled from the left.' },
                        { title: 'Degenerate Tree', img: dbt, desc: 'Every parent node has exactly one child.' },
                        { title: 'Skewed Tree', img: sbt, desc: 'All nodes have only one child except the leaf. Can be Left or Right skewed.' }
                    ].map((item, idx) => (
                        <div className="col-lg-6" key={idx}>
                            <div className="concept-card p-4 h-100 shadow-sm overflow-hidden">
                                <div className="row align-items-center">
                                    <div className="col-sm-7">
                                        <h4 className="fw-bold text-indigo">{item.title}</h4>
                                        <p className="small text-muted">{item.desc}</p>
                                    </div>
                                    <div className="col-sm-5 text-center">
                                        <img src={item.img} className="img-fluid rounded-3 border" style={{ maxHeight: '120px' }} alt={item.title} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Traversing Section */}
            <section className="p-5 bg-dark text-white rounded-5 shadow-lg mb-5">
                <h2 className="fw-bold mb-4 d-flex align-items-center">
                    <FaExchangeAlt className="text-indigo-light me-3" /> Tree Traversal Techniques
                </h2>
                <div className="row g-4">
                    <div className="col-md-3">
                        <div className="p-3 border border-secondary rounded-4 h-100">
                            <h5 className="text-indigo-light fw-bold">Pre-Order</h5>
                            <p className="small opacity-75">Root ➡️ Left ➡️ Right</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-3 border border-secondary rounded-4 h-100">
                            <h5 className="text-success fw-bold">In-Order</h5>
                            <p className="small opacity-75">Left ➡️ Node ➡️ Right</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-3 border border-secondary rounded-4 h-100">
                            <h5 className="text-warning fw-bold">Post-Order</h5>
                            <p className="small opacity-75">Left ➡️ Right ➡️ Root</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-3 border border-secondary rounded-4 h-100">
                            <h5 className="text-info fw-bold">Level-Order</h5>
                            <p className="small opacity-75">BFS (Level by Level)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Level Math Card */}
            <div className="concept-card p-5 border-indigo border-start border-5 shadow-sm">
                <h3 className="fw-bold mb-3"><FaLevelUpAlt className="text-indigo me-2" /> Mathematical Properties</h3>
                <p className="lead">Number of nodes at level <strong>L</strong> in a binary tree: <strong>2<sup>L</sup></strong></p>
                <div className="bg-light p-3 rounded-3 mt-3 font-monospace small">
                    Level 0: 2^0 = 1 Node<br/>
                    Level 1: 2^1 = 2 Nodes<br/>
                    Level 2: 2^2 = 4 Nodes<br/>
                    Level 3: 2^3 = 8 Nodes
                </div>
            </div>
        </StudyPageLayout>
    );
}

export default Tree;