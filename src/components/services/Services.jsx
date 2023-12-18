import React, { useEffect } from 'react'
import back from "../images/serv.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, Outlet } from "react-router-dom"

function Services() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <div className="services_main" style={{ backgroundImage: `url(${back})`, height: "80vh" }}>
                <div className="span2">
                    <h4>
                        Services
                    </h4>
                    <h2>
                        OUR EXPERTS WILL HELP YOU <span>
                            IMPROVE YOUR CORE BANKING PRODUCT
                        </span> STRATEGIES.
                    </h2>
                </div>
            </div>
            <div className="serv_second">
                <div className="ser_second_content">
                    <h2>
                        What We Do
                    </h2>

                    <div className="serv_button">
                        <div className="buttons">
                            <div className="butto">
                                <Link to="finance">
                                    <button>
                                        Finance Sevices
                                    </button>
                                </Link>
                                <Link to="it">
                                    <button>
                                        IT Sevices
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="outlet">
                            <Outlet />
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Services
