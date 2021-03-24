import React, { useState } from 'react'

const MyDashboardContext = React.createContext()

export const DashboardConsumer = MyDashboardContext.Consumer

export function DashboardProvider (props) {
    const [email, setEmail] = useState('test@test.com')
    const [name, setName] = useState('tester')
    // The id given inside is temproary, change after JWT is completed
    const [accountId, setAccountId] = useState('sjdhiadsivnvk')
    const [dayData, setDayData] = useState(null)
    const [weekData, setWeekData] = useState(null)
    return (
        <MyDashboardContext.Provider value={ {
            email,
            name,
            accountId,
            dayData,
            weekData,
            setEmail,
            setName,
            setAccountId,
            setDayData,
            setWeekData
        } }>
            { props.children }
        </MyDashboardContext.Provider>
    )
}

export default MyDashboardContext