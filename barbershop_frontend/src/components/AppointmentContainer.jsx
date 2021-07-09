import React, { Component } from 'react'
import NewAppointment from './NewAppointment'
import { Button } from 'reactstrap'
const baseURL  = 'http://localhost:8001/'

export default class AppointmentContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            appointmentList: [],
            modal: false,
            
        }
    }
    componentDidMount = () => {
        this.getAppointments()
    }
    toggle = () => {
        this.setState({ modal: !this.state.modal });
      };

    handleCloseModal () {
    	this.setState({ modal: this.state.modal });
  	}

    handleAddAppointment(appointment) {
        const copyAppointments = [...this.state.appointmentList]
        copyAppointments.unshift(appointment)
        this.setState({
            appointmentList: copyAppointments
        })
    }

    getAppointments() {
        fetch(baseURL + 'appointment')
        .then(data => { return data.json()}, err => console.log(err))
            .then(parsedData => {this.setState({appointmentList: parsedData.data})}, err => console.log(err))
            .catch((e)=>console.log(e.message))
    }
  
    render() {
        return (
            <div>
                <Button onClick= {(e) =>this.toggle(e)}>Make an Appointment</Button>{ this.state.modal ?
                <NewAppointment isOpen={true} toggle = {() => this.toggle} handleAddAppointment = {(appointment) => this.handleAddAppointment(appointment)} handleCloseModal ={(e)=> this.handleCloseModal}/>
                :
                ''
                }
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
                            (appointment) => {
                                return (
                                    <tr key = {appointment.id}>
                                        <td> {appointment.firstname} </td>
                                        <td> {appointment.lastname} </td>
                                        <td> {appointment.barber} </td>
                                        <td> {appointment.phone} </td>
                                        <td> {appointment.email} </td>
                                        <td> {appointment.contact} </td>
                                        <td> {appointment.date} </td>
                                        <td> {appointment.time} </td>
                                        <td> {appointment.comment} </td>
                                        <td onClick = { () => this.showUpdateForm(appointment)}> Update </td>
                                        <td><button onClick={() => this.deleteAppointment(appointment.id)}>X </button></td>
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
