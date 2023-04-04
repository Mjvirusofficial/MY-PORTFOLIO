import React from 'react'
import './Structure.css'
function Structure(mj) {
  return (
    <div>
        <div className="container-fluid mt-5">
        <div className="row">
          <div className="col">
            <iframe className='video col-12 col-lg-12 '  src={mj.youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="col-12 col-lg-8 ">
            <h3 className='title'><b>{mj.title}</b></h3>
            <h4 className='description'>{mj.description}</h4>
            <h4 className='description'>{mj.description2}</h4>
            <button className='homebtn'><a href={mj.button}>Visit this site</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Structure