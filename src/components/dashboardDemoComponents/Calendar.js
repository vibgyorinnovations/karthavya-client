import React from 'react';
import '../../css/dashboardDemo/Calendar.css'

class Calendar extends React.Component {
    months = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
    }

    constructor( props ) {
        super( props );
        //New Date Object
        let dateObj = new Date();
        //Current Date
        let currDate = dateObj.getDate();
        //Current Month
        let currMonth = dateObj.getMonth();
        //Current Year
        let currYear = dateObj.getFullYear();
        let START_DATE = new Date( currYear, currMonth, 1 ).getDay();
        let CURRENT_DATE = this.months[ currMonth + 1 ] + ' ' + currDate + ', ' + currYear;
        let dates = this.getDates( currMonth, currYear, START_DATE )
        Object.keys( dates ).map( ( key ) => {
            let CLASS_NAME_1 = 'day-' + key;
            let CLASS_NAME_2 = ''
            if ( currDate.toString() === dates[ key.toString() ] ) {
                CLASS_NAME_2 = 'active';
            }
            dates[ key ] = {
                DATE: dates[ key.toString() ],
                CLASS_NAME_1: CLASS_NAME_1,
                CLASS_NAME_2: CLASS_NAME_2
            }
            return null;
        } )
        this.state = {
            YEAR: currYear.toString(),
            MONTH: currMonth.toString(),
            SELECTED_DATE: currDate.toString(),
            START_DATE: START_DATE.toString(),
            CURRENT_DATE: CURRENT_DATE,
            DATES: dates
        };
        this.dateSelected = this.dateSelected.bind( this );
        this.nextMonth = this.nextMonth.bind( this );
        this.prevMonth = this.prevMonth.bind( this );
    }

    // This function gets the dates of the month of the year given
    getDates( month, year, startDay ) {
        let dates = {}
        //To get total number of days in month
        let totalDays = new Date( year, month + 1, 0 ).getDate();
        //Counter Variable For the Loop
        let count = 0;

        //Initializing the loop variables
        let date = 1, // Initializing the initial date value
            day = 1; // Initializing the initial day value(pointer)

        //Loop to fill the dates
        while ( count++ < 42 ) {
            // To Check weather the current cell needs to be updated with value or not
            if ( count >= startDay + 1 && count + 1 <= totalDays + startDay + 1 ) {
                //Updating the date and incrementing the date
                dates[ day ] = date.toString();
                date++;
            } else {
                //Updating with an empty value
                dates[ day ] = '';
            }
            //Incrementing day
            day++;
        }
        return dates;
    }

    async dateSelected( event ) {
        let selectedDate = event.target.textContent; // Date Selected by user
        let currentDate = this.state.SELECTED_DATE; // Previously Selected Date
        let startDate = parseInt( this.state.START_DATE );  // Start Date of the week
        let date = this.state.DATES;
        let CLASS_NAME_1 = event.target.className.split( ' ' )[ 1 ];
        if ( event.target.textContent !== '' && event.target.textContent != null ) {
            date[ ( parseInt( selectedDate ) + startDate ).toString() ] = {
                DATE: selectedDate,
                CLASS_NAME_1: CLASS_NAME_1,
                CLASS_NAME_2: 'active'
            };
            if ( currentDate !== '' && currentDate != null ) {
                date[ ( parseInt( currentDate ) + startDate ).toString() ] = {
                    DATE: currentDate.toString(),
                    CLASS_NAME_1: 'day-' + ( parseInt( currentDate ) + startDate ),
                    CLASS_NAME_2: ''
                }
            }
            await this.setState( {
                SELECTED_DATE: selectedDate,
                CURRENT_DATE: this.months[ parseInt( this.state.MONTH ) + 1 ] + ' ' + selectedDate + ', ' + this.state.YEAR,
                DATES: date
            } )
        } else {
            if ( currentDate !== '' && currentDate != null ) {
                date[ ( parseInt( currentDate ) + startDate ).toString() ] = {
                    DATE: currentDate.toString(),
                    CLASS_NAME_1: 'day-' + ( parseInt( currentDate ) + startDate ),
                    CLASS_NAME_2: ''
                }
            }
            await this.setState( {
                SELECTED_DATE: '',
                CURRENT_DATE: "Select a valid date!!",
                DATES: date
            } )
        }
    }

    async nextMonth() {
        let month = parseInt( this.state.MONTH );
        let year = parseInt( this.state.YEAR );
        month++;
        if ( month === 12 ) {
            month = 0;
            year++;
        }
        let startDate = new Date( year, month, 1 ).getDay();
        let dates = this.getDates( month, year, startDate );
        Object.keys( dates ).map( ( key ) => {
            let CLASS_NAME_1 = 'day-' + key;
            let CLASS_NAME_2 = ''
            dates[ key ] = {
                DATE: dates[ key.toString() ],
                CLASS_NAME_1: CLASS_NAME_1,
                CLASS_NAME_2: CLASS_NAME_2
            }
            return null;
        } )
        await this.setState( {
            MONTH: month.toString(),
            YEAR: year.toString(),
            SELECTED_DATE: '',
            START_DATE: startDate.toString(),
            CURRENT_DATE: "Select a valid date!!",
            DATES: dates
        } )
    }

    async prevMonth() {
        let month = parseInt( this.state.MONTH );
        let year = parseInt( this.state.YEAR );
        month--;
        if ( month === -1 ) {
            month = 11;
            year--;
        }
        let startDate = new Date( year, month, 1 ).getDay();
        let dates = this.getDates( month, year, startDate );
        Object.keys( dates ).map( ( key ) => {
            let CLASS_NAME_1 = 'day-' + key;
            let CLASS_NAME_2 = ''
            dates[ key ] = {
                DATE: dates[ key.toString() ],
                CLASS_NAME_1: CLASS_NAME_1,
                CLASS_NAME_2: CLASS_NAME_2
            }
            return null;
        } )
        await this.setState( {
            MONTH: month.toString(),
            YEAR: year.toString(),
            SELECTED_DATE: '',
            START_DATE: startDate.toString(),
            CURRENT_DATE: "Select a valid date!!",
            DATES: dates
        } )
    }

    render() {
        return (
            <div className="Calendar">
                <div className="title">
                    Calendar
                </div>
                <div className="year">
                    { this.state.YEAR }
                </div>
                <div className="month">
                    { this.months[ parseInt( this.state.MONTH ) + 1 ] }
                </div>
                <div className="week-day sunday">S</div>
                <div className="week-day monday">M</div>
                <div className="week-day tuesday">T</div>
                <div className="week-day wednesday">W</div>
                <div className="week-day thursday">T</div>
                <div className="week-day friday">F</div>
                <div className="week-day saturday">S</div>
                { Object.keys( this.state.DATES ).map( ( key ) => {
                    return ( <div
                        className={ 'Days ' + this.state.DATES[ key.toString() ].CLASS_NAME_1 + ' ' + this.state.DATES[ key.toString() ].CLASS_NAME_2 }
                        style={ { gridArea: this.state.DATES[ key.toString() ].CLASS_NAME_1 } } key={ key.toString() }
                        onClick={ async ( event ) => await this.dateSelected( event ) }>
                        { this.state.DATES[ key.toString() ].DATE }
                    </div> )
                } ) }
                <div className="prev-month" onClick={ async () => await this.prevMonth() }>
                    { "<" }
                </div>
                <div className="date-display">
                    { this.state.CURRENT_DATE }
                </div>
                <div className="next-month" onClick={ async () => await this.nextMonth() }>
                    { ">" }
                </div>
            </div>
        );
    }
}

export default Calendar;