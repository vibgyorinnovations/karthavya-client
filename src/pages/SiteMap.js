import React from 'react';
import '../css/siteMap/SiteMap.css';

class SiteMap extends React.Component {
    render() {
        return (
            <div className="SiteMap">
                <div className="title">
                    Site Map
                </div>
                <div className="content">
                    <h2>KARTHAVYA SITE:</h2><br/>
                    Karthavya Website: <a href="https://karthavya-client.web.app">Click Here</a><br/>
                    Karthavya Realtime Dashboard Demo: <a href="https://karthavya-client.web.app/dashboard-demo">Click
                    Here</a><br/><br/>
                    <h2>VIBGYOR SITE:</h2><br/>
                    Vibgyor Website: <a href="https://www.letsvibgyor.com/" target="new">Click Here</a><br/>
                    FAQ: <a href="https://www.letsvibgyor.com/faq" target="new">Click Here</a><br/>
                    About Us: <a href="https://www.letsvibgyor.com/about-us" target="new">Click Here</a><br/>
                    Business: <a href="https://www.letsvibgyor.com/business" target="new">Click Here</a><br/>
                    Service: <a href="https://www.letsvibgyor.com/service" target="new">Click Here</a><br/>
                    Vibgyor Family: <a href="https://www.letsvibgyor.com/vibgyor-family" target="new">Click
                    Here</a><br/>
                </div>
            </div>
        );
    }
}

export default SiteMap;