import React, { useEffect } from 'react'
import "./MasterPlan.css"
import masterimg from "../../Assets/Homeplan/images2.webp"
import { useLocation } from 'react-router-dom';

const MasterPlan = (props) => {

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
        <div className='MasterPlan'>
            <div className='MasterPlan-main'>
                <div className="Page-title">
                    <h1>Master Plan</h1>
                </div>
                <img src={masterimg} alt="" />
            </div>
        </div>
    )
}

export default MasterPlan
