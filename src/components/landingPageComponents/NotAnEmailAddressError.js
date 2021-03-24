import React from 'react'
import '../../css/landingPage/NotAnEmailAddressError.css'

class NotAnEmailAddressError extends React.Component {


    render () {
        return (
            <div className={ 'not-an-email-address ' + this.props.className1 }>
                {this.props.children}
            </div>
        )
    }
}

export default NotAnEmailAddressError