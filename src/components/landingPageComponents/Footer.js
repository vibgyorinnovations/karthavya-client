import React from 'react'
import '../../css/landingPage/Footer.css'
import NotAnEmailAddressError from './NotAnEmailAddressError'

class Footer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            emailError: 'inactive'
        }
        this.handleSignUpClick = this.handleSignUpClick.bind(this)
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleDismissAlert = this.handleDismissAlert.bind(this)
    }

    async handleSignUpClick (event) {
        this.setState({
            emailError: 'inactive'
        })
        let mail = document.querySelector('.LandingPage .Footer .email input')
        if (this.ValidateEmail(mail)) {
            window.location.href = '/signup?email=' + mail.value
        } else {
            this.setState({ emailError: 'active' })
        }
    }

    async handleLoginClick (event) {
        this.setState({
            emailError: 'inactive'
        })
        let mail = document.querySelector('.LandingPage .Footer .email input')
        if (this.ValidateEmail(mail)) {
            window.location.href = '/login?email=' + mail.value
        } else {
            this.setState({ emailError: 'active' })
        }
    }

    handleDismissAlert () {
        this.setState({
            emailError: "inactive"
        })
    }

    ValidateEmail (inputText) {
        let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (inputText.value.match(mailformat)) {
            return true
        } else {
            return false
        }
    }

    render () {
        return (
            <div className="Footer">
                <div className="line-1">Get access before<br />everyone else.</div>
                <div className="email">
                    <input type="email" name="email" placeholder="Enter your mail address" autoComplete="off"
                           required />
                    <NotAnEmailAddressError className1={ this.state.emailError }>
                        Invalid Email Address!!
                        <div className="dismiss-alert" onClick={ this.handleDismissAlert }>X</div>
                    </NotAnEmailAddressError>
                </div>
                <div className="line-2">
                    We’re onboarding new customers one at a time to ensure every user has the best possible experience.
                </div>
                <div className="footer-buttons">
                    <button className="footer-sign-up" onClick={ this.handleSignUpClick }>Sign up</button>
                    <button className="footer-login" onClick={ this.handleLoginClick }>Login</button>
                </div>
                <div className="footer">
                    <div className="copyrights">&copy; 2020 VIBGYOR</div>
                    <div className="pages">
                        <div className="page privacy-policy">
                            <a href="/privacy-policy">Privacy Policy</a>
                        </div>
                        <div className="page terms-and-conditions">
                            <a href="/terms-and-conditions">Terms and Conditions</a>
                        </div>
                        <div className="page site-map">
                            <a href="/site-map">Site Map</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer