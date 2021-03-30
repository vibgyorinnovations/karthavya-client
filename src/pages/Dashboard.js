import React from 'react'
import '../css/dashboard/Dashboard.css'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import PageNotFound from './PageNotFound'
import NavBar from '../components/dashboardComponents/NavBar'
import DashboardHome from './dashboardPages/DashboardHome'
import DashboardEditProfile from './dashboardPages/DashboardEditProfile'
import ScrollToTop from '../utils/ScrollToTOp'
import { DashboardConsumer, DashboardProvider } from '../context/dashboardContext/DashboardContext'

class Dashboard extends React.Component {
    render () {
        return (
            <DashboardProvider>
                <RenderDashboard />
            </DashboardProvider>
        )
    }
}

class RenderDashboard extends React.Component {
    render () {
        return (
            <DashboardConsumer>
                {
                    props => {
                        if (props.accountId == null || props.accountId === '') {
                            return <Redirect to='/login' />
                        } else {
                            return (
                                <div className="Dashboard">
                                    <Router className="router">
                                        <ScrollToTop />
                                        <NavBar className="navbar" />
                                        <Switch>
                                            <Route exact path="/dashboard/" component={ DashboardHome } /> } />
                                            <Route path="/dashboard/edit-profile" component={ DashboardEditProfile } />
                                            <Route component={ PageNotFound } />
                                        </Switch>
                                    </Router>
                                </div>
                            )
                        }
                    }
                }
            </DashboardConsumer>
        )
    }
}

export default Dashboard