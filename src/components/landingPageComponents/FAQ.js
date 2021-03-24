import React from 'react';
import '../../css/landingPage/FAQ.css';
import { ReactComponent as AddIcon } from "../../assets/AddIconFAQ.svg";

class FAQ extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            status: "inactive"
        }
        
        this.handleAnswerState = this.handleAnswerState.bind(this);
    }

    handleAnswerState() {
        if ( this.state.status === "inactive" ) {
            this.setState( {
                status: "active"
            } )
        } else {
            this.setState( {
                status: "inactive"
            } )
        }
    }

    render() {
        return (
            <div className={ "FAQ " + this.state.status }>
                <div className="question">
                    { this.props.question }
                </div>
                <div className="drop" onClick={ this.handleAnswerState }>
                    <AddIcon/>
                </div>
                <div className={ "answer " + this.state.status }>
                    { this.props.answer }
                </div>
            </div>
        );
    }
}

export default FAQ;