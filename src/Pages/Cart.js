import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import { Meta } from '../Components/Meta'
import watch from '../images/watch.jpg';
import {AiFillDelete} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Container from '../Components/Container';

const Cart = () => {
  return (
    <>
        <Meta title= {'Your Shopping Cart'} />
        <BreadCrumb title='Your Shopping Cart' />

        <Container class1="cart-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                            <h4 className='cart-col-1'>Product</h4>
                            <h4 className='cart-col-2'>Price</h4>
                            <h4 className='cart-col-3'>Quantity</h4>
                            <h4 className='cart-col-4'>Total</h4>
                        </div>
                        <div className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center">
                            <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                <div>
                                    <img src={watch} className='img-fluid' alt="product" />
                                </div>
                                <div className='w-75'>
                                    <p>Gfdcsre</p>
                                    <p>Size: </p>
                                    <p>Color</p>
                                </div>
                            </div>
                            <div className='cart-col-2'>
                                <h5 className="price">$100</h5>
                            </div>
                            <div className='cart-col-3 d-flex align-items-center gap-15'>
                                <div>
                                    <input 
                                        type="number" 
                                        className='form-control' 
                                        name="" 
                                        id=""
                                        min={1}
                                        max={10}
                                    />
                                </div>
                                <div>
                                    <AiFillDelete className='text-danger' />
                                </div>
                            </div>
                            <div className='cart-col-4'>
                                <h5 className="price">$100</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 py-2 mt-4">
                        <div className="d-flex justify-content-between align-items-baseline">
                            <Link to='/product' className='button'>Continue Shopping</Link>
                            <div className='d-flex flex-column justify-content-end'>
                                <h4>SubTotal: $1000</h4>
                                <p>Taxes and Shipping Calculated at Checkout</p>
                                <Link to='/checkout ' className='button'>Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
        </Container>
    </>
  )
}

export default Cart