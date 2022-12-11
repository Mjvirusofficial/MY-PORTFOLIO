import React from 'react';
import '../Component/Card.css';
import { NavLink } from 'react-router-dom';

function Card(mj) {
  return (
    <>
        <div className="col-12 col-md-6 col-lg-4 ">

        <div class="card ">
  <img src={mj.img} class="card-img-top cardimg" alt="..."/>
  <div class="card-body">
    <h4 class="card-title"><b>{mj.title}</b></h4>
    <p class="card-text">{mj.desc}</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    <NavLink className="nav-link active " aria-current="page" to={mj.visit}><h2 className='learn'>Learn more</h2></NavLink>

  </div>
</div>
</div>
    </>
  )
}

export default Card