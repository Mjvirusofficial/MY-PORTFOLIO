import React from 'react'
import Card from '../../../Component/Card'
import FourthSemData from './FourthSemData'

function FourthSem() {
  return (
    <div>
        <div className="container">
        <div className="heading mt-2">
          <h1 className=''>B.tech 2nd year 4th sem❤️</h1>
        </div>
      </div>

      <div className="container ">
        <div className="row gy-3">
            {
              FourthSemData.map(i => {
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

export default FourthSem