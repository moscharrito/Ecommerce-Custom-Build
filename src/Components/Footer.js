import React from 'react'
import { Link } from 'react-router-dom'
import {BsLinkedin, BsGithub, BsInstagram, BsYoutube} from 'react-icons/bs';
import newsletter from "../images/newsletter.png";


const Footer = () => {
  return (
    <>
        <footer className='py-4'>
            <div className="container-xxl">
                <div className="row align-items-center">
                    <div className="col-5">
                        <div className="footer-top-data d-flex align-items-center">
                            <img src={newsletter} alt="newsletter" />
                            <h2 className='mb-0 text-white'>Sign up for Newsletter </h2>
                        </div>
                    </div>
                    <div className="col-7">
                        <div class="input-group">
                            <input 
                                type="text" 
                                className="form-control py-1" 
                                placeholder="Your Email Address" 
                                aria-label="Your Email Address" 
                                aria-describedby="basic-addon2"
                            />
                            <span 
                                class="input-group-text p-2" 
                                id="basic-addon2">
                                Subscribe 
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <footer className='py-4'>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-4">
                        <h4 className='text-white mb-4'>Contact Us</h4>
                        <div>
                            <address className='text-white'>
                                No 07 Adebayo  <br />
                                Adekoya Str Gbagada <br />
                                Lagos 101001
                            </address>
                            <a 
                                href="tel"
                                className='mt-3 d-block mb-2 text-white'> 
                                315-636-0350
                            </a>
                            <a 
                                href="mailto:moscharito@gmail.com"
                                className='mt-4 d-block mb-0 text-white'> 
                                moscharito@gmail.com
                            </a>
                            <div className="social-icons d-flex align-items-center gap-30 mt-4">
                                <a className='text-white' href="https://instagram.com/">
                                    <BsInstagram className='fs-4 ' />
                                </a>
                                <a className='text-white' href="https://linkedin.com/in">
                                    <BsLinkedin className='fs-4 ' />
                                </a>
                                <a className='text-white' href="https://github.com/">
                                    <BsGithub className='fs-4 ' />
                                </a>
                                <a className='text-white' href="https://youtube.com/">
                                    <BsYoutube className='fs-4 ' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <h4 className='text-white mb-4'>Information</h4>
                            <div className='text-white d-flex flex-column'>
                                <div className='footer-links d-flex flex-column'>
                                    <Link to='/privacy-policy' className='text-white py-2 mb-1'> Privacy Policy</Link>
                                    <Link to='/refund-policy' className='text-white py-2 mb-1'>Refund Policy</Link>
                                    <Link to='/shipping-policy' className='text-white py-2 mb-1'>Shipping Policy</Link>
                                    <Link to='/term-conditions' className='text-white py-2 mb-1'>Terms & Conditions</Link>
                                    <Link to='/blogs' className='text-white py-2 mb-1'>Blogs</Link>
                                </div>
                            </div>
                    </div>
                    <div className="col-3">
                        <h4 className='text-white mb-4'>Account</h4>
                        <div className='text-white d-flex flex-column'>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'> About Us</Link>
                                <Link className='text-white py-2 mb-1'>Faq</Link>
                                <Link className='text-white py-2 mb-1'>Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <h4 className='text-white mb-4'>Quicklinks</h4>
                        <div className='footer-links d-flex flex-column'>
                            <Link className='text-white py-2 mb-1'> Laptops </Link>
                            <Link className='text-white py-2 mb-1'>Headphones</Link>
                            <Link className='text-white py-2 mb-1'>Tablets</Link>
                            <Link className='text-white py-2 mb-1'>Watch</Link>
                        </div>
                    </div>  
                </div>
            </div>
        </footer>
        <footer className='py-4'>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <p className='text-center mb-0 text-white '> &copy; { new Date().getFullYear()}. Powered By Moscharito Code Corner</p>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
export default Footer