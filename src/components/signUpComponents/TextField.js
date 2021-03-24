import React from 'react'
import '../../css/signUp/TextField.css'

class TextField extends React.Component {
    constructor (props) {
        super(props)
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
                <input type="text" value={ this.props.text } onChange={ event => this.props.update(event) } required
                       autoComplete={ 'off' } />
                <text>
                    { this.props.placeholder }
                </text>
            </div>
        )
    }
}

export default TextField