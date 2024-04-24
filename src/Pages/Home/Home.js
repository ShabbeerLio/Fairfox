import React, { useEffect } from 'react'
import Banner from '../../Component/Banner/Banner'
import Overview from '../../Component/Overview/Overview'
import About from '../../Component/About/About'
import Highlights from '../../Component/Highlights/Highlights'
import Walkthrough from '../../Component/Walkthrough/Walkthrough'
import Enquery from '../../Component/Enquery/Enquery'
import HomePlan from '../../Component/HomePlan/HomePlan'
import { useLocation } from 'react-router-dom'

const Home = (props) => {

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
        <div className='home'>
            <Banner />
            <About />
            <Overview />
            <Highlights />
            <Walkthrough />
            <HomePlan />
            {/* <Enquery /> */}
        </div>
    )
}

export default Home
