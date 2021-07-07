import React, { Component } from 'react'

const baseURL = 'http://localhost:8001/api/appointment/'

export default class NewAppointment extends Component {
    constructor(props){
        super(props)
        this.state ={
            firstname: '',
            lastname: '',
            barber: '',
            phone: '',
            email: '',
            contact: '',
            date: '',
            time: '',
            comment: ''
        }
    }
    handleChange(event) {
        this.setState({ [event.currentTarget.id]: event.currentTarget.value})
    }
    
    handleSubmit(event) {
        event.preventDefault()
        fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                barber: this.state.barber,
                phone: this.state.phone,
                email: this.state.email,
                contact: this.state.contact,
                date: this.state.date,
                time: this.state.time,
                comment: this.state.comment
            }),
            headers: {'Content-Type': 'application/json'}
        }).then(res => res.json())
        .then(resJson => {
            this.props.handleAddAppointment(resJson.data)
            this.setState({
                firstname: '',
                lastname: '',
                barber: '',
                phone: '',
                email: '',
                contact: '',
                date: '',
                time: '',
                comment: ''
            })
        })
        .catch(error => console.log({ 'Error': error }))
    }

    render() {
        return (
            <div>
                <h1>Add an appointment</h1>
                <form onSubmit={ (event) => this.handleSubmit(event) }>
                <label htmlFor="firstname"></label>
                <input type="text" id="firstname" name="firstname" onChange={ (event) => this.handleChange(event) } value={ this.state.name} placeholder="First name" />
                <label htmlFor="lastname"></label>
                <input type="text" id="lastname" name="lastname" onChange={ (event) => this.handleChange(event) } value={ this.state.name} placeholder="Last name" />

                <label htmlFor="barber"></label>
                <input type="text" id="barber" name="barber" onChange={ (event) => this.handleChange(event) } value={ this.state.barber} placeholder="Barber" />
                
                <label htmlFor="phone"></label>
                <input type="number" id="phone" name="phone" onChange={ (event) => this.handleChange(event) } value={ this.state.phone} placeholder="Phone Number" />

                <label htmlFor="contact"></label>
                <input type="text" id="contact" name="contact" onChange={ (event) => this.handleChange(event) } value={ this.state.contact} placeholder="Email or Phone" />

                <label htmlFor="date"></label>
                <input type="date" id="date" name="date" onChange={ (event) => this.handleChange(event) } value={ this.state.date} placeholder="Date" />

                <label htmlFor="time"></label>
                <select id="time" name="time" value = {this.state.time} onChange={ (event) => this.handleChange(event) }>
                    <option >7am-8am</option>
                    <option value="8am-9am">8am-9am</option>
                    <option value="9am-10am">9am-10am</option>
                    <option value="11am-12pm">11am-12pm</option>
                    <option value="12pm-1pm">12pm-1pm</option>
                    <option value="2pm-3pm">2pm-3pm</option>
                    <option value="3pm-4pm">3pm-4pm</option>
                    <option selected="selected" value="4pm-5pm">4pm-5pm</option>
                    <option value="5pm-6pm">5pm-6pm</option>
                    <option value="6pm-7pm">6pm-7pm</option>
              <     option value="7pm-8pm">7pm-8pm</option>
            </select>

                <label htmlFor="comment"></label>
                <input type="text" id="comment" name="comment" onChange={ (event) => this.handleChange(event) } value={ this.state.comment} placeholder="Any Comments" />

                <input type="submit" value="Add Appointment" />
            </form>
            </div>
        )
    }
}
