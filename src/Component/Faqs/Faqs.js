import React from 'react'
import "./Faqs.css"
import { IoMdAdd } from "react-icons/io";

const Faqs = () => {
    return (
        <div className='faqs'>
            <div className='faqs-main'>
                <h3>FAQs</h3>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <p className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Q. What mobile app development services does Appventurez offer?
                                {/* <IoMdAdd /> */}
                            </p>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Appventurez, a leading mobile app development company, offers a set of comprehensive services that help businesses scale their operations and enhance user engagement. The mobile app development services offered by our experts are:
                                <ul>
                                    <li>Android App Development</li>
                                    <li>iOS App Development</li>
                                    <li>React js Development</li>
                                    <li>PHP Development</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <p className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Q. Which development methodology do you prefer while developing an app?
                                {/* <IoMdAdd /> */}
                            </p>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Our preferred mode of development methodology is agile. With our agile development process, we facilitate streamlining the custom mobile app development process with our technical excellence.
                            </div>
                            <div className="accordion-body">
                                However, as per the needs of the project, we are capable of altering our approach to give the best possible solutions to the clients.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <p className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Q. How much does mobile app development cost?
                                {/* <IoMdAdd /> */}
                            </p>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                The average cost to develop a mobile app ranges from $40,000 to $4,00,000. Notably, the cost to build an app is impacted by various factors, including the features and functionalities integrated into the app, UI/UX, type and size of the app, devices, platforms, and app security.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingfour">
                            <p className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
                                Q. Does Appventurez also offer app maintenance and support?
                                {/* <IoMdAdd /> */}
                            </p>
                        </h2>
                        <div id="flush-collapsefour" className="accordion-collapse collapse" aria-labelledby="flush-headingfour" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Yes, our team also provides application maintenance and support post-development. The services are tailored to meet the changing business requirements of the clients as per the latest market trends.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFive">
                            <p className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                Q. Does Appventurez sign a Non-Disclosure Agreement (NDA)?
                                {/* <IoMdAdd /> */}
                            </p>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Yes, as an app development company, we believe in the upkeep of confidential business information and client satisfaction by signing a Non-disclosure agreement. It safeguards the client’s information as the document emphasizes our commitment to maintaining the confidentiality of sensitive data and maintaining a secure and trustworthy relationship.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingSix">
                            <p className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                Q. Does Appventurez also assist with software integration and data migration?
                                {/* <IoMdAdd /> */}
                            </p>
                        </h2>
                        <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Yes, our app developers offer advanced software integration and data migration to make critical business processes seamless. As a leading mobile app development company, we ensure a tailored strategy helps in the optimization of software integration.
                            </div>
                            <div className="accordion-body">
                                Under software custom development, we also ensure that our approach is structured and carefully crafted to ensure a seamless transition without compromising the data integrity.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingSeven">
                            <p className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                Q. How does the team at Appventurez ensure the security and quality of the software?
                                {/* <IoMdAdd /> */}
                            </p>
                        </h2>
                        <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                As the leading mobile app development company, Appventurez gives utmost priority to the security and quality assurance of the software. For software security, our team applies a rigorous and industrialized approach to keep all the data and information secure. To maintain software quality, we adhere to the best practices of the industry and also follow stringent testing protocols to guarantee that we deliver services to the clients with our highest of standards.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs
