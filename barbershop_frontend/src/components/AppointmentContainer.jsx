import React, { Component } from 'react'
import NewAppointment from './NewAppointment'

const baseURL  = 'http://localhost:8001/'

export default class AppointmentContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            appointmentList: [],
            updateAppointment: {}
        }
    }
    componentDidMount = () => {
        this.getAppointments()
    }

    handleAddAppointment(appointment) {
        const copyAppointments = [...this.state.appointmentList]
        copyAppointments.unshift(appointment)
        this.setState({
            appointments: copyAppointments
        })
    }

    getAppointments() {
        fetch(baseURL + 'appointment/')
        .then(data => { return data.json()}, err => console.log(err))
            .then(parsedData => {this.setState({appointmentList: parsedData})}, err => console.log(err))
            .catch((e)=>console.log(e.message))
    }

    render() {
        return (
            <div>
                <NewAppointment />
                <table>
                    <thead>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Barber</td>
                            <td>Phone</td>
                            <td>email</td>
                            <td>contact</td>
                            <td>date</td>
                            <td>time</td>
                            <td>comment</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.appointmentList.map(
                            appointment => {
                                return (
                                    <tr key = {appointment.id}>
                                        <td> {appointment.firstname} </td>
                                        <td> {appointment.lastname} </td>
                                        <td> {appointment.barber} </td>
                                        <td> {appointment.phone} </td>
                                        <td> {appointment.email} </td>
                                        <td> {appointment.date} </td>
                                        <td> {appointment.time} </td>
                                        <td> {appointment.comment} </td>
                                        <td onClick = { () => this.showUpdateForm(appointment)}> Update </td>
                                        <td><button onClick={() => this.deleteDog(appointment.id)}>X </button></td>
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
