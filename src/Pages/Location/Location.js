import React from 'react'
import "./Location.css"

const Location = () => {
    return (
        <div className='location'>
            <div className="location-banner">
                <img src="https://static.360realtors.com/properties/photos/5903/mini/Eon.jpg" alt="" />
            </div>
            {/* <div className='location-main'> */}
                <div className="location-title">
                    <h2>FAIRFOX EON LOCATION</h2>
                </div>
                <div className="location-box">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.8628575834878!2d77.41573307536547!3d28.51377358946393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9ffff109205%3A0x1d3399ed3185f506!2sFairfox%20EON%20Commercial%20Park%2C%20Noida!5e0!3m2!1sen!2sin!4v1713781095030!5m2!1sen!2sin"></iframe>
                </div>
            {/* </div> */}
        </div>
    )
}

export default Location
