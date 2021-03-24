import React from 'react';
import NavBar from "../components/dashboardDemoComponents/NavBar";
import Calendar from "../components/dashboardDemoComponents/Calendar";
import Badge from "../components/dashboardDemoComponents/Badge";
import '../css/dashboardDemo/Dashboard.css';
import '../css/dashboardDemo/DashboardHome.css';
import DemoData from '../assets/karthavya datasheet demo.xlsx';
import { ReactComponent as EntireCount } from '../assets/EntireCount.svg';
import { ReactComponent as NormalTempPeople } from '../assets/NormalTempPeople.svg';
import { ReactComponent as HighTempPeople } from '../assets/HighTempPeople.svg';
import { ReactComponent as AverageTemp } from '../assets/AverageTemp.svg';
import { ReactComponent as MinimumTemp } from '../assets/MinimumTemp.svg';
import { ReactComponent as MaximumTemp } from '../assets/MaximumTemp.svg';
import { ReactComponent as WearingMaskCount } from '../assets/WearingMaskCount.svg';
import { ReactComponent as Download } from '../assets/Download.svg';
import { Helmet } from "react-helmet";

class DashboardDemo extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            PRESENT_DATA: {
                "noOfEntries": 2,
                "noOfPeopleWearingMask": 1,
                "noOfPeopleNotWearingMask": 1,
                "maxTemperature": 37,
                "minTemperature": 36,
                "avgTemperature": 36.5,
                "noOfPeopleWithNormalTemperature": 2,
                "noOfPeopleWithAbnormalTemperature": 0
            }
        }
    }

    render() {
        return (
            <div className="DashboardDemo">
                <NavBar/>
                <div className="DashboardHome">
                    <Helmet>
                        <title>
                            Dashboard Demo | KARTHAVYA
                        </title>
                    </Helmet>
                    <div className="calendar-parent">
                        <Calendar/>
                    </div>
                    <Badge CLASS_NAME_1="badge-1" GRID_AREA="badge-1" TEXT="Entire Count"
                           DATA={ this.state.PRESENT_DATA.noOfEntries }>
                        <EntireCount/>
                    </Badge>
                    <Badge CLASS_NAME_1="badge-2" GRID_AREA="badge-2" TEXT="Normal Temp People"
                           DATA={ this.state.PRESENT_DATA.noOfPeopleWithNormalTemperature }>
                        <NormalTempPeople/>
                    </Badge>
                    <Badge CLASS_NAME_1="badge-3" GRID_AREA="badge-3" TEXT="High Temp People"
                           DATA={ this.state.PRESENT_DATA.noOfPeopleWithAbnormalTemperature }>
                        <HighTempPeople/>
                    </Badge>
                    <Badge CLASS_NAME_1="badge-4" GRID_AREA="badge-4" TEXT="Average Temp"
                           DATA={ this.state.PRESENT_DATA.avgTemperature }>
                        <AverageTemp/>
                    </Badge>
                    <Badge CLASS_NAME_1="badge-5" GRID_AREA="badge-5" TEXT="Minimum Temp"
                           DATA={ this.state.PRESENT_DATA.minTemperature }>
                        <MinimumTemp/>
                    </Badge>
                    <Badge CLASS_NAME_1="badge-6" GRID_AREA="badge-6" TEXT="Maximum Temp"
                           DATA={ this.state.PRESENT_DATA.maxTemperature }>
                        <MaximumTemp/>
                    </Badge>
                    <Badge CLASS_NAME_1="badge-7" GRID_AREA="badge-7" TEXT="Wearing Mask Count"
                           DATA={ this.state.PRESENT_DATA.noOfPeopleWearingMask }>
                        <WearingMaskCount/>
                    </Badge>
                    <div className="download">
                        <div className="svg">
                            <a href={DemoData}>
                                <Download/>
                            </a>
                        </div>
                        <div className="text">
                            Download
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardDemo;