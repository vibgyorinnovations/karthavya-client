import React from 'react';
import "../css/thankyou/Thankyou.css"
import Image from "../assets/Thankyou.jpg";
class Thankyou extends React.Component{
    render(){
        return(
            <div className="thankyou">
                <center>
                    <p>Thank you for Ordering!</p>
                    <div className="image"> <img src={Image} alt="Thank You"/></div>
                </center>
            </div>
        );
    }
}
export default Thankyou;