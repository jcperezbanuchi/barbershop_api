import React, { Component } from 'react'
import AppointmentContainer from './components/AppointmentContainer'
import './App.css'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import MainNavigation from './pages/Navigation/MainNavigation'

import Home from './components/Home'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
      <MainNavigation/>
      <main className="main-content">
        <Switch>
          <Redirect from='/' to= '/home' exact/>
          <Redirect from='/appointment' to ='/' exact/>
          
          <Route path='/auth' component={Auth}/>
          <Route path="/home" component={Home}/>
          <Route path='/appointment' component={AppointmentContainer}/>
          <Route path='/ourServices ' component={null}/>
          <Route path='/team' component={null}/>

      
        </Switch>
        </main>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}
