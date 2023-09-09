import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg"
import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";


const ProductCard = (props) => {
    const {grid} = props
    let location = useLocation();
  return (
    <>
        <div className={` ${location.pathname === "/product" ? `gr-${grid}`: "col-3"} `}>
            <Link 
                to={`${
                    location.pathname == "/" 
                    ? "/product/:id" 
                    : location.pathname == "/product/:id" 
                    ? "/product/:id" 
                    : ":id"
                }`} 
                className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <button className='border-0 bg-transparent'>
                        <img src={wish} alt="wishlist" />
                    </button>
                </div>
                <div className="product-image">
                    <img src={watch} className='img-fluid' alt="watch" />
                    <img src={watch2} className='img-fluid' alt="watch" />
                </div>
                <div className="product-details">
                    <h6 className="brands">Havels</h6>
                    <h5 className="product-title">Kids Headphones 10 bulk pack multi colored for students</h5>
                    <ReactStars
                        count={5}
                        value={4}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                    />
                    <p className={`description ${grid=== 12 ? "d-block" : "d-none"}`}>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt...</p>
                    <p className="price">$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className='d-flex flex-column gap-15'>
                        <button className='border-0 bg-transparent'>
                            <img src={addcart} alt="Add Cart" />
                        </button>
                        <Link>
                            <img src={prodcompare} alt="Compare" />
                        </Link>
                        <Link>
                            <img src={view} alt="View" />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
        <div className={` ${location.pathname === "/product" ? `gr-${grid}`: "col-3"} `}>
            <Link 
                to={`${
                    location.pathname == "/" 
                    ? "/product/:id" 
                    : location.pathname == "/product/:id" 
                    ? "/product/:id" 
                    : ":id"
                }`}
                className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <button className='border-0 bg-transparent'>
                        <img src={wish} alt="wishlist" />
                    </button>
                </div>
                <div className="product-image">
                    <img src={watch} className='img-fluid' alt="watch" />
                    <img src={watch2} className='img-fluid' alt="watch" />
                </div>
                <div className="product-details">
                    <h6 className="brands">Havels</h6>
                    <h5 className="product-title">Kids Headphones 10 bulk pack multi colored for students</h5>
                    <ReactStars
                        count={5}
                        value={4}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                    />
                    <p className={`description ${grid=== 12 ? "d-block" : "d-none"}`}>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt...</p>
                    <p className="price">$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className='d-flex flex-column gap-15'>
                        <Link>
                            <img src={addcart} alt="Add Cart" />
                        </Link>
                        <Link>
                            <img src={prodcompare} alt="Compare" />
                        </Link>
                        <Link>
                            <img src={view} alt="View" />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    </>
  )
}

export default ProductCard