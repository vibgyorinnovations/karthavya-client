import React from 'react';
import '../../css/landingPage/LandingPageDescriptions.css';

class ProductDescription extends React.Component {
    render() {
        const normal = (
            <div className={ "product-description " + this.props.classname1 }>
                <div className="title">
                    { this.props.title }
                </div>
                <div className="description">
                    { this.props.description }
                </div>
                <div className="image">
                    <div className="img">
                        {this.props.image}
                    </div>
                </div>
            </div>
        );

        const inverted = (
            <div className={ "product-description-inverted " + this.props.classname1 }>
                <div className="title">
                    { this.props.title }
                </div>
                <div className="description">
                    { this.props.description }
                </div>
                <div className="image">
                    <div className="img">
                        {this.props.image}
                    </div>
                </div>
            </div>
        );

        if ( this.props.inverted === 'true' ) {
            return inverted;
        } else {
            return normal;
        }
    }
}

export default ProductDescription;