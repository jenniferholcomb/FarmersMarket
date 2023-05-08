import React from "react";
import Calendar from "./Calendar";

const marketSchedule = [  
  {  
     day: "Sunday",
     location: "Lents International",
     hours: "9:00am - 2:00pm",
     booth: "4A"
  },
  {  
     day: "Monday",
     location: "Pioneer Courthouse Square",
     hours: "10:00am - 2:00pm",
     booth: "7C"
  },
  {  
     day: "Tuesday",
     location: "Hillsboro",
     hours: "5:00pm - 8:30pm",
     booth: "1F"
  },
  {  
     day: "Wednesday",
     location: "Shemanski Park",
     hours: "10:00am - 2:00pm",
     booth: "3E"
  },
  {  
     day: "Thursday",
     location: "Northwest Portland",
     hours: "2:00pm - 6:00pm",
     booth: "6D"
  },
  {  
     day: "Saturday",
     location: "Beaverton",
     hours: "10:00am - 1:30pm",
     booth: "9G"
  }
 ];

class CalendarControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentState: 'Sunday'
    };
  }

  handleClick = (changeState) => {
    this.setState(prevState => ({
      currentState: changeState
    }));
  }

  render() {
    let currentDay = 0;
    if (this.state.currentState === 'Monday') {
      currentDay = 1;
    } else if (this.state.currentState === 'Tuesday') {
      currentDay = 2;
    } else if (this.state.currentState === 'Wednesday') {
      currentDay = 3;
    } else if (this.state.currentState === 'Thursday') {
      currentDay = 4;
    } else if (this.state.currentState === 'Saturday') {
      currentDay = 5;
    } else {
      currentDay = 0;
    }
    return (
      <React.Fragment>
        <div id="calendar">
          <div id="info">
            <button class="seas-button" onClick={() => this.handleClick('Sunday')}>{'FIND IN STORE'}</button>
            <button class="seas-button" onClick={() => this.handleClick('Monday')}>{'CONTACT US'}</button>
          </div>
          <div id="schedule">
            <h2 className="schedule">THIS WEEK'S SCHEDULE</h2>
            <hr />
            <div id="daily">
              {marketSchedule.map(day => {
                return <Calendar 
                day={day.day}
                location={day.location}
                hours={day.hours}
                booth={day.booth}/>
              })}
            </div>

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CalendarControl;

{/* <button onClick={() => this.handleClick('Sunday')}>{'Sunday'}</button>
<button onClick={() => this.handleClick('Monday')}>{'Monday'}</button>
<button onClick={() => this.handleClick('Tuesday')}>{'Tuesday'}</button>
<button onClick={() => this.handleClick('Wednesday')}>{'Wednesday'}</button>
<button onClick={() => this.handleClick('Thursday')}>{'Thursday'}</button>
<button onClick={() => this.handleClick('Friday')}>{'Friday'}</button>
<button onClick={() => this.handleClick('Saturday')}>{'Saturday'}</button> */}