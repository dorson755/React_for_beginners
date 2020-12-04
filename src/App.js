import React, {Component} from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import NameComponent from './components/NameComponent';
import {Navbar, Table, Nav, Container, Row, Col, NavDropdown, InputGroup, Form, FormControl} from 'react-bootstrap';
import Select from 'react-select';
import { colourOptions, groupedOptions } from './data';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
      jsonList: [],
    };
  }

  componentDidMount() {
    console.log('mounted')
    fetch('http://www.json-generator.com/api/json/get/bVDxTQSDQO?indent=2', {
        method: 'GET'
      })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({
          jsonList: json
        });
      })
      .catch(error => console.log(error))
      
  };

  handleChange(selectedOption) {
    this.setState ({
      selectedOption : selectedOption ? selectedOption : ''
    });
  }

  render() {

	  var word = 'Hello';
	  var style = {fontSize:'20px'};

	  const array = ['welcome','to','my','course'];
    const selectList = this.state.jsonList.map (item => {
      return { value : item.name, label : item.name}
    });
    
    return (
      <div className="col-sm-9">
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
      <Navbar bg="dark">
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
      <Select
      value={this.state.selectedOption.value}
      formatGroupLabel={formatGroupLabel}
      //options={groupedOptions} 
      options={selectList}
      />
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
<hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {this.state.jsonList.map(item => {
            return (
          <tr>
            <td>{item.phone}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.address}</td>
          </tr>
            )}
          )}
        </tbody>
      </Table>

      </div>
    );
  }
}

export default App;