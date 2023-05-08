import React from "react";
import PropTypes from "prop-types";

function Calendar(props) {
  return (
    <React.Fragment>
      <div id="daily-item">
        <h3 className="day-name">{props.day}</h3>
        <p className="location">{props.location}</p>
        <p>{props.hours} &nbsp; <strong>BOOTH:</strong> {props.booth}</p>
        <br />
      </div>
    </React.Fragment>
  );
 }

 Calendar.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
 }

 export default Calendar;