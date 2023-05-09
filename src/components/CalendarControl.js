import React from "react";
import Calendar from "./Calendar";

const marketSchedule = [  
  {  
     day: "Sunday",
     location: "Lents International",
     address: "SE 91st Ave & SE Foster Rd",
     hours: "9:00am - 2:00pm",
     booth: "4A"
  },
  {  
     day: "Monday",
     location: "Pioneer Courthouse Square",
     address: "SW Broadway & SW Morrison",
     hours: "10:00am - 2:00pm",
     booth: "7C"
  },
  {  
     day: "Tuesday",
     location: "Hillsboro",
     address: "150 E Main St",
     hours: "5:00pm - 8:30pm",
     booth: "1F"
  },
  {  
     day: "Wednesday",
     location: "Shemanski Park",
     address: "SW Park Ave & SW Salmon St",
     hours: "10:00am - 2:00pm",
     booth: "3E"
  },
  {  
     day: "Thursday",
     location: "Northwest Portland",
     address: "NW 19th Ave & NW Everett St",
     hours: "2:00pm - 6:00pm",
     booth: "6D"
  },
  {  
     day: "Saturday",
     location: "Beaverton",
     address: "12375 SW 5th St",
     hours: "10:00am - 1:30pm",
     booth: "9G"
  }
 ];

class CalendarControl extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div id="calendar">
          <div id="info">
            <button class="cal-button" onClick={() => this.handleClick('Sunday')}>{'FIND IN STORE'}</button>
            <button class="cal-button" onClick={() => this.handleClick('Monday')}>{'CONTACT US'}</button>
          </div>
          <div id="schedule">
            <h2 className="schedule">THIS WEEK'S SCHEDULE</h2>
            <hr />
            <div id="daily">
              {marketSchedule.map(day => {
                return <Calendar 
                day={day.day}
                location={day.location}
                address={day.address}
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