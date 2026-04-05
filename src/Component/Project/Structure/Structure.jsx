import React from 'react'
import './Structure.css'
function Structure(mj) {
  return (
    <div className="project-card">
      <div className="container-fluid mt-4">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <iframe className='project-video w-100' src={mj.youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="col-12 col-lg-6 px-lg-4">
            <h3 className='project-title'><b>{mj.title}</b></h3>
            <h4 className='project-description'>{mj.description}</h4>
            <h4 className='project-description'>{mj.description2}</h4>
            <div className="d-flex gap-3 mt-4">
              <button className='homebtn'><a href={mj.button} target="_blank" rel="noreferrer">Visit this site</a></button>
              {mj.github && <button className='homebtn'><a href={mj.github} target="_blank" rel="noreferrer">Check Code <i className="fa-brands fa-github ms-2"></i></a></button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Structure