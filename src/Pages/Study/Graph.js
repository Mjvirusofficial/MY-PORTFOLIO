import React from 'react';
import StudyPageLayout from '../../Component/StudyLayout/StudyPageLayout';
import { FaShareAlt, FaNetworkWired } from 'react-icons/fa';

function Graph() {
  return (
    <StudyPageLayout 
        title="Graph Theory" 
        badge="DISCRETE MATHEMATICS" 
        icon={<FaShareAlt className="me-2" />}
    >
        <div className="row g-5 align-items-center mb-5">
            <div className="col-lg-6">
                <div className="glass-info-card p-5 border-start border-indigo border-5">
                    <h2 className="fw-bold mb-3">What is Graph Theory?</h2>
                    <p className="lead">
                        Graph theory is the study of <strong>Graphs</strong>, which are mathematical structures 
                        used to model pairwise relations between objects.
                    </p>
                    <p className="text-muted">
                        In computer science, graphs are fundamental for modeling networks, 
                        social connections, and complex data relationships.
                    </p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="row g-3">
                    <div className="col-12">
                        <div className="concept-card p-4 d-flex align-items-center shadow-sm">
                            <div className="concept-icon me-3"><FaNetworkWired /></div>
                            <div>
                                <h5 className="fw-bold mb-1">Vertices (Nodes)</h5>
                                <p className="small text-muted mb-0">The fundamental objects or points in a graph.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="concept-card p-4 d-flex align-items-center shadow-sm">
                            <div className="concept-icon me-3 bg-success"><FaNetworkWired /></div>
                            <div>
                                <h5 className="fw-bold mb-1">Edges (Links)</h5>
                                <p className="small text-muted mb-0">The lines or connections between vertices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="p-5 bg-dark text-white rounded-5 shadow-lg">
            <h3 className="fw-bold mb-4">The Mathematical Model</h3>
            <p className="lead opacity-75">
                A Graph is typically denoted as <strong>G = (V, E)</strong>, where:
            </p>
            <ul className="list-unstyled mt-3">
                <li className="mb-2">🔹 <strong>V</strong> is a set of vertices.</li>
                <li className="mb-2">🔹 <strong>E</strong> is a set of edges connecting those vertices.</li>
            </ul>
        </div>
    </StudyPageLayout>
  );
}

export default Graph;