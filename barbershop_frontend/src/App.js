import React, { Component } from 'react'
import AppointmentContainer from './components/AppointmentContainer'
import './App.css'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import MainNavigation from './pages/Navigation/MainNavigation'

import Home from './components/Home'
import OurServices from './components/OurServices'
import Team from './components/Team'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
      <MainNavigation/>
      <main className="main-content">
        <Switch>
          <Redirect from='/' to= '/home' exact/>
          <Route path="/home" component={Home}/>
          <Route path='/appointment' component={AppointmentContainer}/>
          <Route path='/ourservices' component={OurServices}/>
          <Route path='/team' component={Team}/>

      
        </Switch>
        </main>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}
