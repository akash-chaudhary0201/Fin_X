import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../images/logo-2.png"
import { NavLink } from 'react-router-dom';

function NavBar() {

    const customNavbarStyle = {
        backgroundColor: '#23506D '
    };

    return (
        <Navbar expand="lg" style={customNavbarStyle} fixed="top">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img
                        src={Logo} // Replace 'logo' with your image variable or path
                        alt="Logo"
                        height="30"
                    ></img>
                </Navbar.Brand>
                <Navbar.Toggle style={{ outline: "white" }} />
                <Navbar.Collapse >
                    <Nav
                        className="mx-auto my-2 my-lg-0 fs-5 text-light"
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className='me-5 text-white'>
                            <NavLink className="linkk" to="/">
                                Home
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link href="#action1" className='me-5 text-white'>
                            <NavLink className="linkk" to="/services">
                                Services
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link href="#action1" className='me-5 text-white'>
                            <NavLink className="linkk" to="/join-us">
                                Join Us
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link href="#action1" className='me-5 text-white'>
                            <NavLink className="linkk" to="/contact-us">
                                Contact Us
                            </NavLink>
                        </Nav.Link>

                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;