import React from 'react'
import './Project.css'
import ProjectData from '../Component/Project/ProjectData';
import Structure from '../Component/Project/Structure/Structure';
function Project() {
  return (
    <div>
      <div className="container">
        <div className="heading ">
          <h1 className=''>Here, you can see my <i class="fa-brands fa-react"></i> projects</h1>
        </div>
      </div>

{/* latest code */}

 {
      ProjectData.map(i =>{
        return <Structure
          title = {i.title}
          description = {i.description}
          description2 = {i.description2}
          button = {i.button}
          youtube = {i.youtube}
        />
      })
    }





















 {/* Old code */}

{/* 
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <iframe className='video col-12 col-lg-12 '  src="https://www.youtube.com/embed/QrxByCSO7WQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="col-12 col-lg-8 ">
            <h3 className='title'><b>1.Top 6 South lovestories movies❤️</b></h3>
            <h4 className='description'>This is my first project using React, also i have use Bootstrap 5 @wesome feeling when i was coding🧑‍💻</h4>
            <h4 className='description'>This site less responsive for desktop site but looks @wesome in mobile site.</h4>
            <button className='homebtn'><a href='https://mj-lovestory-movie.netlify.app/
'>Visit this site</a></button>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col">
<iframe className='video col-12 col-lg-12 ' src="https://www.youtube.com/embed/dPp6fzwEccU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>          </div>
          <div className="col-12 col-lg-8 ">
            <h3 className='title'><b>2.E-commerce site</b></h3>
            <h4 className='description'>This is an e-commerce site i have created this site to know how things work in e-commerces site.</h4>
            <h4 className='description'>This site is fully responsive but not completed at this time😅 but you can see my progress.</h4>
            <button className='homebtn'><a href='https://github.com/Mjvirusofficial/E-commerce-site
'>See the code</a></button>
          </div>
        </div>
      </div> */}



    </div>
  )
}

export default Project;



