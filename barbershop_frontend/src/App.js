import React, { Component } from 'react'
import { Nav, Navbar , Button } from 'reactstrap'
import AppointmentContainer from './components/AppointmentContainer'


export default class App extends Component {
  render() {
    return (
      <div>
        <h1>welcome to the Real barbershop</h1>
        <Navbar class="navbar navbar-expand-lg navbar-dark bg-dark border">
        <Button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        Home
    </Button>
    <a class="navbar-brand" href="/"><span>Cano's Barbershop</span></a>
    
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
       <ul class="navbar-nav ml-auto mt-2 mt-lg-0">

                 <li class="nav-link text-light" id="welcome"></li>
                 <li class="nav-item" id="team"><a href="#ourTeam" class="nav-link">Team</a></li>
                 <li class="nav-item" id="our-services"><a href="#ourServices" class="nav-link">Our Services</a></li>
                 <li class="nav-item" id="home-page"><a class="nav-link">Home</a></li>
             </ul>
         </div>

     </Navbar>
        <AppointmentContainer />
      
      </div>
    )
  }
}
