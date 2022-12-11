import React from 'react'

function Contact() {
  return (
    <>

      <div className="mx-5">
        <h1 className='text-center'>Contact Us</h1>
      </div>

      <div className="container ">
      <form action="https://formspree.io/f/mnqryjzv" method='POST' >
        <div className="row">
          <div className="col col-md-6 col-10 mx-auto">
            <div class="mt-4 mb-3">
              <label for="exampleFormControlInput1" className="form-label">Full name</label>
              <input type="text" name='username' className="div form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Phone no</label>
              <input type="number" name='phone' className="div form-control" id="exampleFormControlInput1" placeholder="Mobile number" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" name='Email' className="div form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Message</label>
              <textarea name='message' class="div form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="button_div">
              <button className="cv" type="submit">Submit</button>
            </div>
          </div>
        </div>
        </form>
      </div>

    </>
  )
}

export default Contact