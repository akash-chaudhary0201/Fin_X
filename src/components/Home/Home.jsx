import React, { useState, useEffect } from 'react'
import back from "../images/main_back.jpg"
import about from "../images/about.jpg"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from "../images/logo-2.png"
import Footer from '../Footer/Footer'


function Home() {
    useEffect(() => {
        AOS.init();
    }, [])

    const [counterOn, setCounterOn] = useState(false);

    return (
        <>
            <div className="home_main_container" style={{ backgroundImage: `url(${back})`, height: "100vh" }}>
                <div className="span">
                    <span>
                        <h1>
                            fin<span>X</span>systems
                        </h1>
                        <p>
                            Innovative Fintech Solutions for Banks and Credit Unions.
                        </p>
                        <button>
                            Know More
                        </button>
                    </span>
                </div>
            </div>
            <div className="second" data-aos="fade-right">
                <div className="second_content">
                    <div className="left_second">
                        <h4>
                            Driving financial evolution with  innovative tech solutions for all.
                        </h4>
                    </div>
                    <div className="right_second">
                        <div className="secc">
                            <p>
                                Welcome to Finxsystems! We are a team of experienced professionals with a strong background in core banking solutions.
                            </p>
                            <button>
                                Let's Talk
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about" data-aos="fade-left">
                <div className="about_content">
                    <div className="about_left">
                        <div className="leftt">
                            <p className='pp'>
                                About Us
                            </p>
                            <h2>
                                PARTNER WITH <span>
                                    FINXSYSTEMS</span> FOR CUTTING-EDGE SOLUTIONS.
                            </h2>
                            <p className='pp2'>
                                At Finxsystems, we’re a team of fintech veterans with a deep understanding of the industry and a passion for innovation. We’ve spent years developing cutting-edge technologies and helping banks and credit unions in the US and Canada achieve their goals.
                            </p>
                            <a href="#">Know More</a>
                        </div>
                    </div>
                    <div className="about_right">
                        <div className="img">
                            <img src={about} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="counter" data-aos="fade-right">
                <div className="counter_content">
                    <h1>
                        "Innovating finance, empowering you"
                    </h1>
                    <div className="count">
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <div className="countt">
                                <div className="cc">
                                    <div className="cc_con">
                                        <h2>
                                            {counterOn && <CountUp start={0} end={50} duration={2} delay={0} />}Y
                                        </h2>
                                        <h4>Combined Experience</h4>
                                    </div>
                                </div>
                                <div className="cc">
                                    <div className="cc_con">
                                        <h2>
                                            {counterOn && <CountUp start={0} end={120} duration={2} delay={0} />}
                                        </h2>
                                        <h4>Features Added</h4>
                                    </div>
                                </div>
                                <div className="cc">
                                    <div className="cc_con">
                                        <h2>
                                            {counterOn && <CountUp start={0} end={59} duration={2} delay={0} />}
                                        </h2>
                                        <h4>Clients in Touch</h4>
                                    </div>
                                </div>
                                <div className="cc">
                                    <div className="cc_con">
                                        <h2>
                                            {counterOn && <CountUp start={0} end={20} duration={4} delay={0} />}Y
                                        </h2>
                                        <h4>Journey with DNA</h4>
                                    </div>
                                </div>
                            </div>
                        </ScrollTrigger>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
