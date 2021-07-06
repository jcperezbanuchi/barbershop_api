import React, { Component } from 'react'

const baseURL = 'http://localhost:8001/api/appointment/'

export default class Appointments extends Component {
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
            this.props.handleAddDog(resJson.data)
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
                <input type="time" id="time" name="time" onChange={ (event) => this.handleChange(event) } value={ this.state.time} placeholder="Time" />

                <label htmlFor="comment"></label>
                <input type="text" id="comment" name="comment" onChange={ (event) => this.handleChange(event) } value={ this.state.comment} placeholder="Any Comments" />

                <input type="submit" value="Add a Appointment" />
            </form>
            </div>
        )
    }
}
