import React, {Component} from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import NameComponent from './components/NameComponent';
import {Navbar, Nav, Container, Row, Col, NavDropdown, InputGroup, Form, FormControl} from 'react-bootstrap'

class App extends Component {

componentDidMount() {
	console.log('mounted')
}

  render() {

	  var word = 'Hello';
	  var style = {fontSize:'20px'};

	  const array = ['welcome','to','my','course'];

    return (
      <div>
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="https://www.linkedin.com/in/dorsonwilliams">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    <br />
  <Navbar bg="dark" pullRight>
    <Navbar.Brand href="#home">
      <img
        src="https://madewithreactjs.com/mandant/madewithreactjs/images/logo.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    </Navbar>
  <br />
        <p style={style} className="text-large">Hi</p>

        {array.map(word => {
          return (
            <p key={word}>{word}</p>
          )
        })}

        <NameComponent />
        <Button variant="dark" onClick={() => {console.log('clicked')}}>
          "doug"
        </Button>
        <Navbar bg="light">
  <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
<Container>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>
      </div>
    );
  }
}

export default App;