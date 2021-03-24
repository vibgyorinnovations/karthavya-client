import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../css/product/Product.css';
import Image from '../assets/KarthavyaLogoBlack.png';
import one from '../assets/Layer.png'
import two from '../assets/Layer 1.png'
import three from '../assets/Layer 2.png'
import four from '../assets/Layer 3.png'
import five from '../assets/Layer 4.png'
import six from '../assets/Layer 5.png'
import seven from '../assets/layer 6.png'
import eight from '../assets/Layer 7.png'
class Product extends React.Component {
   
  
    render() {
        const accuratedata =[{"name":" A Robust image detection algorithm with python-based software is used to detect masks alongside screening the respective person’s body temperature accurately."}];
        const accurate= accuratedata.map((d) => <li key={d.name}>{d.name}</li>);
        const audiodata=[{"name": "Provided with an audible alarm/buzzer which helps you to mark the mask detection and temperature values."}];
        const audio=audiodata.map((d)=> <li key={d.name}>{d.name}</li>)
        const tempdata=[{"name":" Temperature measured at once at a distance of less than a meter with a sensing accuracy of +/-0.5 degree celsius."},{"name":"This Temperature Screening Technology can detect a high body temperature in about 2 to 3 seconds simultaneously providing businesses real-time information on who is entering their office, construction site, warehouse, etc."},{"name":"As we know, a normal Humanbody temp range is 37.0 to 38.1’ Celsius and a high body temperature is one of the main symptoms of COVID-19, to make your place more secure."}];
        const hightemp=tempdata.map((d)=><li key={d.name}>{d.name}</li>)
        const displaydata=[{"name":" The observed temperature values and masks status can be more authentic onto the LCD screen."}];
        const display=displaydata.map((d)=><li key={d.name}>{d.name}</li>)
        const contactlessdata=[{"name":"Contactless touch-free features to maximize profits and minimize your labor costs."},{"name":"IR thermal screening with germfree and infection free protocols."}];
        const contactless=contactlessdata.map((d)=><li key={d.name}>{d.name}</li>)
        const integratedata=[{"name":"Just Plugin and watch the device Play."},{"name":"Can also Integrate it with your existing time and attendance system."},{"name":"Add ons: hand sanitizer and mask dispenser(optional)."}];
        const integrate=integratedata.map((d)=><li key={d.name}>{d.name}</li>)
        const standbydata=[{"name":"Designed as a low power consumption device to help last longer."},{"name":"Senses people and then gets into action"}];
        const standby=standbydata.map((d)=><li key={d.name}>{d.name}</li>)
        const camdata=[{"name":"Designed with the Most prominent Sony IMX 219 8mp Camera for a better quality of image detection."}];
        const cam=camdata.map((d)=><li key={d.name}>{d.name}</li>)
        const wifidata=[{"name":"The device can effectively operate at 2.4 and 5 GHz Wifi network connection along with Bluetooth versions."},{"name":"rpi 4 - Quad core Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz"},{"name":" rpi 2 - A 900MHz quad-core ARM Cortex-A7 CPU"}];
        const wifi=wifidata.map((d)=><li key={d.name}>{d.name}</li>)
        const mulintegratedata=[{"name":"Different package options are available for Specific applications and measurement use cases."},{"name":"COVID KIT  Bundle can be Swapped and Integrated Seamlessly without any Hassle. (Optional*)"}];
        const mulintegrate=mulintegratedata.map((d)=><li key={d.name}>{d.name}</li>)
        return (
            <div>
                <img src={Image} alt="Logo/" className="Logo"></img>
                    <br></br>

                    <div className="carousel">
                        <center>
                    <Carousel autoPlay interval="1000" transitionTime="1000" width="400px" height="400px">
                        <div>
                            <img src={one} alt="One"/>
                        </div>
                        <div>
                            <img src={two} alt="Two"/>
                        </div>
                        <div>
                            <img src={three} alt="Three"/>
                        </div>
                        <div>
                            <img src={four} alt="Four"/>
                        </div>
                        <div>
                            <img src={five} alt="Five"/>
                        </div>
                        <div>
                            <img src={six} alt="Six"/>
                        </div>
                        <div>
                            <img src={seven} alt="Seven"/>
                        </div>
                        <div>
                            <img src={eight} alt="Eight"/>
                        </div>
                    </Carousel>
                    </center>
                    </div>

                    <div class="desc">
                        <center>

                    <div>
                        <p>
                        Implementing Prevention before Cause. We almost predicted the current situation and wanted to develop a monitored environment that ensures safety at all concerns. As a result, we introduce an Indoor use self-installation system ‘KARTHAVYA’ - a contactless, self-screening device with an audible alarm and power-saving mode.
                        </p>
                    </div>

                    <div>
                        <h1>Price</h1>
                        <br></br>
                        <button onClick={this.handleClick} class="buy">
                            Buy Now
                        </button>
                    </div>

                    </center>
                </div>

                <br></br>
                <div className="description">

                    <h3>BENEFITS</h3><br></br>

                    <p><b>Accurate real-time face recognition and mask detection:</b>
                        <br></br><br></br>
                        <div>
                        {accurate}
                        </div>
                    </p>

                    <br></br><br></br>

                    <p><b>Audio assistance:</b>
                        <br></br><br></br>
                        <div>
                        {audio}
                        </div>
                    </p>

                    <br></br><br></br>

                    <p><b>Highly accurate temperature detection:</b>
                        <br></br><br></br>
                        <div>
                        {hightemp}
                        </div>

                    </p>

                    <br></br><br></br>

                    <p><b>Display:</b>
                        <br></br><br></br>
                        <div>
                            {display}
                        </div>
                    </p>

                    <br></br><br></br>

                    <p><b>Contactless / no-touch temperature screening:</b>
                        <br></br><br></br>
                        <div>
                            {contactless}
                        </div>
                    </p>


                    <br></br><br></br>

                    <p><b>Ease of integration:</b>
                        <br></br><br></br>
                        <div>
                        {integrate}
                        </div>
                    </p>

                    <br></br><br></br>

                    <p><b>Standby mode:</b>
                        <br></br><br></br>
                    <div>
                        {standby}
                    </div>
                    </p>

                    <br></br><br></br>

                    <p><b>Greater Camera quality:</b>
                        <br></br><br></br>
                    <div>
                        {cam}
                    </div>
                    </p>
      
                    <br></br><br></br>

                    <p><b>Wi-fi connectivity versions:</b>
                        <br></br><br></br>
                    <div>
                        {wifi}
                    </div>
                    </p>
 
                    <br></br><br></br>

                <p><b>Multiple Integrations :</b>
                <br></br><br></br>
                <div>
                    {mulintegrate}
                </div>
                </p>

                

                </div>

            </div>

        )
    };
}

export default Product;