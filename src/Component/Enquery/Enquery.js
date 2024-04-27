import React from 'react'
import "./Enquery.css"
import Form from '../Form/Form'
import formimg from "../../Assets/Highlights/highlights.webp"

const Enquery = () => {
    return (
        <div className='Enquery'>
            <div className='Enquery-main'>
                <div className="enquery-box">
                    <div className="enquery-left">
                        <img src={formimg} alt="fairfox noida" />

                    </div>
                    <div className="enquery-right">
                        <div className="enquery-form-box">
                            <div className="enquery-form">
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Enquery
