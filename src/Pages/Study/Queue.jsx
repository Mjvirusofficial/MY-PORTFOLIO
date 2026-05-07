import React from 'react';
import queue from './Img/queue.jpeg';
import StudyPageLayout from '../../Component/StudyLayout/StudyPageLayout';
import { FaLayerGroup, FaArrowRight } from 'react-icons/fa';

function Queue() {
    return (
        <StudyPageLayout 
            title="Queue Data Structure" 
            badge="DATA STRUCTURES" 
            icon={<FaLayerGroup className="me-2" />}
        >
            <div className="row g-5 align-items-center mb-5">
                <div className="col-lg-5">
                    <div className="image-wrapper shadow-lg rounded-4 overflow-hidden">
                        <img src={queue} className="img-fluid" alt="Queue Illustration" />
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="glass-info-card p-5">
                        <h2 className="fw-bold mb-3">What is a Queue?</h2>
                        <p className="lead">
                            A Queue is a linear data structure that follows the <strong>FIFO (First In First Out)</strong> principle.
                        </p>
                        <p className="text-muted">
                            It's like a line of people waiting for tickets. The person who comes first is the first one to get the ticket and leave the line.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row g-4">
                <div className="col-md-6">
                    <div className="concept-card p-4">
                        <h4 className="fw-bold text-indigo"><FaArrowRight className="me-2" /> Enqueue</h4>
                        <p className="text-muted mb-0">The process of adding an element to the rear (end) of the queue.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="concept-card p-4">
                        <h4 className="fw-bold text-indigo"><FaArrowRight className="me-2" /> Dequeue</h4>
                        <p className="text-muted mb-0">The process of removing an element from the front of the queue.</p>
                    </div>
                </div>
            </div>

            <div className="mt-5 p-5 bg-light rounded-5 border">
                <h3 className="fw-bold mb-4">Implementation Logic</h3>
                <p>Queues can be implemented using Arrays or Linked Lists. They are widely used in CPU scheduling, disk scheduling, and asynchronous data transfer.</p>
            </div>
        </StudyPageLayout>
    );
}

export default Queue;