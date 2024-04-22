import React from 'react'
import "./Overview.css"
import Form from '../Form/Form'
import hall from "../../Assets/CAtegory/hall.jpg"
import pool from "../../Assets/CAtegory/Swimming Pool.jpg"
import Shopping from "../../Assets/CAtegory/Posh Shopping.jpg"
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
                            <p>Fairfox EON is the best IT-ITES Commercial project in Noida. Located strategically at Sector 140A, Noida Expressway, Fairfox EON is a premium development with amenities like parking, power backup, landscaped gardens, rain water harvesting, 24×7 security and many more. Fairfox EON Eye Of Noida offers premium Office Spaces along with high street retail spaces with restraints, food court, brand showrooms. Fairfox eon offers lockable office space at very attractive rate.</p>
                            <p>Introducing Fairfox KUBES by Fairfox at one of the most preferred locations of Sector-140A, Noida. Fairfox Kubes project is a 5-seater lockable Office Space that is determined as the most efficient and budget friendly business center. Fairfox Kubes project is equipped with modern amenities.</p>
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
                                    <p>Community Hall</p>
                                </div>
                                <div className="category-card">
                                    <img src={pool} alt="" />
                                    <p>Swimming Pool</p>
                                </div>
                                <div className="category-card">
                                    <img src={Shopping} alt="" />
                                    <p>Posh Shopping</p>
                                </div>
                                <div className="category-card">
                                    <img src={pool} alt="" />
                                    <p>Community Library</p>
                                </div>
                                <div className="category-card">
                                    <img src={hall} alt="" />
                                    <p>Walking Track</p>
                                </div>
                                <div className="category-card">
                                    <img src={Shopping} alt="" />
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
