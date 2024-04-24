import React, { useEffect } from 'react'
import "./Location.css"
import { useLocation } from 'react-router-dom';

const Location = (props) => {

    const location = useLocation();

    useEffect(() => {
        document.title = `${props.title}`;

        // Update the canonical URL based on the current location
        const canonicalUrl = `${window.location.origin}${location.pathname}`;
        const canonicalLink = document.querySelector("link[rel='canonical']");
        if (canonicalLink) {
            canonicalLink.setAttribute("href", canonicalUrl);
        }

        // Update the description meta tag
        const description = `${props.descriptions}`
        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            // If the description meta tag doesn't exist, create it
            const newMeta = document.createElement("meta");
            newMeta.setAttribute("name", "description");
            newMeta.setAttribute("content", description);
            document.head.appendChild(newMeta);
        }
    }, [props.title, location]);

    return (
        <div className='location'>
            <div className="Page-title">
                <h1>LOCATION</h1>
            </div>
            <div className="location-box">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.8628575834878!2d77.41573307536547!3d28.51377358946393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9ffff109205%3A0x1d3399ed3185f506!2sFairfox%20EON%20Commercial%20Park%2C%20Noida!5e0!3m2!1sen!2sin!4v1713781095030!5m2!1sen!2sin"></iframe>
            </div>
        </div>
    )
}

export default Location
