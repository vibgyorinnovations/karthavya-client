import React from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as VibgyorLogo } from "../../assets/VibgyorLogo.svg";
import '../../css/landingPage/LandingPage1.css';

class Page1 extends React.Component {
    render() {
        return (
            <div className="page-1">
                <div className="logo-bar">
                    <div className="logo">
                        <a href="https://www.letsvibgyor.com" target="new">
                            <VibgyorLogo/>
                        </a>
                    </div>
                    <div className="buttons">
                        <div className="logo-bar-sign-up">
                            <Link to="/signup">
                                <button>Sign Up</button>
                            </Link>
                        </div>
                        <div className="logo-bar-login">
                            <Link to="/login">
                                <button>Login</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mid-container">
                    <div className="text-1"><img src={ this.props.projectNameLine1 } alt="Karthavya Logo"/></div>
                    <div className="text-2">{ this.props.projectNameLine2 }</div>
                    <div className="description">{ this.props.projectDescription }</div>
                    <div className="order-button">
                        <a href="https://pages.razorpay.com/karthavya" target="new">
                            <button>Order Now</button>
                        </a>
                    </div>
                    <div className="image">
                        { this.props.productImage1 }
                    </div>
                    <div className="image-mobile">
                        { this.props.productImage2 }
                    </div>
                </div>
            </div> );
    }
}

export default Page1;