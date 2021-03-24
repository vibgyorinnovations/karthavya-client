import React from "react";
import '../css/customerDetail/CustomerDetail.css';
import Image from '../assets/Customer.png';
class CustomerDetail extends React.Component
{
  render()
  {
    return(
      <div className="customer-details">
        <div className="text">
                   Customer Details
        </div>
      <div className="image"> <img src={Image} alt="Customer"/></div>
 
      <div className="form">
        <br></br>
        <form>
          Name : <input type="text"></input>
          <br></br><br></br>
          Email : <input type="email"></input>
          <br></br><br></br>
          Address : <textarea rols="5"></textarea>
          <br></br><br></br>
          <input type="submit" class="submit" value="Pay Now"></input>
        </form>
      </div>

      </div>
    
      
    )
  };
}

export default CustomerDetail;