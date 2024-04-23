import React from 'react'
import "./Walkthrough.css"
import walk from "../../Assets/Walkthrough/watchthrouth.mp4"
import Form from '../Form/Form'

const Walkthrough = () => {
    return (
        <div className='Walkthrough'>
            <div className='Walkthrough-main'>
                <h2>Construction Update</h2>
                <div className="walkthrough-item">
                    <div className="walkthrough-left">
                        <video controls>
                            <source src={walk} type="video/mp4" />
                        </video>
                    </div>
                    <div className="walkthrough-right">
                        <div className="walkthrough-form">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Walkthrough
