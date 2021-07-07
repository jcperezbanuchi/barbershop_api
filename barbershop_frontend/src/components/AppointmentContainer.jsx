import React, { Component } from 'react'
import NewAppointment from './NewAppointment'

const baseURL = 'http://localhost:8001/api/appointments/'

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
        fetch(baseURL,
            {method: 'GET'})
        .then(data => { return data.json()}, err => console.log(err))
            .then(parsedData => this.setState({appointment: parsedData.data}), err => console.log(err))
    }
    render() {
        return (
            <div>
                <NewAppointment />
                
            </div>
        )
    }
}
