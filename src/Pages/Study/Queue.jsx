import React from 'react'
import queue from './Img/queue.jpeg'
function Queue() {
    return (
        <div>
            <div className="container">
                <h1 className='heading'><u>Queue Data Structure</u></h1>
            </div>


            <div className="container-fluid">
                <div className="row">
                    <div className="col col-lg-4">
                        <div className="">
                            <img src={queue} class="card-img-top cardimg" alt="..." />
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 heading">
                        <h2>Queue is a linear Data structure, which works on principle "FIFO" means First In First Out, This is an special type of data structure </h2>
                    </div>
                </div>
            </div>
            <hr className='hrline' />

            <div className="col-12 col-lg-8 heading">
                <h2><u>Implementation of a Queue.</u></h2>
                
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="detail">
                            <p>
                                
                            </p>
                    </div>
                </div>
            </div>

            <hr className='hrline' />
            <div className="container-fluid">
                <div className="row">
                    <div className="detail">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Queue