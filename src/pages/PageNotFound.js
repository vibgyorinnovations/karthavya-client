import React from 'react';
import {Helmet} from "react-helmet";

class PageNotFound extends React.Component{
    getURL() {
        return window.location.href;
    }
    render() {
        return (
            <div className="PageNotFound">
                <Helmet>
                    <title>
                        Page Not Found | KARTHAVYA
                    </title>
                </Helmet>
                <h1>404... Page Not Found...</h1>
                <p>Unable to find the url: "<code>{this.getURL()}</code>";</p>
            </div>
        );
    }
}

export default PageNotFound;