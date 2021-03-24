import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './css/App.css'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import DashboardDemo from './pages/DashboardDemo'
import PageNotFound from './pages/PageNotFound'
import Product from './pages/Product'
import CustomerDetail from './pages/CustomerDetail'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import Thankyou from './pages/Thankyou'
import SiteMap from './pages/SiteMap'
import ScrollToTop from './utils/ScrollToTOp'
import ViewProduct from './pages/ViewProduct'

class App extends Component {
    render () {
        return (
            <Router>
                <ScrollToTop />
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/dashboard-demo/" component={ DashboardDemo } />
                    <Route path="/view-product-model" component={ ViewProduct } />
                    <Route path="/product/" component={ Product } />
                    <Route path="/customer-detail/" component={ CustomerDetail } />
                    <Route path="/privacy-policy/" component={ PrivacyPolicy } />
                    <Route path="/terms-and-conditions/" component={ TermsAndConditions } />
                    <Route path="/site-map/" component={ SiteMap } />
                    <Route path="/thankyou/" component={ Thankyou } />
                    <Route path="/login" component={ Login } />
                    <Route path="/signup" component={ Signup } />
                    <Route exact path="/dashboard/" component={ Dashboard } />
                    <Route component={ PageNotFound } />
                </Switch>
            </Router>
        )
    }
}

export default App
