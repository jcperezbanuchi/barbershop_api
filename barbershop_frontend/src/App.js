import React, { Component } from 'react'
import { Nav, Navbar, NavLink } from 'reactstrap'
import AppointmentContainer from './components/AppointmentContainer'


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <NavLink href="#home">Home</NavLink>
      <NavLink href="#features">Features</NavLink>
      <NavLink href="#pricing">Pricing</NavLink>
    </Nav>
    
  </Navbar>
        <AppointmentContainer />
      </div>
    )
  }
}
