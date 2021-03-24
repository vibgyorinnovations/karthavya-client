import React, { useState } from 'react'

const MySignUpContext = React.createContext()

export const SignUpConsumer = MySignUpContext.Consumer

export function SignUpProvider (props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [orgName, setOrgName] = useState('')
    const [contact, setContact] = useState('')
    const [accountId, setAccountId] = useState('')

    return (
        <MySignUpContext.Provider value={ {
            email,
            password,
            name,
            orgName,
            contact,
            accountId,
            setEmail,
            setPassword,
            setName,
            setOrgName,
            setContact,
            setAccountId,
        } }>
            { props.children }
        </MySignUpContext.Provider>
    )
}

export default MySignUpContext