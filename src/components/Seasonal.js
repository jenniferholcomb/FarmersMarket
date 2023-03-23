import React from "react";
import PropTypes from "prop-types";

function Seasonal(props) {
  console.log(props.selection);
  return (
    <React.Fragment>
      <h3>{props.month}</h3>
      {props.selection.map((item, index) => <p>{item}</p>)}
    </React.Fragment>
  );
}

export default Seasonal;