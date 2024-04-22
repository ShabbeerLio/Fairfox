import React from 'react'
import "./About.css"
import Aboutimg from "../../Assets/About/about.webp"
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="aboutUs">
            <div className="about-title">
                <h1>FAIRFOX EON</h1>
                <span>Office Space and Retail Shop Noida Sector 140A</span>
                <h4>INVESTMENT STARTS @ ₹40 LAKH*</h4>
                <span>Booking Amount only @ ₹4 lakh ( Rera No : UPRERAPRJ750395 )</span>
            </div>
            <div className="about-main">
                <div className="about-items">
                    <div className="about-left">
                        <div className="about-detail">
                            <h3>Fairfox EON 3 BHK Luxury Residence NH-24</h3>
                            <p>Fairfox EON is the best IT-ITES Commercial project in Noida. Located strategically at Sector 140A, Noida Expressway, Fairfox EON is a premium development with amenities like parking, power backup, landscaped gardens, rain water harvesting, 24×7 security and many more. Fairfox EON Eye Of Noida offers premium Office Spaces along with high street retail spaces with restraints, food court, brand showrooms. Fairfox eon offers lockable office space at very attractive rate.</p>
                            <p>Introducing Fairfox KUBES by Fairfox at one of the most preferred locations of Sector-140A, Noida. Fairfox Kubes project is a 5-seater lockable Office Space that is determined as the most efficient and budget friendly business center. Fairfox Kubes project is equipped with modern amenities.</p>
                        </div>
                        <div className="about-button">
                            <Link to="/">
                                <p>Enquire Now</p>
                            </Link>
                        </div>
                    </div>
                    <div className="about-right">
                        <img className="image2" src={Aboutimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
