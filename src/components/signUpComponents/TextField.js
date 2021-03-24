import React from 'react'
import '../../css/signUp/TextField.css'

class TextField extends React.Component {
    constructor (props) {
        super(props)
        this.text = ( this.props.value === '' ) ? '' : this.props.value
        this.state = {
            text: this.text
        }
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange (event) {
        this.setState({
            text: event.target.value
        })
    }

    render () {
        return (
            <div className={ 'text-field ' + this.props.classname1 }>
                <input type="text" value={ this.state.text } onChange={ this.handleOnChange } required
                       autoComplete={ 'off' } />
                <text>
                    { this.props.placeholder }
                </text>
            </div>
        )
    }
}

export default TextField