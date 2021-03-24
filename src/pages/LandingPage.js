import React from 'react';
import { Helmet } from "react-helmet";
import '../css/landingPage/LandingPage.css';
import { ReactComponent as ProductImage } from "../assets/Karthavya.svg";
import { ReactComponent as ProductImage2 } from "../assets/KarthavyaProduct.svg";
import { ReactComponent as AccurateRealTimeFace } from "../assets/Accurate real-time face recognition & mask detection.svg";
import { ReactComponent as HighlyAccurate } from "../assets/Highly accurate Temperature detection 1.svg";
import { ReactComponent as NoTouchTemperature } from "../assets/No-touch Temperature screening.svg";
import { ReactComponent as GreaterCamera } from "../assets/Greater Camera quality.svg";
import { ReactComponent as EaseOfIntegration } from "../assets/Ease of integration.svg";
import KarthavyaLogo from '../assets/KarthavyaLogoBlack.png';
import Page1 from "../components/landingPageComponents/Page1";
import Page2 from "../components/landingPageComponents/Page2";
import ProductDescription from "../components/landingPageComponents/ProductDescription";
import DashboardPreview from "../components/landingPageComponents/DashboardPreview";
import FAQ from "../components/landingPageComponents/FAQ";
import Footer from "../components/landingPageComponents/Footer";


