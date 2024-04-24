import React, { useEffect } from 'react'
import "./FloorPlan.css"
import FloorPlanData from './FloorPlanData'
import { useLocation } from 'react-router-dom';

const FloorPlan = (props) => {
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
        <div className='FloorPlan'>
            <div className='FloorPlan-main'>
                <div className="Page-title">
                    <h1>Floor Plan</h1>
                </div>
                {FloorPlanData.map((item) => (
                    <>
                        <div className="floorplan-box">
                            <div className="floorplan-box-image">
                                <img src={item.cover1} alt="" />
                            </div>
                            <div className="floorplan-box-image">
                                <img src={item.cover2} alt="" />
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default FloorPlan
