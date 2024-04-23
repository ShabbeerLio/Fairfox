import React, { useState } from 'react'
import "./Gallery.css"
import GalleryData from './GalleryData'
import { IoMdClose } from "react-icons/io";

console.log(GalleryData[0].cover)

const Gallery = () => {

    const [model, setModel] = useState(false);
    const [imgview, setImgview] = useState('')

    const getImg = (img) => {
        setImgview(img);
        setModel(true)
    }

    const closeModel = () => {
        setModel(false)
    }

    return (
        <>

            <div className='Gallery'>
                <div className='Gallery-main'>
                    <div className="Page-title">
                        <h2>LOCATION</h2>
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
