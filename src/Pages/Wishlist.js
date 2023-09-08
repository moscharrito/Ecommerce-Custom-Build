import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import { Meta } from '../Components/Meta'
import Container from '../Components/Container'

const Wishlist = () => {
  return (
    <>
        <Meta title= {'Wishlist'} />
        <BreadCrumb title='Wishlist' />

        <Container className="wishlist-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img 
                                src="images/cross.svg" 
                                alt="cross" 
                                className='position-absolute cross img-fluid' 
                            />
                            <div className="wishlist-card-image">
                                <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />
                            </div>
                            <div className='px-2 py-3'>
                                <h5 className='title'>
                                    Apple AirPods Max 2020 With Smart Case – Blue
                                </h5>
                                <h6 className="price"> $ 100</h6>
                            </div>

                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img 
                                src="images/cross.svg" 
                                alt="cross" 
                                className='position-absolute cross img-fluid' 
                            />
                            <div className="wishlist-card-image">
                                <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />
                            </div>
                            <div className='px-2 py-3'>
                                <h5 className='title'>
                                    Apple AirPods Max 2020 With Smart Case – Blue
                                </h5>
                                <h6 className="price"> $ 100</h6>
                            </div>

                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img 
                                src="images/cross.svg" 
                                alt="cross" 
                                className='position-absolute cross img-fluid' 
                            />
                            <div className="wishlist-card-image">
                                <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />
                            </div>
                            <div className='px-2 py-3'>
                                <h5 className='title'>
                                    Apple AirPods Max 2020 With Smart Case – Blue
                                </h5>
                                <h6 className="price"> $ 100</h6>
                            </div>

                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img 
                                src="images/cross.svg" 
                                alt="cross" 
                                className='position-absolute cross img-fluid' 
                            />
                            <div className="wishlist-card-image">
                                <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />
                            </div>
                            <div className='px-2 py-3'>
                                <h5 className='title'>
                                    Apple AirPods Max 2020 With Smart Case – Blue
                                </h5>
                                <h6 className="price"> $ 100</h6>
                            </div>

                        </div>
                    </div>
                </div>
        </Container>


    </>
  )
}

export default Wishlist