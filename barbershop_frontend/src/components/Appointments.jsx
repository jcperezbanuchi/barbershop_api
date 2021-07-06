import React, { Component } from 'react'

const baseURL = 'http://localhost:5000/api/appointment/'

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
                barber: this.state. barber,
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
                <input type="text" id="lastname" name="lastname" onChange={ (event) => this.handleChange(event) } value={ this.state.name} placeholder="First name" />

                <label htmlFor="age"></label>
                <input type="number" id="age" name="age" onChange={ (event) => this.handleChange(event) } value={ this.state.age} placeholder="Age (human years)" />
                
                <label htmlFor="owner"></label>
                <input type="text" id="owner" name="owner" onChange={ (event) => this.handleChange(event) } value={ this.state.owner} placeholder="Owner" />

                <label htmlFor="breed"></label>
                <input type="text" id="breed" name="breed" onChange={ (event) => this.handleChange(event) } value={ this.state.breed} placeholder="Breed" />

                <input type="submit" value="Add a Appointment" />
            </form>
            </div>
        )
    }
}
