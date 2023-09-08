import React from 'react'
import { Link } from 'react-router-dom'
import {MdArrowBack} from 'react-icons/md';
import watch from '../images/watch.jpg';
import Container from '../Components/Container';

const Checkout = () => {
  return (
    <>
        <Container class1="checkout-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-7">
                        <div className="checkout-left-data">
                            <h3 className="website-name">Code Corner</h3>
                                <nav 
                                    style={{"--bs-breadcrumb-divider": '>'}} 
                                    aria-label="breadcrumb"
                                >
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link className='text-dark total-price' to='/cart'>
                                                Cart
                                            </Link>
                                        </li>
                                        &nbsp; /
                                        <li className="breadcrumb-item active total-price" aria-current="page">
                                             Information
                                        </li>
                                        &nbsp; /
                                        <li className="breadcrumb-item active">
                                            Shipping
                                        </li>
                                        &nbsp; /
                                        <li className="breadcrumb-item active" aria-current="page">
                                             Payment
                                        </li>
                                    </ol>
                                </nav>
                                <h4 className="title total">
                                    Contact Information
                                </h4>
                                <p className="user-details">
                                    Moscharito (moscharito@gmail.com)
                                </p>
                                <h4 className='mb-3'>Shipping Address</h4>
                                <form action="" className='d-flex flex-wrap gap-15 justify-content-between'>
                                    <div className='w-100'>
                                        <select 
                                            name="" 
                                            className='form-control form-select' 
                                            id="">
                                        </select>
                                        <option value="" selected disabled>Select Country</option>
                                    </div>
                                    <div>
                                        <input type="text" placeholder='First Name' className="form-control" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder='Last Name' className="form-control" />
                                    </div>
                                    <div className='w-100'>
                                        <input type="text" placeholder='Address' className="form-control" />
                                    </div>
                                    <div className='w-100'>
                                        <input type="text" placeholder='Apartment, Suite, etc' className="form-control" />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" placeholder='City' className="form-control" />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <select 
                                            name="" 
                                            className='form-control form-select' 
                                            id="">
                                        </select>
                                        <option value="" selected disabled>Select State</option>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" placeholder='Zip Code' className="form-control" />
                                    </div>
                                    <div className="w-100">
                                        <div className='d-flex justify-content-between align-items-center'>
                                                <Link to='/cart' className='text-dark'> <MdArrowBack className='me-2' />Return to Cart</Link>
                                                <Link to='/cart' className='button'>Continue to Shipping</Link>
                                        </div>
                                     </div>
                                </form>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className='border-bottom py-4'>
                            <div className='d-flex gap-10 align-items-center '>
                                <div className='w-75 mb-2 d-flex gap-10'>
                                    <div className='w-25 position-relative'>
                                        <span 
                                            style={{ top:"-10px", right:"2px"}} 
                                            className="badge bg-secondary text-white rounded-circle p-2 position-absolute">1</span>
                                        <img src={watch} className='img-fluid' alt="watch" />
                                    </div>
                                    <div>
                                        <h5 className="title total-price">ghfhkl</h5>
                                        <p className='total-price'> s / #Abdvee</p>
                                    </div>
                                    <div className='flex-grow-1 text-end'>
                                        <h5 className='total'>$ 100</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='border-bottom py-4'></div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='mb-0 total'>SubTotal</p>
                            <p className='mb-0 total-price'>$ 100</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='mb-0 total'>Shipping</p>
                            <p className='mb-0 total-price'>$ 100</p>
                        </div>
                        </div>
                        
                        <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                            <h4 className='total'>Total</h4>
                            <h5 className='total-price'>$ 100</h5>
                        </div>
                    </div>
                </div>
        </Container>
    </>
  )
}

export default Checkout