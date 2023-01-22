import React from 'react';
import fimg from '../image/img1.gif'
// import img2 from '../image/img2.jpg'
import { TypeAnimation } from 'react-type-animation';

import { NavLink } from 'react-router-dom'
import About from './About';
function Home() {
  return (
    <div>
      <div className="container mt-3">
        <div className="row ">
          <div className="col-md-6 mt-lg-5  ">
            <h1 className='mt-lg-5 dpk' >Hello i am <strong className='virus'>Deepak Ravidas</strong></h1>
            <div className="style">
              <div className="am">And i'm </div>
              <div className="AnimatedInHome">
                <TypeAnimation
                  sequence={[
                    'Developer',
                    2000,
                    'YouTuber',
                    1000,
                    'Gamer',
                    2000,
                    'Lover😅', // Types 'Three' without deleting 'Two'
                    () => {
                      console.log('Done typing!'); // Place optional callbacks anywhere in the array
                    }
                  ]}
                  wrapper="div"
                  // cursor={true}
                  repeat={Infinity}
                  // style={{ fontSize: '2em' }}
                />
              </div>
            </div>

            <h2 className='mt-5 status'>Machority when you realised winner winner chicken dinner is not a real success.</h2>
            {/* <img src={img2} className="image img-fluid" alt="" /> */}
            <div className='mt-3'>
              <NavLink to='/about' className='homebtn sm-text-center'>More About me</NavLink>
            </div>
          </div>

          <div className="col">
            <img src={fimg} className="image img-fluid" alt='img' />
          </div>
        </div>
      </div>
      <About />
    </div>
  )
}

export default Home