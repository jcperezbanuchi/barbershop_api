import React, { Component } from 'react'
import Appointments from './components/Appointments'
const appointmentsItems = [
  {
    "id": 1,
    "firstname": "Juan",
    "lastname": "Perez",
    "barber": "Cano",
    "phone": "88888888",
    "email": "papa@gmail.com",
    "contact": "phone",
    "date": "2021-07-08",
    "time": "11:00am",
    "comment": "fade out"
  }
]

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = { 
      appointmentList : appointmentsItems,
      
    }
  }
  render() {
    return (
      <div>
        <Appointments />
      </div>
    )
  }
}
