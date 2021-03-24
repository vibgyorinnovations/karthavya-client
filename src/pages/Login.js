import React from 'react'
import { Helmet } from 'react-helmet'
import { Redirect } from 'react-router-dom'
import '../css/login/Login.css'
import EmailOrPasswordInvalid from '../components/loginComponents/EmailOrPasswordInvalid'

class Login extends React.Component {
    constructor (props) {
        super(props)
        let queryString = window.location.search
        let urlParams = new URLSearchParams(queryString)
        let email = urlParams.get('email')
        if (email == null || email === '') {
            email = ''
        }
        console.log(email)
        this.state = {
            logged: false,
            email: email,
            password: '',
            emailError: 'inactive'
        }
        this.handleDismissAlert = this.handleDismissAlert.bind(this)
    }

    handleDismissAlert () {
        this.setState({
            emailError: 'inactive'
        })
    }

    handleSubmit (event) {
        event.preventDefault()
        this.setState({
            emailError: 'inactive'
        })
        if(this.state.email === 'test@test.com' && this.state.password === 'test'){
            //
        }
        else{
            this.setState({
                emailError: 'active'
            })
        }
    }

    componentDidMount () {
        // Send API call to check if previous session is available
        // If Session is available, get the emailId, accountId, userName from the session storage and redirect to dashboard
        // If Session is not available, then stay at login page
    }

    render () {
        let login = (
            <div className="Login">
                <Helmet>
                    <title>
                        Login | KARTHAVYA
                    </title>
                </Helmet>
                <div className="greet-text">
                    Welcome Back
                </div>
                <div className="login-form">
                    <form onSubmit={ this.handleSubmit }>
                        <div className="title">
                            Login
                        </div>
                        <input className="email" type="email" value={ this.state.email }
                               name="email"
                               placeholder="Email Address" required
                               autoComplete="off"
                               onChange={ event => this.setState({ email: event.target.value }) } />
                        <input className="password" type="password" name="password"
                               placeholder="Password" required
                               autoComplete="false"
                               onChange={ event => this.setState({ password: event.target.value }) } />
                        <input className="login-button" type="submit" value="Login"
                               onSubmit={ this.handleSubmit } />
                        <text>Already have an Account?<a
                            href={ ( this.state.email !== '' && this.state.email !== null ) ? ( '/signup?email=' + this.state.email ) : ( '/signup' ) }>Signup</a>
                        </text>
                    </form>
                    <EmailOrPasswordInvalid className1={ this.state.emailError }>
                        Email Id or Password Incorrect !!
                        <div className="dismiss-alert" onClick={ this.handleDismissAlert }>X</div>
                    </EmailOrPasswordInvalid>
                </div>
            </div>
        )

        let dashboard = (
            <Redirect to={ { pathname: '/dashboard/' } } />
        )

        if (!this.state.logged) {
            return login
        } else {
            return dashboard
        }

    }
}

export default Login