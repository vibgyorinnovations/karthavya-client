import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/dashboard/NavBar.css'
import { ReactComponent as BurgerMenu } from '../../assets/BurgerMenu.svg'
import Karthavya from '../../assets/KarthavyaLogoWhite.png'
import { DashboardConsumer } from '../../context/dashboardContext/DashboardContext'

class NavBar extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            navbarStatus: 'inactive'
        }
        this.handleNavbarClick = this.handleNavbarClick.bind(this)
    }

    handleNavbarClick () {
        if (this.state.navbarStatus === 'inactive') {
            this.setState({
                navbarStatus: 'active'
            })
        }
        if (this.state.navbarStatus === 'active') {
            this.setState({
                navbarStatus: 'inactive'
            })
        }
        console.log(this.state.navbarStatus)
    }

    render () {
        return (
            <DashboardConsumer>
                {
                    props => {
                        return (
                            <nav className="NavBar">
                                <div className="NavBar-Desktop">
                                    <div className="logo"><img src={ Karthavya } alt="Karthavya Logo" /></div>
                                    <ul>
                                        <Link to="/dashboard/" className="link">
                                            <li>Home</li>
                                        </Link>
                                        <Link to="/dashboard/edit-profile" className="link">
                                            <li>Edit Profile</li>
                                        </Link>
                                    </ul>
                                    <div className="profile">
                                        <div className="name">
                                            { 'Logged in as ' + props.name }
                                        </div>

                                    </div>
                                    <div className="logout">
                                        <a href="/login">
                                            Logout
                                        </a>
                                    </div>
                                </div>
                                <nav className={ 'NavBar-Mobile ' + this.state.navbarStatus }>
                                    <div className="hamburger" onClick={ this.handleNavbarClick }>
                                        <BurgerMenu />
                                    </div>
                                    <div className="logo"><img src={ Karthavya } alt="Karthavya Logo" /></div>
                                    <ul className={ this.state.navbarStatus }>
                                        <Link to="/dashboard-demo/" className="link">
                                            <li>Home</li>
                                        </Link>
                                        <Link to="/dashboard-demo/" className="link">
                                            <li>Edit Profile</li>
                                        </Link>
                                    </ul>
                                    <div className={ 'profile ' + this.state.navbarStatus }>
                                        <div className="name">
                                            { 'Logged in as Demo User' }
                                        </div>

                                    </div>
                                    <div className={ 'logout ' + this.state.navbarStatus }>
                                        <a href="/">
                                            Logout
                                        </a>
                                    </div>
                                </nav>
                            </nav>
                        )
                    }
                }
            </DashboardConsumer>
        )
    }
}

export default NavBar