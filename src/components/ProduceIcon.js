import React from "react";
import PropTypes from 'prop-types';

function ProduceIcon(props) {
  return (
    <React.Fragment>
      <div style={{backgroundColor: props.backgroundColor}} className="produce-icon">
        <p>{props.produceItem}</p>
      </div>
    </React.Fragment>
  );
}

ProduceIcon.propTypes = {
  produceItem: PropTypes.string
};

export default ProduceIcon;