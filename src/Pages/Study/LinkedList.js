import React from 'react';
import StudyPageLayout from '../../Component/StudyLayout/StudyPageLayout';
import { FaLink, FaProjectDiagram } from 'react-icons/fa';

function LinkedList() {
  return (
    <StudyPageLayout 
        title="Linked List" 
        badge="LINEAR DATA STRUCTURE" 
        icon={<FaLink className="me-2" />}
    >
        <div className="row g-5 align-items-center mb-5">
            <div className="col-lg-7">
                <div className="glass-info-card p-5">
                    <h2 className="fw-bold mb-3">What is a Linked List?</h2>
                    <p className="lead">
                        A Linked List is a linear data structure composed of a series of <strong>Connected Nodes</strong>.
                    </p>
                    <p className="text-muted">
                        Unlike arrays, elements are not stored in contiguous memory locations. Instead, each node 
                        points to the next, forming a chain-like structure.
                    </p>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="concept-card p-4 h-100 d-flex flex-column justify-content-center border-indigo border-start border-4">
                    <FaProjectDiagram className="display-4 text-indigo mb-3" />
                    <h4 className="fw-bold">Node Structure</h4>
                    <p className="text-muted mb-0">Every node is divided into two parts: <strong>Data</strong> and the <strong>Address</strong> of the next node.</p>
                </div>
            </div>
        </div>

        <div className="row g-4 mb-5">
            <div className="col-md-4">
                <div className="concept-card p-4 text-center">
                    <h5 className="fw-bold text-indigo">Singly Linked List</h5>
                    <p className="small text-muted">Each node points to the next node in one direction.</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="concept-card p-4 text-center">
                    <h5 className="fw-bold text-indigo">Doubly Linked List</h5>
                    <p className="small text-muted">Nodes have pointers to both the next and the previous nodes.</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="concept-card p-4 text-center">
                    <h5 className="fw-bold text-indigo">Circular Linked List</h5>
                    <p className="small text-muted">The last node points back to the first node.</p>
                </div>
            </div>
        </div>
    </StudyPageLayout>
  );
}

export default LinkedList;