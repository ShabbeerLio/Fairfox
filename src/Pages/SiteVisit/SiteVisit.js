import React, { useEffect } from 'react'
import "./SiteVisit.css"
import Form from '../../Component/Form/Form'
import { useLocation } from 'react-router-dom';

const SiteVisit = (props) => {
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
        <div className='SiteVisit'>
            <div className='SiteVisit-main'>
                <div className="Page-title">
                    <h1>Book Your Site Visit</h1>
                </div>
                <div className="sitevisit-box">
                    <div className="sitevisit-item">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SiteVisit
