import React from 'react'
import '../../css/dashboard/Badge.css'

class Badge extends React.Component {
    render () {
        return (
            <div className={ 'Badge ' + this.props.CLASS_NAME_1 } style={ { gridArea: this.props.GRID_AREA } }>
                <div className="svg">
                    { this.props.children }
                </div>
                <div className="text">
                    { this.props.TEXT }
                </div>
                <div className="display">
                    { this.props.DATA }
                </div>
            </div>
        )
    }
}

export default Badge