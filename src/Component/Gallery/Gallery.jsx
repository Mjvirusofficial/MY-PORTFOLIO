import React, { useState, useEffect } from 'react';
import './Gallery.css';
import { FaExpandAlt, FaArrowRight, FaArrowLeft, FaImages } from 'react-icons/fa';

const Gallery = () => {
    // SWAPPING THE SETS: Group 2 (Bike/Mirror) is now FIRST, Group 1 (Sitting) is now SECOND
    const images = [
        // Group 1: Bike and Mirror (NOW SHOWING FIRST AS REQUESTED)
        "1744570911550.jpg", "1744600120100.jpg", "1744820422560.jpg",
        "1744825938546.jpg", "1744826527241.jpg", 
        
        // Group 2: Sitting Smiling (NOW SHOWING ON NEXT CLICK)
        "1743047540185.jpg", "1743365944357.jpg", "1744475883853.jpg",
        "1744564479777.jpg", "1744565026446.jpg", 
        
        // Remaining images
        "1744826741959.jpg", "1744826836319.jpg", "1744826894873.jpg", 
        "1746299343117.jpg", "1750180229803.jpg", "1751640150790.jpg", 
        "image-3.png"
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const [selectedImg, setSelectedImg] = useState(null);
    const itemsPerPage = 5;

    const totalPages = Math.ceil(images.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const currentItems = images.slice(startIndex, startIndex + itemsPerPage);

    useEffect(() => {
        setCurrentPage(0);
    }, []);

    const nextSet = () => {
        if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
        else setCurrentPage(0);
    };

    const prevSet = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
        else setCurrentPage(totalPages - 1);
    };

    return (
        <section className="bento-gallery-section container py-5">
            <div className="bento-header text-center mb-5">
                <div className="label-bento"><FaImages className="me-2" /> PORTFOLIO SHOWCASE</div>
                <h2 className="title-bento">Featured <span className="text-indigo">Gallery</span></h2>
                <div className="bento-line mx-auto"></div>
            </div>

            <div className="bento-grid-container" key={currentPage}>
                {currentItems.map((img, index) => (
                    <div 
                        key={`${currentPage}-${index}`} 
                        className={`bento-item item-${index}`}
                        onClick={() => setSelectedImg(`/MyAlbums/portfolioGalary/${img}`)}
                    >
                        <div className="bento-card shadow">
                            <img 
                                src={`/MyAlbums/portfolioGalary/${img}`} 
                                alt={`Gallery ${index}`} 
                                className="bento-img"
                            />
                            <div className="bento-overlay">
                                <FaExpandAlt className="bento-expand" />
                                <span className="bento-tag">VIEW WORK {startIndex + index + 1}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bento-nav mt-5">
                <button className="bento-nav-btn shadow-sm" onClick={prevSet}><FaArrowLeft className="me-2" /> Previous</button>
                <div className="bento-page-dots">
                    {[...Array(totalPages)].map((_, i) => (
                        <span key={i} className={`bento-dot ${currentPage === i ? 'active' : ''}`}></span>
                    ))}
                </div>
                <button className="bento-nav-btn shadow-sm" onClick={nextSet}>Next <FaArrowRight className="ms-2" /></button>
            </div>

            {selectedImg && (
                <div className="bento-lightbox" onClick={() => setSelectedImg(null)}>
                    <div className="lightbox-content-bento" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImg} alt="Enlarged" className="img-full-b" />
                        <button className="close-bento" onClick={() => setSelectedImg(null)}>&times;</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
