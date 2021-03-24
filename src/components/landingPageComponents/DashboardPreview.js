import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/landingPage/DashboardPreview.css';

class DashboardPreview extends React.Component {
    render() {
        return (
            <div className="DashboardPreview">
                <div className="project-name"><b>KARTHAVYA</b> Realtime Dashboard</div>
                <div className="preview-button">
                    <Link to="/dashboard-demo">
                        <button>Preview</button>
                    </Link>
                </div>
                <div className="ordernow-button">
                    <a href="https://pages.razorpay.com/karthavya" target="new">
                        <button>Order Now</button>
                    </a>
                </div>
            </div>
        );
    }
}

export default DashboardPreview;