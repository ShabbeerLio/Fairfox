import React from 'react'
import "./HomePlan.css"
import plan1 from "../../Assets/Homeplan/images1.webp"
import plan2 from "../../Assets/Homeplan/images2.webp"
import { Link } from 'react-router-dom'
import HomePlanData from './HomePlanData'
import HomePlanCard from './HomePlanCard'
// import plan3 from "../../Assets/Homeplan/highlights2.jpg"

const HomePlan = () => {

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }
    return (
        <div className='HomePlan'>
            <div className='HomePlan-main'>
                {HomePlanData.map((item ,index) => (
                    <HomePlanCard home={item} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default HomePlan
