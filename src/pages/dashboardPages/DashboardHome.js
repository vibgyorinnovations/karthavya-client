import React from 'react'
import '../../css/dashboard/DashboardHome.css'
import Calendar from '../../components/dashboardComponents/Calendar'
import Badge from '../../components/dashboardComponents/Badge'
import { ReactComponent as EntireCount } from '../../assets/EntireCount.svg'
import { ReactComponent as NormalTempPeople } from '../../assets/NormalTempPeople.svg'
import { ReactComponent as HighTempPeople } from '../../assets/HighTempPeople.svg'
import { ReactComponent as AverageTemp } from '../../assets/AverageTemp.svg'
import { ReactComponent as MinimumTemp } from '../../assets/MinimumTemp.svg'
import { ReactComponent as MaximumTemp } from '../../assets/MaximumTemp.svg'
import { ReactComponent as WearingMaskCount } from '../../assets/WearingMaskCount.svg'
import { ReactComponent as Download } from '../../assets/Download.svg'
import { Helmet } from 'react-helmet'
import Axios from 'axios'
import MyDashboardContext, {
    DashboardConsumer,
    DashboardProvider
} from '../../context/dashboardContext/DashboardContext'

class DashboardHome extends React.Component {
    static contextType = MyDashboardContext

    async componentDidMount () {
        Axios.get('http://localhost:5000/dashboard')
            .then(response => {
                console.log('Response from the server')
                console.log(response)
            })
            .catch( response => {
                console.log(response)
            })
            .then(() => {
                console.log('End of Axios')
            })
    }

    render () {
        return (
            <DashboardProvider>
                <DashboardConsumer>
                    {
                        props => {
                            let overlayStatus = ( props.dayData == null ) ? 'active' : 'inactive'
                            let dashboardDataStatus = ( props.dayData == null ) ? 'inactive' : 'active'
                            if (props.dayData == null) {
                                overlayStatus = 'active'
                                dashboardDataStatus = 'inactive'
                                return (
                                    <div className={ 'DashboardHome ' + dashboardDataStatus }>
                                        <Helmet>
                                            <title>
                                                Home | KARTHAVYA
                                            </title>
                                        </Helmet>
                                        <div className="calendar-parent">
                                            <Calendar />
                                        </div>
                                        <div className={ 'overlay ' + overlayStatus }>
                                            No Data Available
                                        </div>
                                    </div>
                                )
                            } else {
                                overlayStatus = 'inactive'
                                dashboardDataStatus = 'active'
                                return (
                                    <div className={ 'DashboardHome ' + dashboardDataStatus }>
                                        <Helmet>
                                            <title>
                                                Home | KARTHAVYA
                                            </title>
                                        </Helmet>
                                        <div className="calendar-parent">
                                            <Calendar />
                                        </div>
                                        <Badge CLASS_NAME_1={ 'badge-1 ' + dashboardDataStatus } GRID_AREA="badge-1"
                                               TEXT="Entire Count"
                                               DATA={ props.dayData.noOfEntries }>
                                            <EntireCount />
                                        </Badge>
                                        <Badge CLASS_NAME_1={ 'badge-2 ' + dashboardDataStatus } GRID_AREA="badge-2"
                                               TEXT="Normal Temp People"
                                               DATA={ props.dayData.noOfPeopleWithNormalTemperature }>
                                            <NormalTempPeople />
                                        </Badge>
                                        <Badge CLASS_NAME_1={ 'badge-3 ' + dashboardDataStatus } GRID_AREA="badge-3"
                                               TEXT="High Temp People"
                                               DATA={ props.dayData.noOfPeopleWithAbnormalTemperature }>
                                            <HighTempPeople />
                                        </Badge>
                                        <Badge CLASS_NAME_1={ 'badge-4 ' + dashboardDataStatus } GRID_AREA="badge-4"
                                               TEXT="Average Temp"
                                               DATA={ props.dayData.avgTemperature }>
                                            <AverageTemp />
                                        </Badge>
                                        <Badge CLASS_NAME_1={ 'badge-5 ' + dashboardDataStatus } GRID_AREA="badge-5"
                                               TEXT="Minimum Temp"
                                               DATA={ props.dayData.minTemperature }>
                                            <MinimumTemp />
                                        </Badge>
                                        <Badge CLASS_NAME_1={ 'badge-6 ' + dashboardDataStatus } GRID_AREA="badge-6"
                                               TEXT="Maximum Temp"
                                               DATA={ props.dayData.maxTemperature }>
                                            <MaximumTemp />
                                        </Badge>
                                        <Badge CLASS_NAME_1={ 'badge-7 ' + dashboardDataStatus } GRID_AREA="badge-7"
                                               TEXT="Wearing Mask Count"
                                               DATA={ props.dayData.noOfPeopleWearingMask }>
                                            <WearingMaskCount />
                                        </Badge>
                                        <div className={ 'download ' + dashboardDataStatus }>
                                            <div className="svg">
                                                <Download />
                                            </div>
                                            <div className="text">
                                                Downloads
                                            </div>
                                        </div>
                                        <div className={ 'overlay ' + overlayStatus }>
                                            No Data Available
                                        </div>
                                    </div>
                                )
                            }

                        }
                    }
                </DashboardConsumer>
            </DashboardProvider>
        )
    }
}

export default DashboardHome