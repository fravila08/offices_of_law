import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';

function NavBar({user, setUser}) {

  function signOut(){
    event.preventDefault()
    axios.post('/sign_out').then((respone)=>{
      setUser(null)
      window.location.href=""
    })
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {user == null?
          <Nav className="me-auto"> 
            <Nav.Link href="/#/signin">Sign In</Nav.Link>
            <Nav.Link href="/#/signup">Sign Up</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Why Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          :
          <Nav className="me-auto"> 
            <Nav.Link href='#' onClick={signOut}>Log Out</Nav.Link>
            <Nav.Link href="/#/categories">Categories</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Why Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;