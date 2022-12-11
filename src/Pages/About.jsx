import React from 'react'
import './About.css'
import mypic from '../image/img2.jpg'

function About() {
  return (
    <div>
      <h1 className='text-center mt-4 about'>About<span className='me'> me</span></h1>
      <hr className='line mx-auto' />
      <div className="container mt-0">
        <div className="row">
          <div className="col-12 col-lg-3 mypic">
            <img src={mypic} className="image img-fluid second-pic" alt="img" />
          </div>
          <div className="col-12 col-lg-9">
            <div className=''>
              <div className='fixed-text my-name'>This is Deepak Ravidas👨‍💻</div>
              <div className="desc">
              <h2>Basically i'm from Bokaro but now living in Koderma ya phir kahu yaha se waha @aaty jaaty rehta hu🙂</h2>
          <h2>I'm Computer Science's student i have completed my diploma this year, All thanxx to Covid😂</h2>
          <h2>3 years mai kewal one time hi exam dena pda, 3 years 6th sem means 6 exam but first exam mainy diya in last sem</h2>
          <h2>Lockdown mai padhty padhty Microprocessor k topic se hatt k dusre hi topic pay ghus gya tha mai <button className='b' ><a className='loveTopic' href="https://www.youtube.com/watch?v=y1K-SZ2Lp04&t=31s">Love Topic❤️</a></button></h2>
          <h2>@gar yaha tk padh chuke ho to ye to pta chal gya hoga ki mery English ka tang tutta hua h😅 koi nii improvement kr raha hu😎</h2>
          <h2>And anyway i have to improve otherwise the product base company will not allow me to enter for the interveiw😂😅</h2>
          <h2>You can download my CV <button className='cv'><a href='https://drive.google.com/file/d/1fzycIqoORhXie7B9H2eWkYqAmLWkzapO/view'>Here</a></button> </h2>
          <h2>Jo mainy copy kr k bnaya h Shivani ka👹</h2>



              </div>
              {/* <div className="animated">
                <div className=""><br />
                  <span>Youtuber</span>
                  <span>Developer</span>
                  <span>Gamer</span>
                  <span>Designer</span>
                </div>
              </div> */}
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default About