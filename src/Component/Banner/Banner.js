import React, { useEffect } from 'react'
// import bannerimg from "../../Assets/Images/banner.webp"
import "./Banner.css"

import { FaBriefcase, FaCartShopping, FaMugSaucer, FaBed } from "react-icons/fa6";

const Banner = () => {

    return (
        <>
            <div className="banner">
                <div className="banner-heading">
                </div>
                <div className="banner-image">
                    <img src="https://static.360realtors.com/properties/photos/5903/mini/Eon.jpg" alt="" />
                </div>
                <div className="banner-bottom">
                    <div className="banner-items">
                        <div className="banner-card">
                            <FaBriefcase />
                            <div className="banner-card-detail">
                                <h4>Office Space</h4>
                                <p>Lockable Office Space</p>
                            </div>
                        </div>
                        <div className="banner-card">
                            <FaCartShopping />
                            <div className="banner-card-detail">
                                <h4>Retail Shop</h4>
                                <p>Lockable Retail Space</p>
                            </div>
                        </div>
                        <div className="banner-card">
                            <FaMugSaucer />
                            <div className="banner-card-detail">
                                <h4>Food Court</h4>
                                <p>Shop in Food Court</p>
                            </div>
                        </div>
                        <div className="banner-card">
                            <FaBed />
                            <div className="banner-card-detail">
                                <h4>Studio</h4>
                                <p>Studio Apartment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
