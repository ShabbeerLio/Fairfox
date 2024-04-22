import React, { useState } from 'react'
import "./Form.css"

const Form = (props) => {
    // form
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        message: '',
        email: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const name = formData.name;
        const phoneNumber = formData.number;
        const email = formData.email;
        const message = formData.message;

        console.log('Name:', name);
        console.log('Phone Number:', phoneNumber);
        console.log('Email:', email);
        console.log('Message:', message);

        setFormData({
            name: '',
            number: '',
            email: '',
            message: ''
        });
    };

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value
        }));
    };
    return (
        <>
            <h4>Interested in Fairfox EON?</h4>
            <form className='form' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        value={formData.name}
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        value={formData.number}
                        type="number"
                        className="form-control"
                        id="number"
                        placeholder="Phone No."
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        value={formData.email}
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <textarea
                        value={formData.message}
                        className="form-control"
                        id="message"
                        placeholder="Message"
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Book A Site Visit
                </button>
            </form>
        </>
    )
}

export default Form
