import { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import '../../css/signUp/MobileField.css';

function MobileField (props) {
    // `value` will be the parsed phone number in E.164 format.
    // Example: "+12133734253".
    const [value, setValue] = useState()
    return (
        <div className="mobile-field">
            <PhoneInput
                placeholder=""
                value={ value }
                onChange={ setValue } />
            <text>
                { props.placeholder }
            </text>
        </div>

    )
}

export default MobileField