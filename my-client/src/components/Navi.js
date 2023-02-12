import React from 'react'
import logo from '../images/logo.jpg';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navi() {
  return (
    <div>
       <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="28"
              className="d-inline-block align-top"
            />{' '}
            <b>Media Library </b>
            
           </Navbar.Brand>
         </Container>
        {/* <Nav className="justify-content-end" activeKey="/">
         Please Ignore
        <Nav.Item> 
          <Nav.Link href="/Add"><div style={{color:"white"}}>Add</div></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Back</Nav.Link>
        </Nav.Item>  
        </Nav>  */}
      </Navbar>
    </div>
  )
}

export default Navi;