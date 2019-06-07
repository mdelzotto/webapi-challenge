import React from "react";

const Action = props => {
  return (
    <div className="action">
      <div className="description">
        <h3>Description: </h3>
        <p>{props.action.description}</p>
      </div>
      <div className="notes">
        <h3>Notes:</h3>
        <p>{props.action.notes}</p>
      </div>
    </div>
  );
};

export default Action;
