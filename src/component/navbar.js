import {Container, Nav, Navbar, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import LogoFive from "../immagini/logo_solo_bianco.png";

function Mynavbar(){
    return (
        <>
<Navbar bg="dark" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand href="#home" style={{ color: 'white' }}>
<img className="logoRotate" src={LogoFive} style={{width: "50px", marginRight: "15px"}}></img>
FIVE PROJECT
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto"  className="ms-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <Nav.Link className="linkNav" href="#link" >Link</Nav.Link>
        <Nav.Link className="linkNav" href="#link" >Link</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

</>
    )
}

export default Mynavbar;