import React from 'react'

const Contact = () => {
  return (
    <div className='container my-2'>
      <div className="row">
    
   
        <div className="col-md-8  mx-auto px-3 py-5 bg-light rounded">
        <h1 className="text-center mb-3">Contact Us</h1>
        <p className="text-center">To get in touch with us, simply use the contact form on this page to send us a message. We will do our best to respond to your inquiry as quickly as possible.
</p>
        <form method="post" action="https://formspree.io/f/mayzyzov">
    <div className="mb-3">
    <label htmlFor="name" className="form-label fw-bold">Name</label>
    <input type="text" className="form-control shadow-none" autoComplete="off" required name="name"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label fw-bold">Email address</label>
    <input type="email" className="form-control shadow-none" autoComplete="off" required  name="email"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="message" className="form-label fw-bold">Leave your comments</label>
    <textarea className="form-control shadow-none" rows={5} name="message"></textarea>
  </div>
 
  <button type="submit" className="btn btn-dark">Submit</button>
</form>
        </div>
      </div>
    </div>
  )
}

export default Contact
