import React, { Component } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from './Pages/About'
import Home from './Pages/Home'
import Works from './Pages/Works';
import Todo from './TodoApp/Todo'
import Calculator from './CalculatorApp/Calculator'
import Weather from './WeatherApp/Weather';



export default class NavbarComp extends Component {
  render() {
    return (
        <Router>
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to={"/Home"}>Eemeli Kyrölä</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/Home"}>Home</Nav.Link>
                            <Nav.Link  as={Link} to={"/About"}>About</Nav.Link>
                                <NavDropdown as={Link} to={"/Works"} title="Works" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to={"/Todo"}>TodoApp</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/Calculator"}>Calculator</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/Weather"}>Weather</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Switch>
                    <Route path="/Home">
                        <Home />
                    </Route>
                    <Route path="/About">
                        <About />
                    </Route>
                    <Route path="/Works">
                        <Works />
                    </Route>
                    <Route path="/Todo">
                        <Todo />
                    </Route>
                    <Route path="/Calculator">
                        <Calculator />
                    </Route>
                    <Route path="/Weather">
                        <Weather />
                    </Route>
                </Switch>
            </div>
      </Router>
    )
  }
}
