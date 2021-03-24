import React, { useState } from 'react'

const MyLoginContext = React.createContext()

export function LoginContext(props){
    const [logged, setLogged] = useState('false')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const [accountId, setAccountId] = useState('')
    const [deviceCount, setDeviceCount] = useState('')

    return (
        <MyLoginContext.Provider value={{
            logged,
            email,
            password,
            name,
            contact,
            accountId,
            deviceCount,
            setLogged,
            setEmail,
            setPassword,
            setName,
            setContact,
            setAccountId,
            setDeviceCount
        }}>
            { props.children }
        </MyLoginContext.Provider>
    )
}

export default MyLoginContext