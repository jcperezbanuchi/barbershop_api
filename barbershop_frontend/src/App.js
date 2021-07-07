import React, { Component } from 'react'
import AppointmentContainer from './components/AppointmentContainer'

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
   
        <AppointmentContainer />

        <table>
                    <thead>
                    <tr>
                        <td>First name </td>
                        <td>Last Name</td>
                        <td>Barber</td>
                        <td>Phone</td>
                        <td>Email</td>
                        <td>Contact</td>
                        <td>Date</td>
                        <td>Time</td>
                        <td>Comment</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.appointmentList.map(
                        (appointment) =>{
                            return (
                                <tr key= {appointment.id}>
                                    <td>{appointment.firstname}</td>
                                    <td>{appointment.lastname}</td>
                                    <td>{appointment.barber}</td>
                                    <td>{appointment.phone}</td>
                                    <td>{appointment.email}</td>
                                    <td>{appointment.contact}</td>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.time}</td>
                                    <td>{appointment.comment}</td>

                            </tr>
                        )
                    }
                )}
                    </tbody>
                </table>
      </div>
    )
  }
}
