import React from 'react'
import '../../css/login/EmailOrPasswordInvalid.css'

class EmailOrPasswordInvalid extends React.Component {
    render () {
        return (
            <div className={ 'email-or-password-incorrect ' + this.props.className1 }>
                { this.props.children }
            </div>
        )
    }
}

export default EmailOrPasswordInvalid;