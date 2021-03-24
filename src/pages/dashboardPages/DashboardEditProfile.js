import React from 'react';
import { Helmet } from "react-helmet";

class DashboardEditProfile extends React.Component{
    render() {
        return (
            <div>
                <Helmet>
                    <title>
                        Edit Profile | KARTHAVYA
                    </title>
                </Helmet>
                <h1>Edit Profile Page</h1>
            </div>
        );
    }
}

export default DashboardEditProfile;