class LandingPageHome extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            faq: {
                0: {
                    q: <text>What is KARTHAVYA all about?</text>,
                    a: <text>KARTHAVYA is a compact indoor use, mask detection and temperature screening device with an
                        audible alarm and power-saving mode</text>
                },
                1: {
                    q: <text>What is the major supremacy of the KARTHAVYA?</text>,
                    a: <text>The main intent of KARTHAVYA is to make people work happily without any fear of viruses and
                        with higher safety, protecting your customers and workers and increasing your business
                        profits.</text>
                },
                2: {
                    q: <text>What are the top three features of KARTHAVYA?</text>,
                    a: <text>1. Accurate real-time face recognition & mask detection (A Robust image detection algorithm
                        with python-based software)<br/>
                        2. Highly accurate temperature detection (sensing accuracy of +/-0.5 degree celsius)<br/>
                        3. Standby mode<br/>
                    </text>
                },
                3: {
                    q: <text>How to install KARTHAVYA?</text>,
                    a: <text>Two Use Cases:<br/>
                        1. Rough Walls - Requires Two Screw for Mounting and then Just plug and Play by Scanning the QR
                        Code to Activate the Device.<br/>
                        2. 2. Glass Walls - Needs just a Double Sided Sticker , then also just Plug and Play by
                        Activating the Device by Scanning QR CODE
                    </text>
                },
                4: {
                    q: <text>How much profitable will my work space management turn on after installing
                        KARTHAVYA?</text>,
                    a: <text>The businesses can detect and stop infected persons from entering their premises, helping
                        to stop the spread of the virus. Your staff/workers would work more happily, relaxed if they
                        know the place is a virus-free zone.</text>
                },
                5: {
                    q: <text>How much business growth will be impelled by KARTHAVYA?</text>,
                    a: <text>KARTHAVYA allows businesses to maximize their Profits without any additional labor costs.
                        This also re-assures your customer’s safety and helps you get extra customers even in this
                        pandemic situation.</text>
                },
                6: {
                    q: <text>How to own KARTHAVYA?</text>,
                    a: <text>You can get your KARTHAVYA by pre-booking it through our website. The shipment will begin
                        from next month.</text>
                },
                7: {
                    q: <text>How to interact with us regarding any sales queries ?</text>,
                    a: <text>We are open for any feedback from you at any time.You can contact us through:<br/>
                        1. E-Mail Address<br/>
                        2. Comments on software, support or services<br/>
                        3. Comments on website<br/>
                        4.Through our social media platform given at the bottom of the page</text>
                },
                8: {
                    q: <text>When can you annex the device after placing an order?</text>,
                    a: <text>
                        <center>**First 3 days**</center>
                        <br/>
                        1. Your order is placed<br/>
                        2. Your product is Getting ready<br/>
                        3. Your product has dispatched<br/>
                        <center>**Next 4 days**</center>
                        <br/>
                        1. Your order has been received by the delivery partner<br/>
                        2. Your order has been Picked up by a delivery partner<br/>
                        3. Your order Received by the respective customer<br/>
                        4. Your order has Approved [review]
                    </text>
                },
                9: {
                    q: <text>Why should I opt for KARTHAVYA?</text>,
                    a: <text>It may be providing you the right data through which you can bring operational changes.
                        Enhancing your business growth along with protecting your customers and workers.</text>
                }
            }
        }
    }

    render() {
        return (
            <div className="LandingPage">
                <Helmet>
                    <title>
                        KARTHAVYA
                    </title>
                </Helmet>
                <Page1 projectNameLine1={ KarthavyaLogo } projectNameLine2="“Made in India, Made for India”"
                       projectDescription={ <text><b>Implementing Prevention before Cause.</b><br/>
                           Since this is a difficult time for many businesses & many companiesclosed down, there
                           seems to be some light at the end of the tunnel.<br/><br/>
                           Introducing an Indoor use self-installation system <b>‘KARTHAVYA V.0.1’</b>.&nbsp;
                           A contactless, screening device with an voice assisted command mode,
                           audible alarm and power-saving mode.
                       </text> }
                       productImage1={ <ProductImage/> } productImage2={ <ProductImage/> }/>
                <Page2 title="3D Viewer"
                       image={ <ProductImage2/> }
                       line1={<text>Some Important Features that Makes you take the Right Decisions that<br/>will Impact the  Safety of your Premises.</text>}/>
                <ProductDescription classname1='description-1'
                                    title={ <text> Accurate real-time face recognition & mask detection</text> }
                                    description={ <text>A Robust image detection algorithm
                                        with python-based software is used
                                        to detect masks alongside screening
                                        the respective person’s body
                                        temperature accurately.</text> }
                                    image={ <AccurateRealTimeFace/> } inverted="false"/>
                <ProductDescription classname1='description-2'
                                    title={ <text>Highly accurate Temperature detection</text> }
                                    description={ <text>Temperature measured at once
                                        at a distance of less than a meter
                                        with a sensing accuracy
                                        of +/-0.5 degree Celsius
                                        in about 2 to 3 seconds.</text> }
                                    image={ <HighlyAccurate /> } inverted="true"/>
                <ProductDescription classname1='description-3'
                                    title={ <text>No-touch Temperature screening</text> }
                                    description={ <text>A Contactless touch-free
                                        features to maximize technology
                                        and minimize your labor costs.</text> }
                                    image={ <NoTouchTemperature/> } inverted="false"/>

                <ProductDescription classname1='description-4'
                                    title={ <text>Ease of integration</text> }
                                    description={ <text>Just Plugin and watch the device Play.
                                        Can also Integrate it with your existing
                                        time and attendance system.</text> }
                                    image={ <EaseOfIntegration/> } inverted="true"/>
                <ProductDescription classname1='description-5'
                                    title={ <text>Greater Camera quality</text> }
                                    description={ <text>Designed with the Most prominent
                                        Sony IMX 219 8mp Camera
                                        for a superlative quality of
                                        image detection.</text> }
                                    image={ <GreaterCamera/> } inverted="false"/>
                <DashboardPreview/>
                <div className="faq-container">
                    <div className="title">People also ask</div>
                    { Object.keys( this.state.faq ).map( keys => {
                        return <FAQ question={ this.state.faq[ keys ].q } answer={ this.state.faq[ keys ].a }/>
                    } ) }
                </div>
                <Footer/>
            </div>
        );
    }
}

export default LandingPageHome;