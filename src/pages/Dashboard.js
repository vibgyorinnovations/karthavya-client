import React from 'react';
import '../css/dashboard/Dashboard.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from "./PageNotFound";
import NavBar from "../components/dashboardComponents/NavBar";
import DashboardHome from "./dashboardPages/DashboardHome";
import DashboardEditProfile from "./dashboardPages/DashboardEditProfile";
import ScrollToTop from "../utils/ScrollToTOp";

class Dashboard extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            name: '',
            email: '',
            contact: '',
            accountId: '',
            deviceCount: '',
            devices: ''
        }
    }

    render() {
        return (
            <div className="Dashboard">
                <Router className="router">
                    <ScrollToTop />
                    <NavBar className="navbar"/>
                    <Switch>
                        <Route exact path="/dashboard/" component={ DashboardHome }/>
                        <Route path="/dashboard/edit-profile" component={ DashboardEditProfile }/>
                        <Route component={ PageNotFound }/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Dashboard;