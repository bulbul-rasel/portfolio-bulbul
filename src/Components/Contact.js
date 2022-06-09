import React from 'react';
import contact from "../assest/contact.jpg"
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fade } from 'react-reveal';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_y3j5gda', 'template_e5miokv', e.target, 'RUBVHnjhGg4YpRXKe').then(res => console.log(res)).catch(err => console.log(err))
    toast.success('Email Sent')
    e.target.reset();
  }
  return (
    <div className='container shadow' id='contact'>
      <h2 className='text-center pt-5 pb-5'>Contact <span className="text-primary">Me</span></h2>
      <div className="row">
        <div className="col-md-6 col-sm-12 p-5">
          <Fade right>
            <img className='w-100' src={contact} alt="" />
          </Fade>
        </div>
        <div className="col-md-6 col-sm-12 p-3">
          <Fade left>
            <form onSubmit={sendEmail}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label text-primary">Your Name</label>
                <input type="name" name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label  text-primary">Email address</label>
                <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label  text-primary">Your Message</label>
                <textarea class="form-control" name='message' id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>


              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </Fade>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Contact;