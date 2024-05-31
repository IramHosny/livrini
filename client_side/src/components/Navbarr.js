import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navbarr() {
  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiary" style={{width:'100%'}}>
      <Container>
      
        <Navbar.Brand href="#home"><Link style={{textDecoration:'none'}} to="/"> <img src='./logo.png'  alt="" style={{width: '300px', height: 'auto'}}/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ width: '100%', justifyContent: 'flex-end' }}>
            <Nav.Link href="#home"><Link style={{textDecoration:'none' , color:'black',fontStyle:'italic',fontFamily:'cursive',fontSize:'20px',fontWeight:'bold', paddingLeft: '40px',
  paddingRight:'40px'}} to="/"> Home </Link></Nav.Link>
            <Nav.Link href="#link"><Link style={{textDecoration:'none' , color:'#f15d00',fontStyle:'italic',fontFamily:'cursive',fontSize:'20px',fontWeight:'bold', paddingLeft: '15px',
  paddingRight:'15px'}} to="/about"> A propos de nous </Link> </Nav.Link>
            <Nav.Link href="#link"><Link style={{textDecoration:'none' , color:'black',fontStyle:'italic',fontFamily:'cursive',fontSize:'20px',fontWeight:'bold', paddingLeft: '20px',
  paddingRight:'20px'}} to="/restaurant"> Les restaurants </Link> </Nav.Link>
            <Nav.Link href="#link"><Link style={{textDecoration:'none' , color:'#f15d00',fontStyle:'italic',fontFamily:'cursive',fontSize:'20px',fontWeight:'bold', paddingLeft: '20px',
  paddingRight:'20px'}} to="/avis"> Avis </Link> </Nav.Link>
            <Nav.Link href="#link"><Link style={{textDecoration:'none' , color:'black',fontStyle:'italic',fontFamily:'cursive',fontSize:'20px',fontWeight:'bold', paddingLeft: '20px',
  paddingRight:'20px'}} to="/contact"> Contact </Link> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarr