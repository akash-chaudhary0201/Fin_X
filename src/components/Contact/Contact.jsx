import React from 'react'
import c1 from "./Contactimg/c4.jpg"

function Contact() {
    return (
        <>
            <div className="con_main">
                <div className="contact_con">
                    <div className="services_main" style={{ backgroundImage: `url(${c1})`, height: "80vh" }}>
                        <div className="span2">
                            <h3 style={{ color: "#23506D" }}>
                                Contact Us
                            </h3>
                            <h2 style={{ color: "white", marginTop: "20px" }}>
                                DON’T HESITATE TO <span style={{ color: "#E3651D" }}>GET IN TOUCH </span>WITH US
                            </h2>
                        </div>
                    </div>
                    <div className="contact_sec">
                        <div className="contact_sec_con">
                            <h1>
                                Address
                            </h1>
                            <div className="contact_map">
                                <div className="contact_sec_left">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.4167859014!2d-122.80077392435959!3d49.05971178651885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485c4b70a1e9437%3A0xfe17a78a8299517b!2s15300%20Croydon%20Dr%2C%20Surrey%2C%20BC%20V3Z%200Z5%2C%20Canada!5e0!3m2!1sen!2sin!4v1703602351232!5m2!1sen!2sin" style={{ height: "200px", width: "300px" }}></iframe>
                                </div>
                                <div className="contact_sec_right">
                                    <ul>
                                        <li>
                                            <span>Address :- </span>  15300 Croydon Drive.
                                            Surrey, BC V3Z 0Z5, CANADA
                                        </li>
                                        <li>
                                            <span>Email :- </span> ContactUs@finxsystems.com
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact_third">
                        <div className="contact_third_con">
                            <h1 style={{ textAlign: "center", color: "#23506D", fontSize: "50px" }}>
                                Contact Us
                            </h1>
                            <p style={{ textAlign: "center", color: "#E3651D", fontSize: "25px", marginBottom: "20px" }}>
                                Get in touch and Begin your Journey.
                            </p>
                            <div className="contact_third_form">
                                <div className="contact_third_left">
                                    <ul>
                                        <li>
                                            <span>Sales :- </span> sales@finxsys.com
                                        </li>
                                        <li>
                                            <span>Inquiries :- </span> info@infoxsys.com
                                        </li>
                                        <li>
                                            <span>Careers :- </span> careers@finxsys.com
                                        </li>
                                        <li>
                                            <span>Public Relations :-</span> pr@finxsys.com
                                        </li>
                                    </ul>
                                    <hr />
                                    <p style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "22px", color: "#23506D" }}><span style={{ color: "#E3651D" }}>Phone :-  </span> +00000</p>
                                </div>
                                <div className="contact_third_right">
                                    <form >
                                        <input type="text" placeholder='Name' />
                                        <input type="email" placeholder='Email Address' />
                                        <input type="number" placeholder='Phone Number' />
                                        <input type="text" placeholder='Company Name' />
                                        <textarea rows="3" placeholder='Your Message'></textarea>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
