import React, { useEffect } from 'react'
import "./Location.css"
import { useLocation } from 'react-router-dom';

const Location = (props) => {

     /* global dataLayer */
     const location = useLocation();

     useEffect(() => {
         document.title = props.title;
 
         const canonicalUrl = `${window.location.origin}${location.pathname}`;
         let canonicalLink = document.querySelector("link[rel='canonical']");
         if (canonicalLink) {
             canonicalLink.setAttribute("href", canonicalUrl);
         } else {
             canonicalLink = document.createElement("link");
             canonicalLink.setAttribute("rel", "canonical");
             canonicalLink.setAttribute("href", canonicalUrl);
             document.head.appendChild(canonicalLink);
         }
 
         const description = props.descriptions;
         let metaDescription = document.querySelector("meta[name='description']");
         if (metaDescription) {
             metaDescription.setAttribute("content", description);
         } else {
             metaDescription = document.createElement("meta");
             metaDescription.setAttribute("name", "description");
             metaDescription.setAttribute("content", description);
             document.head.appendChild(metaDescription);
         }
 
         // Ensure dataLayer is initialized before the GA script loads
         window.dataLayer = window.dataLayer || [];
         function gtag() {
             dataLayer.push(arguments);
         }
 
         // Load the Google Analytics script only once
         const gaScriptId = 'ga-gtag';
         if (!document.getElementById(gaScriptId)) {
             const script = document.createElement('script');
             script.id = gaScriptId;
             script.async = true;
             script.src = 'https://www.googletagmanager.com/gtag/js?id=G-NMNPYY3GZ2';
             document.head.appendChild(script);
 
             script.onload = () => {
                 gtag('js', new Date());
                 gtag('config', 'G-NMNPYY3GZ2');
             };
         }
     }, [props.title, props.descriptions, location.pathname]);

    return (
        <div className='location'>
            <div className="Page-title">
                <h1>LOCATION</h1>
            </div>
            <div className="location-box">
            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14023.4831016781!2d77.4180515!3d28.5135354!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1714039416190!5m2!1sen!2sin"></iframe>
            </div>
        </div>
    )
}

export default Location
