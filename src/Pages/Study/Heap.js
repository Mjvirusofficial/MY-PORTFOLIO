import React from 'react';
import ct from './Img/minH.png';
import incT from './Img/incT.png';
import minh from './Img/minHeap.png';
import maxh from './Img/maxHeap.png';
import StudyPageLayout from '../../Component/StudyLayout/StudyPageLayout';
import { FaDatabase, FaLayerGroup, FaCogs } from 'react-icons/fa';

function Heap() {
  return (
    <StudyPageLayout 
        title="Heap Data Structure" 
        badge="BINARY TREE VARIANT" 
        icon={<FaDatabase className="me-2" />}
    >
        {/* Intro */}
        <div className="glass-info-card p-5 mb-5 shadow-sm">
            <h2 className="fw-bold mb-3">Priority Management</h2>
            <p className="lead">
                A Heap is a <strong>Complete Binary Tree</strong> that satisfies the heap property. 
                Every parent node is either greater than (Max Heap) or less than (Min Heap) its children.
            </p>
        </div>

        {/* Complete Binary Tree Concept */}
        <section className="mb-5">
            <h2 className="section-title mb-4">Foundation: Complete Binary Tree</h2>
            <div className="row g-4 align-items-center">
                <div className="col-lg-6">
                    <div className="concept-card p-4 h-100">
                        <img src={ct} className="img-fluid rounded-3 mb-3 border" alt="Complete" />
                        <h4 className="fw-bold text-success">Complete</h4>
                        <p className="small text-muted">All internal nodes are completely filled. Leaf nodes are added from the left.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="concept-card p-4 h-100">
                        <img src={incT} className="img-fluid rounded-3 mb-3 border" alt="Incomplete" />
                        <h4 className="fw-bold text-danger">Incomplete</h4>
                        <p className="small text-muted">Internal nodes are filled, but leaf nodes are added to the right part first, violating the property.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Types of Heap */}
        <section className="p-5 bg-dark text-white rounded-5 shadow-lg mb-5">
            <h2 className="fw-bold mb-4 d-flex align-items-center">
                <FaLayerGroup className="text-indigo-light me-3" /> Min Heap vs Max Heap
            </h2>
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="p-4 border border-secondary rounded-4">
                        <h4 className="text-indigo-light fw-bold">Min Heap</h4>
                        <p className="small opacity-75">Parent node is <strong>less than</strong> both children. Root is the minimum.</p>
                        <img src={minh} className="img-fluid rounded-3 mt-3 border border-secondary" style={{ maxHeight: '150px' }} alt="Min" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="p-4 border border-secondary rounded-4">
                        <h4 className="text-warning fw-bold">Max Heap</h4>
                        <p className="small opacity-75">Parent node is <strong>greater than</strong> both children. Root is the maximum.</p>
                        <img src={maxh} className="img-fluid rounded-3 mt-3 border border-secondary" style={{ maxHeight: '150px' }} alt="Max" />
                    </div>
                </div>
            </div>
        </section>

        {/* Formula Card */}
        <div className="concept-card p-5 border-indigo border-start border-5 shadow-sm">
            <h3 className="fw-bold mb-4"><FaCogs className="text-indigo me-2" /> Array Representation Formulas</h3>
            <div className="row g-3">
                <div className="col-md-4">
                    <div className="p-3 bg-light rounded-3 text-center h-100">
                        <h5 className="fw-bold text-indigo mb-1">Parent Node</h5>
                        <code className="fs-5">(i - 1) / 2</code>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-3 bg-light rounded-3 text-center h-100">
                        <h5 className="fw-bold text-indigo mb-1">Left Child</h5>
                        <code className="fs-5">(i * 2) + 1</code>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-3 bg-light rounded-3 text-center h-100">
                        <h5 className="fw-bold text-indigo mb-1">Right Child</h5>
                        <code className="fs-5">(i * 2) + 2</code>
                    </div>
                </div>
            </div>
        </div>
    </StudyPageLayout>
  );
}

export default Heap;