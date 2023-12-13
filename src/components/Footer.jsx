import React from 'react'
import logo from "./images/logo-2.png"

function Footer() {
    return (
        <>
            <div className="footer" data-aos="fade-up">
                <div className="footer_content">
                    <div className="left_footer">
                        <img src={logo} alt="" />
                    </div>
                    <div className="right_footer">
                        <div className="up_footer">
                            <ul>
                                <li>
                                    About
                                </li>
                                <li>
                                    Meet the Team
                                </li>
                            </ul>
                            <ul className='ull'>
                                <li>
                                    Privacy
                                </li>
                                <li>
                                    Terms and Conditions
                                </li>
                            </ul>
                        </div>
                        <hr />
                        <div className="down_footer">
                            <ul>
                                <li>
                                    <i class="fa-brands fa-instagram"></i>
                                </li>
                                <li>
                                    <i class="fa-brands fa-facebook"></i>
                                </li>
                                <li>
                                    <i class="fa-brands fa-linkedin"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
