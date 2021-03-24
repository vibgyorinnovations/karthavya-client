import React from 'react'
import { Helmet } from 'react-helmet'
import TextField from '../components/signUpComponents/TextField'
import '../css/signUp/SignUp.css'
import MobileField from '../components/signUpComponents/MobileField'
import PasswordField from '../components/signUpComponents/PasswordField'
import VibgyorLogoWhite from '../assets/VibgyorLogoWhite.png'
import SignupImg from '../assets/SignupImg.png'
import { ReactComponent as VibgyorLogoBlack } from '../assets/VibgyorLogo.svg'

class Signup extends React.Component {

    constructor (props) {
        super(props)
        let queryString = window.location.search
        let urlParams = new URLSearchParams(queryString)
        this.email = urlParams.get('email').trim()
        this.state = {
            email: this.email,
            password: '',
            name: '',
            contact: '',
            accountId: '',
            deviceCount: ''
        }
    }


    render () {
        return (
            <div className="SignUp">
                <Helmet>
                    <title>
                        Signup | KARTHAVYA
                    </title>
                </Helmet>
                <div className="mobile-logo">
                    <VibgyorLogoBlack />
                </div>
                <div className="title">
                    Create Account
                </div>
                <div className="script">
                    Create a great platform for managing cases & clients
                </div>
                <div className="FullName">
                    <TextField value={''} classname1={ 'full-name' } placeholder={ 'Full Name*' } />
                </div>
                <div className="OrganizationName">
                    <TextField value={''} classname1={ 'organization-name' } placeholder={ 'Organization Name*' } />
                </div>
                <div className="EmailAddress">
                    <TextField value={this.state.email} classname1={ 'email-address' } placeholder={ 'Email Address*' } />
                </div>
                <div className="MobileNumber">
                    <MobileField placeholder={ 'Mobile Number*' } />
                </div>
                <div className="Password">
                    <PasswordField placeholder={ 'Password*' } />
                </div>
                <div className="button">
                    <button>SIGN UP</button>
                </div>
                <div className="desktop-logo">
                    <img src={ VibgyorLogoWhite } alt="Vibgyor Logo" />
                </div>
                <div className="desktop-image">
                    <img src={ SignupImg } alt="Signup" />
                </div>
                <div className="login-text">
                    Already a Member?
                    <a href={'/login?email=' + this.state.email}>Login</a>
                </div>
                <div className="top-block"></div>
                <div className="bottom-block"></div>
            </div>
        )
    }
}

export default Signup