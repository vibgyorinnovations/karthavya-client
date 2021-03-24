import React from 'react'
import { Helmet } from 'react-helmet'
import { Redirect } from 'react-router-dom'
import '../css/login/Login.css'
import MyLoginContext from '../loginContext/LoginContext'
import EmailOrPasswordInvalid from '../components/loginComponents/EmailOrPasswordInvalid'


class Login extends React.Component {
    static contextType = MyLoginContext

    constructor (props) {
        super(props)
        let queryString = window.location.search
        let urlParams = new URLSearchParams(queryString)
        this.email = urlParams.get('email')
        this.state = {
            email: this.email,
            password: '',
            emailError: "inactive"
        }
        this.handleDismissAlert = this.handleDismissAlert.bind(this)
    }

    handleChange = (event) => {
        this.setState({ [ event.target.name ]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // Validate the EmailId and Password
        if (this.state.email === 'test@test.com' && this.state.password === 'test') {
            this.contextState.setLogged("true")
        } else {
            this.setState({ emailError: 'active' })
        }
    }

    handleDismissAlert (event) {
        this.setState({
            emailError: "inactive"
        })
    }

    componentDidMount () {
        // Send API call to check if previous session is available
        // If Session is available, get the eamilId, accountId, userName from the session storage and redirect to dashboard
        // If Session is not available, then stay at login page
    }

    render () {
        this.contextState = this.context
        this.contextState.setEmail(this.state.email)
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
                        <input className="email" type="email" value={ this.contextState.email } name="email"
                               placeholder="Email Address" required
                               autoComplete="off"
                               onChange={ this.handleChange } />
                        <input className="password" type="password" name="password" placeholder="Password" required
                               autoComplete="false"
                               onChange={ this.handleChange } />
                        <input className="login-button" type="submit" value="Login"
                               onSubmit={ this.handleSubmit } />
                        <text>Already have an Account?<a href={ '/signup?email=' + this.state.email }>Signup</a></text>
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

        if (this.contextState.logged) {
            return login
        } else {
            return dashboard
        }
    }
}

export default Login