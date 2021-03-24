import React from 'react'
import { Helmet } from 'react-helmet'
import TextField from '../components/signUpComponents/TextField'
import '../css/signUp/SignUp.css'
import MobileField from '../components/signUpComponents/MobileField'
import PasswordField from '../components/signUpComponents/PasswordField'
import VibgyorLogoWhite from '../assets/VibgyorLogoWhite.png'
import SignupImg from '../assets/SignupImg.png'
import { ReactComponent as VibgyorLogoBlack } from '../assets/VibgyorLogo.svg'
import { SignUpProvider, SignUpConsumer } from '../context/signUpContext/SignUpContext'

class Signup extends React.Component {
    constructor (props) {
        super(props)
        let queryString = window.location.search
        let urlParams = new URLSearchParams(queryString)
        this.email = urlParams.get('email')
    }

    render () {
        return (
            <SignUpProvider>
                <SignUpConsumer>
                    { props => {
                        console.log(props)

                        if (this.email !== null && this.email !== '') {
                            props.setEmail(this.email)
                            this.email = null
                        }

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
                                    <TextField text={ props.name } update={ event => props.setName(event.target.value) }
                                               classname1={ 'full-name' }
                                               placeholder={ 'Full Name*' } />
                                </div>
                                <div className="OrganizationName">
                                    <TextField text={ props.orgName }
                                               update={ event => props.setOrgName(event.target.value) }
                                               classname1={ 'organization-name' }
                                               placeholder={ 'Organization Name*' } />
                                </div>
                                <div className="EmailAddress">
                                    <TextField text={ props.email }
                                               update={ event => props.setEmail(event.target.value) }
                                               classname1={ 'email-address' }
                                               placeholder={ 'Email Address*' } />
                                </div>
                                <div className="MobileNumber">
                                    <MobileField value={ props.contact } placeholder={ 'Mobile Number*' } />
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
                                    <a href={ ( props.email !== null && props.email !== '' ) ? ( '/login?email=' + props.email ) : ( '/login' ) }>Login</a>
                                </div>
                                <div className="top-block">

                                </div>
                                <div className="bottom-block">

                                </div>
                            </div>
                        )
                    } }
                </SignUpConsumer>
            </SignUpProvider>
        )
    }
}

export default Signup