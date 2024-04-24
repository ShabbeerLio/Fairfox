import React from 'react'
import "./Overview.css"
import Form from '../Form/Form'
import hall from "../../Assets/CAtegory/hall.jpg"
import food from "../../Assets/CAtegory/overview-food.jpg"
import pool from "../../Assets/CAtegory/Swimming Pool.jpg"
import walking from "../../Assets/CAtegory/category-walking.jpg"
import Shopping from "../../Assets/CAtegory/poseshoping.jpg"
import spot from "../../Assets/CAtegory/recreational.jpg"
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Overview = () => {
    const responsiveOptions = {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    };
    return (
        <div className="overview">
            <div className="about-main">
                <div className="overview-item">
                    <div className="overview-left">
                        <div className="overview-form">
                            <Form />
                        </div>
                    </div>
                    <div className="overview-right">
                        <div className="overview-title">
                            <h3>Overview</h3>
                        </div>
                        <div className="overview-detail">
                            <p>Our meticulously crafted commercial shops and office spaces redefine the standard of modern business environments, offering a seamless blend of functionality, luxury, and convenience. From the moment you enter through the grand vehicular entrance and exit, you are greeted by a meticulously planned road-to-ramp system that ensures smooth traffic flow. As you navigate through the shaded avenues and green boulevards, you'll encounter the central inner grove with a mound, providing a serene retreat amidst the bustling commercial district.</p>
                            <p>Our shopping boulevard and pedestrian shopping plaza offer a vibrant shopping experience, complemented by F&B kiosks and food terraces that cater to every culinary craving. The triple-height entrance lobby, adorned with project signage, sets the stage for a grand arrival, while pedestrian crossovers and skywalks connect you seamlessly to multifunctional spaces and amenities such as the kid's play area and sand pit.</p>
                            <p>Immerse yourself in cultural performances at the amphitheater or relax on the performance deck overlooking the landscape terraces and tree bosque seating areas. With features like vehicular and pedestrian boulevards, sculptural staircases for basement connections, FAIRFOX EON ensures that every aspect of your commercial experience is thoughtfully curated for success and enjoyment. Welcome to a new era of commercial sophistication at FAIRFOX EON, where every detail is designed to elevate your business and lifestyle.</p>
                        </div>
                        <div className="overview-category">
                            <ReactOwlCarousel
                                items={6}
                                nav={true}
                                dots={false}
                                responsive={responsiveOptions}
                            >
                                <div className="category-card">
                                    <img src={hall} alt="" />
                                    <p>Triple-height entrance lobby</p>
                                </div>
                                <div className="category-card">
                                    <img src={food} alt="" />
                                    <p>Food Court</p>
                                </div>
                                <div className="category-card">
                                    <img src={Shopping} alt="" />
                                    <p>Posh Shopping</p>
                                </div>
                                <div className="category-card">
                                    <img src={walking} alt="" />
                                    <p>Walking Track</p>
                                </div>
                                <div className="category-card">
                                    <img src={spot} alt="" />
                                    <p>Recreational Spot</p>
                                </div>
                            </ReactOwlCarousel>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Overview
