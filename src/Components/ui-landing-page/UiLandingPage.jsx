import React from "react";
import "./ui-landing-page.scss";
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button,Card, Row ,Col,Container} from "react-bootstrap";

const UiLandingPage = () => {
  return (
    <div className="landing-page-intro">
      <div className="landing-left-intro">
        <h2> hello landing page </h2>
      </div>
         <Navbar bg="info" variant="dark" expand="sm">
        <Container className="mt-3" >
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <h2> cards </h2>
      <Container> 
        <Row >
          <Col xs="12"  >          
<Card className="hellothisisCard shadow-lg" >
 <Card.Body >
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, illum.</p>
<Button className= " button1 btn btn-primary m-2 p-2" variant="light">primary </Button>
<Button className="btn btn-success m-2" >Succuss </Button>
 </Card.Body>
  </Card>     
       </Col>
        </Row>
      </Container>
      <div className="landing-right-intro"></div>
    </div>
  );
};

export default UiLandingPage;
