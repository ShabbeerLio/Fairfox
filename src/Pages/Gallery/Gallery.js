import React, { useEffect, useState } from 'react'
import "./Gallery.css"
import GalleryData from './GalleryData'
import { IoMdClose } from "react-icons/io";
import { useLocation } from 'react-router-dom';

console.log(GalleryData[0].cover)

const Gallery = (props) => {

    const [model, setModel] = useState(false);
    const [imgview, setImgview] = useState('')

    const getImg = (img) => {
        setImgview(img);
        setModel(true)
    }

    const closeModel = () => {
        setModel(false)
    }

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
        <>

            <div className='Gallery'>
                <div className='Gallery-main'>
                    <div className="Page-title">
                        <h1>Gallery</h1>
                    </div>
                    <div className={model ? "model open" : "model"}>
                        <IoMdClose onClick={closeModel} />
                        <img src={imgview} alt="" />
                    </div>
                    <div className="gallery-box">
                        <div className="gallery-items1">
                            <img src={GalleryData[0].cover} alt={GalleryData[0].alt} onClick={() => getImg(GalleryData[0].cover)} />
                        </div>
                        <div className="gallery-items2">
                            {GalleryData.slice(1, 5).map((item) => (
                                <img key={item.id} src={item.cover} alt={item.alt} onClick={() => getImg(item.cover)} />
                            ))}
                        </div>
                    </div>
                    <div className="gallery-box2">
                        {GalleryData.slice(1, 5).map((item) => (
                            <img key={item.id} src={item.cover} alt={item.alt} onClick={() => getImg(item.cover)} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery
