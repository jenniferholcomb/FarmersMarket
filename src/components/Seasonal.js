import React from "react";
import ProduceIcon from "./ProduceIcon";
import PropTypes from "prop-types";

function Seasonal(props) {
  console.log(props.selection);
  return (
    <React.Fragment>
      <div className="seasonal-middle">
        <h3>{props.month}</h3>
        {props.selection.map((item, index) => 
          <ProduceIcon
            produceItem={item}
          />
        )}
      </div>
    </React.Fragment>
  );
}

export default Seasonal;