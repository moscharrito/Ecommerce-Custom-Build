import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const ProductCard = (props) => {
    const {grid} = props
    let location = useLocation();
  return (
    <>
        <div className={` ${location.pathname === "/store" ? `gr-${grid}`: "col-3"} `}>
        <Link to=':id' className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <button className='border-0 bg-transparent'>
                    <img src="images/wish.svg" alt="wishlist" />
                </button>
            </div>
            <div className="product-image">
                <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                <img src="images/watch-1.avif" className='img-fluid' alt="watch" />
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
                        <img src="images/add-cart.svg" alt="Add Cart" />
                    </button>
                    <Link>
                        <img src="images/prodcompare.svg" alt="Compare" />
                    </Link>
                    <Link>
                        <img src="images/view.svg" alt="View" />
                    </Link>
                </div>
            </div>
        </Link>
    </div>
    <div className={` ${location.pathname === "/store" ? `gr-${grid}`: "col-3"} `}>
        <Link className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <button className='border-0 bg-transparent'>
                    <img src="images/wish.svg" alt="wishlist" />
                </button>
            </div>
            <div className="product-image">
                <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                <img src="images/watch-1.avif" className='img-fluid' alt="watch" />
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
                        <img src="images/add-cart.svg" alt="Add Cart" />
                    </Link>
                    <Link>
                        <img src="images/prodcompare.svg" alt="Compare" />
                    </Link>
                    <Link>
                        <img src="images/view.svg" alt="View" />
                    </Link>
                </div>
            </div>
        </Link>
    </div>
    </>
  )
}

export default ProductCard