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
    	this.setState({ modal: false });
  	}

    handleAddAppointment(appointment) {
        const copyAppointments = [...this.state.appointmentList]
        copyAppointments.unshift(appointment)
        this.setState({
            appointmentList: copyAppointments
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
                <h1>Welcome </h1>
                <Button onClick= {(e) =>this.toggle(e)}>Make an Appointment</Button>{ this.state.modal ?
                <NewAppointment toggle = {() => this.toggle} handleAddAppointment = {(appointment) => this.handleAddAppointment(appointment)} handleCloseModal ={(e)=> this.handleCloseModal}/>
                :
                this.state.modal
                }
            </div>
        )
    }
}
