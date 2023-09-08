import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import { Meta } from '../Components/Meta'
import {AiOutlineHome, AiOutlineMail, AiOutlinePhone} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import Container from '../Components/Container';

const Contact = () => {
  return (
    <div>
      <Meta title= {'Contact'} />
      <BreadCrumb title='Contact' />

      <Container className="contact-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.165488534514!2d3.3750530750533043!3d6.500723523427509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d9ee7e623b1%3A0xdcbe59aa02c2b8dc!2stheBUNKer%20Yaba!5e0!3m2!1sen!2sng!4v1690807603670!5m2!1sen!2sng" 
                width="600" 
                height="450" 
                className='border-0 w-100'
                allowFullScreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact Us</h3>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder='Name'
                       />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        className="form-control" 
                        placeholder='Email *'
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" 
                        className="form-control"
                        placeholder='Mobile Number'
                       />
                    </div>
                    <div>
                      <textarea 
                        name="" id="" 
                        className='w-100 form-control' 
                        cols="30" 
                        rows="10"
                        placeholder='Comments'
                        >
                      </textarea>
                    </div>
                    <div>
                      <button className='button border-0'> Submit </button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get In Touch with Us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineHome  className='fs-5'/>
                        <address className='mb-0'>279 Herbert Macaulay Way, Yaba Lagos 77001</address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlinePhone  className='fs-5'/>
                        <a href="tel" className='mb-0'>+2347089041482</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineMail  className='fs-5'/>
                        <a href="mailto" className='mb-0'>moscharito@gmail.com</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BsInfoCircle  className='fs-5'/>
                        <p className='mb-0'>Monday – Friday 10 AM – 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </div>
  )
}

export default Contact