import React, { Component } from 'react'
import NewAppointment from './NewAppointment'

const baseURL = 'http://localhost:8001/api/appointments/'

export default class AppointmentContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            appointments: [],
            updateAppointment: {}
        }
    }
    componentDidMount = () => {
        this.getAppointments()
    }

    handleAddDog(appointment) {
        const copyAppointments = [...this.state.appointments]
        copyDogs.unshift(appointment)
        this.setState({
            dogs: copyDogs
        })
    }

    getAppointments() {
        fetch(baseURL,
            {method: 'GET'})
        .then(data => { return data.json()}, err => console.log(err))
            .then(parsedData => this.setState({appointment: parsedData.data}), err => console.log(err))
    }
    render() {
        return (
            <div>
                <NewAppointment />
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
                    {this.state.appointments.map(
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
