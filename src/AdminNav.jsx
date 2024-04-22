import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, Outlet} from 'react-router-dom';

import React from 'react'

function AdminNav() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>
              <Link to='/' className='text-decoration-none text-reset'>
              Deck.
              </Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to='/Technology' className='text-decoration-none text-reset'>TECHNOLOGY</Link>
                  </Nav.Link>
                  <Nav.Link>
                <Link to='/Ideas' className='text-decoration-none text-reset'>IDEAS</Link>
                  </Nav.Link>
                  <Nav.Link>
                  <Link to='/leadership' className='text-decoration-none text-reset'>LEADERSHIP</Link>
                  </Nav.Link>
                <Nav.Link href="#video" >VIDEO</Nav.Link>
                <Nav.Link href="#news" >NEWS</Nav.Link>
                <Nav.Link href="#finance">FINANCE</Nav.Link>
                <Nav.Link href="#entertaiment">ENTERTAIMENT</Nav.Link>
                {/* <Nav.Link>
                <Link to='' className='text-decoration-none text-reset mx-auto'>LOGIN</Link>
                  </Nav.Link> */}
              </Nav>
              <Nav>
                <Nav.Link className="ms-auto"> {/* ms-auto for right alignment */}
                <Link to='/' className='text-decoration-none text-reset'>USERS</Link>
                </Nav.Link>
              </Nav>
              
  
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  )
}

export default AdminNav