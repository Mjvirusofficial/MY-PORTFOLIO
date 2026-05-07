import React from 'react';
import fimg from '../image/img1.gif'
import { TypeAnimation } from 'react-type-animation';
import About from './About';
import Gallery from '../Component/Gallery/Gallery';

function Home() {
    return (
    <div className="home-root">
      <div className="container hero-container">
        <div className="row align-items-center min-vh-80">
          <div className="col-md-6 hero-text-col">
            <h1 className='hero-title'>Hello I am <span className='name-highlight'>Deepak Ravidas</span></h1>
            
            <div className="hero-animation-wrapper">
              <span className="static-text">And I'm </span>
              <div className="type-animation-box">
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer', 2000,
                    'MERN Stack Developer', 2000,
                    'Software Engineer', 2000,
                    'Video Editor', 2000,
                  ]}
                  wrapper="span"
                  repeat={Infinity}
                />
              </div>
            </div>

            <div className="status-quote-box mt-4">
              <p className='status-text'>"Maturity when you realised winner winner chicken dinner is not a real success."</p>
              <div className="quote-accent"></div>
            </div>

            <div className='mt-5'>
              <a href="#about-me-section" className='hero-primary-btn'>
                More About me <span className="btn-arrow">→</span>
              </a>
            </div>
          </div>

          <div className="col-md-6 hero-img-col text-center">
            <div className="hero-img-wrapper">
              <img src={fimg} className="hero-gif img-fluid" alt='Deepak Ravidas' />
            </div>
          </div>
        </div>
      </div>
      <About />
      <Gallery />
    </div>
  )
}

export default Home;