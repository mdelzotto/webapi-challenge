import React from "react";

const Project = props => {
  return (
    <div className="project">
      <div className="name">
        <h3>Name: </h3>
        <p>{props.project.name}</p>
      </div>
      <div className="description">
        <h3>Description:</h3>
        <p>{props.project.description}</p>
      </div>
    </div>
  );
};

export default Project;
