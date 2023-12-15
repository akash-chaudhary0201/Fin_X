import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import third from "../outimages/third.jpg"
import rep from "../outimages/rep.jpg"
import lap from "../outimages/lap.jpg"
import core from "../outimages/core.jpg"
import { NavLink } from 'react-router-dom';

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
                                    Our experts specialize in designing, developing, and optimizing batch processes for banks using the Fiserv DNA core platform. We understand the critical role of batch processing for important functions like end-of-day processing, statement generation, and loan processing.
                                </Card.Text>
                                {/* <NavLink to="findet"> <Button className='boot_butt' style={{ backgroundColor: "#E3651D" }}>More</Button></NavLink> */}
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', borderRadius: "10px" }}>
                            <Card.Img variant="top" src={rep} style={{ height: "200px", width: "100%" }} />
                            <Card.Body style={{ backgroundColor: "#23506D", color: "white", borderRadius: "0 0 10px 10px" }}>
                                <Card.Title style={{ color: "#E3651D" }}>CUSTOM REPORTS</Card.Title>
                                <Card.Text>
                                    At our company, we specialize in providing customized reports for banks using the Core banking systems  & Fiserv DNA platform. Our team of experts has extensive experience in designing, developing, and delivering high-quality reports in various formats, including PDF, WMS, and forms.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="service_cards" data-aos="fade-right">
                        <Card style={{ width: '18rem', borderRadius: "10px" }}>
                            <Card.Img variant="top" src={third} style={{ height: "200px", width: "100%" }} />
                            <Card.Body style={{ backgroundColor: "#23506D", color: "white", borderRadius: "0 0 10px 10px" }}>
                                <Card.Title style={{ color: "#E3651D" }}>THIRD-PARTY INTEGRATIONS</Card.Title>
                                <Card.Text>
                                    At Finxsystems, we offer third-party integration services for banks using the Fiserv DNA core platform. Our experts can seamlessly integrate third-party applications, streamlining your workflows and increasing efficiency.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', borderRadius: "10px" }}>
                            <Card.Img variant="top" src={core} style={{ height: "200px", width: "100%" }} />
                            <Card.Body style={{ backgroundColor: "#23506D", color: "white", borderRadius: "0 0 10px 10px" }}>
                                <Card.Title style={{ color: "#E3651D" }}>CORE BANKING MODERNIZATION</Card.Title>
                                <Card.Text style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    At Finxsysystems, we understand the importance of having a modern and up-to-date banking system.We offer services to help financial institutions modernize their Core Banking applications.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Finance
