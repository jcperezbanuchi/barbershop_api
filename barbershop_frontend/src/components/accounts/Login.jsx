import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';

const baseURL = 'http://localhost:8001/login'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            isAuthenticated: false,
      };
    }
    onSubmit = (e) => {
        e.preventDefault()
        fetch(`${baseURL}`, {
            method: 'POST',
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                isAuthenticated: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(resJson => {
                this.setState({
                    username: resJson.username,
                    password: resJson.password

                })
            })
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });  

    render() {
        
        if (this.state.isAuthenticated) {
            return <Redirect to="/" />;
          }
          const { username, password } = this.state;
          return (
            <div className="col-md-6 m-auto">
              <div className="card card-body mt-5">
                <h2 className="text-center">Login</h2>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      onChange={this.onChange}
                      value={username} id = "username"
                    />
                  </div>
      
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password" id="password"
                      onChange={this.onChange}
                      value={password}
                    />
                  </div>
      
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                  <p>
                    Don't have an account? <Link to="/register">Register</Link>
                  </p>
                </form>
              </div>
            </div>
      
        )
    }
}
