import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import third from "../outimages/third.jpg"
import rep from "../outimages/rep.jpg"
import lap from "../outimages/lap.jpg"
import core from "../outimages/core.jpg"

function Finance() {
    return (
        <>
            <div className="finance_main">
                <div className="finance_content">
                    <div className="service_cards" data-aos="fade-right">
                        <Card style={{ width: '18rem', borderRadius: "10px" }}>
                            <Card.Img variant="top" src={lap} style={{ height: "200px", width: "100%" }} />
                            <Card.Body style={{ backgroundColor: "#23506D", color: "white", borderRadius: "0 0 10px 10px" }}>
                                <Card.Title style={{ color: "#E3651D" }}>CORE BATCH PROCESSING</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button className='boot_butt' style={{ backgroundColor: "#E3651D" }}>More</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', borderRadius: "10px" }}>
                            <Card.Img variant="top" src={rep} style={{ height: "200px", width: "100%" }} />
                            <Card.Body style={{ backgroundColor: "#23506D", color: "white", borderRadius: "0 0 10px 10px" }}>
                                <Card.Title style={{ color: "#E3651D" }}>CUSTOM REPORTS</Card.Title>
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
                            <Card.Img variant="top" src={third} style={{ height: "200px", width: "100%" }} />
                            <Card.Body style={{ backgroundColor: "#23506D", color: "white", borderRadius: "0 0 10px 10px" }}>
                                <Card.Title style={{ color: "#E3651D" }}>THIRD-PARTY INTEGRATIONS</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button className='boot_butt' style={{ backgroundColor: "#E3651D" }}>More</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', borderRadius: "10px" }}>
                            <Card.Img variant="top" src={core} style={{ height: "200px", width: "100%" }} />
                            <Card.Body style={{ backgroundColor: "#23506D", color: "white", borderRadius: "0 0 10px 10px" }}>
                                <Card.Title style={{ color: "#E3651D" }}>CORE BANKING MODERNIZATION</Card.Title>
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

export default Finance
