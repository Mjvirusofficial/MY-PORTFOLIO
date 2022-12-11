import React from 'react'
import Card from '../Component/Card';
import StudyData from './Study/StudyData';
import './Study.css';

function Study() {
  return (
    <div>
      <div className="container">
        <div className="heading mt-2">
          <h1 className=''>Come Study with me❤️</h1>
        </div>
      </div>

      <div className="container ">
        <div className="row gy-3">
            {
              StudyData.map(i => {
                return <Card
                  img = {i.img}
                  title = {i.tittle}
                  desc = {i.desc}
                  visit = {i.visit}
                />
              })
            }
        </div>
      </div>
    </div>
  )
}

export default Study;