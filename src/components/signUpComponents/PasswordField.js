import React from 'react';
import '../../css/signUp/PasswordField.css';

class PasswordField extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            password: ''
        }
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange (event) {
        this.setState({
            password: event.target.value
        })
    }

    render () {
        return (
            <div className="password-field">
                <input type="password" value={ this.state.password } onChange={ this.handleOnChange } required />
                <text>
                    { this.props.placeholder }
                </text>
            </div>
        )
    }
}

export default PasswordField