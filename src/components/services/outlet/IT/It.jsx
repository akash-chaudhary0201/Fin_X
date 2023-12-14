import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ai from "../outimages/ai.jpeg"
import app from "../outimages/app.jpg"
import aut from "../outimages/aut.jpg"
import cloud from "../outimages/cloud.jpg"
import dev from "../outimages/dev.jpg"
import modern from "../outimages/modern.jpg"

function It() {
    return (
        <>

            <div className="it_main">
                <div className="it_content">
                    <div className="service_cards" data-aos="fade-right">
                        <Card style={{ width: '18rem', borderRadius: "10px" }}>
                            <Card.Img variant="top" src={ai} style={{ height: "200px", width: "100%" }} />
                            <Card.Body style={{ backgroundColor: "#23506D", color: "white", borderRadius: "0 0 10px 10px" }}>
                                <Card.Title style={{ color: "#E3651D" }}>ARTIFICIAL INTELLIGENCE</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button className='boot_butt' style={{ backgroundColor: "#E3651D" }}>More</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', borderRadius: "10px" }}>
                            <Card.Img variant="top" src={app} style={{ height: "200px", width: "100%" }} />
                            <Card.Body style={{ backgroundColor: "#23506D", color: "white", borderRadius: "0 0 10px 10px" }}>
                                <Card.Title style={{ color: "#E3651D" }}>APPLICATION ENGINEERING</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button className='boot_butt' style={{ backgroundColor: "#E3651D" }}>More</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="service_cards" data-aos="fade-left">
                        <Card style={{ width: '18rem', borderRadius: "10px" }}>
                            <Card.Img variant="top" src={aut} style={{ height: "200px", width: "100%" }} />
                            <Card.Body style={{ backgroundColor: "#23506D", color: "white", borderRadius: "0 0 10px 10px" }}>
                                <Card.Title style={{ color: "#E3651D" }}>INTELLIGENT AUTOMATION</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button className='boot_butt' style={{ backgroundColor: "#E3651D" }}>More</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', borderRadius: "10px" }}>
                            <Card.Img variant="top" src={cloud} style={{ height: "200px", width: "100%" }} />
                            <Card.Body style={{ backgroundColor: "#23506D", color: "white", borderRadius: "0 0 10px 10px" }}>
                                <Card.Title style={{ color: "#E3651D" }}>CLOUD STRATEGY</Card.Title>
                                <Card.Text style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button className='boot_butt' style={{ backgroundColor: "#E3651D" }}>More</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="service_cards" data-aos="fade-left">
                        <Card style={{ width: '18rem', borderRadius: "10px" }}>
                            <Card.Img variant="top" src={modern} style={{ height: "200px", width: "100%" }} />
                            <Card.Body style={{ backgroundColor: "#23506D", color: "white", borderRadius: "0 0 10px 10px" }}>
                                <Card.Title style={{ color: "#E3651D" }}>LEGACY MODERNIZATION</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button className='boot_butt' style={{ backgroundColor: "#E3651D" }}>More</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', borderRadius: "10px" }}>
                            <Card.Img variant="top" src={dev} style={{ height: "200px", width: "100%" }} />
                            <Card.Body style={{ backgroundColor: "#23506D", color: "white", borderRadius: "0 0 10px 10px" }}>
                                <Card.Title style={{ color: "#E3651D" }}>DEVOPS</Card.Title>
                                <Card.Text style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button className='boot_butt' style={{ backgroundColor: "#E3651D" }}>More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default It
