import React from 'react'
import "./HomePlan.css"
import plan1 from "../../Assets/Homeplan/images1.webp"
import plan2 from "../../Assets/Homeplan/images2.webp"
import { Link } from 'react-router-dom'
// import plan3 from "../../Assets/Homeplan/highlights2.jpg"

const HomePlan = () => {
    return (
        <div className='HomePlan'>
            <div className='HomePlan-main'>
                <div className="homeplan-box">
                    <div className="homeplan-left">
                        <h2>Fairfox Eye Of Noida Floor Plan</h2>
                        <p>Fairfox Eye of Noida is the perfect place for your business in Noida. With modern amenities and facilities, we have everything that you need to thrive. From the latest office spaces to the retail shop that we have on offer, there is no doubt that you will find everything in Commercial Investment that you are looking for at EON. From startup businesses to leading global brands, our premium office spaces and convenient retail shop attractions offer everything you need to get ahead. </p>
                        <p>A future is full of investment opportunities, and it belongs to only those who can see it today. It’s time to begin your commercial work at the place which gives your business the perfect address it deserves. Fairfox Infra has launched the most affordable commercial project, Eye of Noida EON Sector 140A, Noida offering Lockable Offices and Retail Shops at the most unbeatable price.</p>
                        <div className="about-button">
                            <Link to="/">
                                <p>View More</p>
                            </Link>
                        </div>
                    </div>
                    <div className="homeplan-right">
                        <div className="homeplan-image">
                            <img src={plan1} alt="" />
                        </div>
                        <div className="homeplan-image1">
                            <img src={plan2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePlan
