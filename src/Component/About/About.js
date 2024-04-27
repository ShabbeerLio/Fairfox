import React from 'react'
import "./About.css"
import Aboutimg from "../../Assets/About/about.webp"
import { Link } from 'react-router-dom'

const About = () => {

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }

    return (
        <div className="aboutUs">
            <div className="about-title">
                <h1>FAIRFOX EON</h1>
                <p>Rera No : UPRERAPRJ750395</p>
                <span>Office Space and Retail Shop Noida Sector 140A</span>
                <h4>INVESTMENT STARTS @ <span>₹40</span> LAKH*</h4>
                <span>Booking Amount only @ ₹4 lakh</span>
            </div>
            <div className="about-main">
                <div className="about-items">
                    <div className="about-left">
                        <div className="about-detail">
                            <h3>FAIRFOX EON NOIDA, Sector 140 Noida Expressway</h3>
                            <p>Welcome to FAIRFOX EON, where every feature is crafted to elevate your lifestyle to new heights of luxury and sophistication. Discover a world of unparalleled elegance, where thoughtful design and opulent amenities converge to create a living experience unlike any other.</p>
                            <p>With its unparalleled features and amenities, FAIRFOX EON redefines the concept of commercial spaces, offering a harmonious blend of functionality, aesthetics, and luxury. Elevate your business to new heights of success and prestige at FAIRFOX EON, where every detail is meticulously crafted to enhance your corporate experience. Welcome to a world of commercial excellence in Greater Noida's most prestigious address.</p>
                        </div>
                        <div className="about-button">
                            <Link to="/site-visit" onClick={toTop}>
                                <p>Interested in Site Visit ?</p>
                            </Link>
                        </div>
                    </div>
                    <div className="about-right">
                        <img className="image2" src={Aboutimg} alt="fairfox eon Noida" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
