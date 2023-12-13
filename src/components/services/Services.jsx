import React, { useEffect } from 'react'
import back from "../images/serv.jpg"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import third from "../images/third.jpg"
import rep from "../images/rep.jpg"
import lap from "../images/lap.jpg"
import core from "../images/core.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';

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

                    <div className="service_cards" data-aos="fade-right">
                        <Card style={{ width: '18rem', borderRadius: "10px" }}>
                            <Card.Img variant="top" src={lap} style={{ height: "200px", width: "100%" }} />
                            <Card.Body style={{ backgroundColor: "#23506D", color: "white", borderRadius: "10px" }}>
                                <Card.Title style={{ color: "#E3651D" }}>CORE BATCH PROCESSING</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">More</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', borderRadius: "10px" }}>
                            <Card.Img variant="top" src={rep} style={{ height: "200px", width: "100%" }} />
                            <Card.Body style={{ backgroundColor: "#23506D", color: "white", borderRadius: "10px" }}>
                                <Card.Title style={{ color: "#E3651D" }}>CUSTOM REPORTS</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">More</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="service_cards" data-aos="fade-left">
                        <Card style={{ width: '18rem', borderRadius: "10px" }}>
                            <Card.Img variant="top" src={third} style={{ height: "200px", width: "100%" }} />
                            <Card.Body style={{ backgroundColor: "#23506D", color: "white", borderRadius: "10px" }}>
                                <Card.Title style={{ color: "#E3651D" }}>THIRD-PARTY INTEGRATIONS</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">More</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', borderRadius: "10px" }}>
                            <Card.Img variant="top" src={core} style={{ height: "200px", width: "100%" }} />
                            <Card.Body style={{ backgroundColor: "#23506D", color: "white", borderRadius: "10px" }}>
                                <Card.Title style={{ color: "#E3651D" }}>CORE BANKING MODERNIZATION</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">More</Button>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Services
