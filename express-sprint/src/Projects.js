import React from "react";
import Project from "./Project";

const Projects = props => {
  return (
    <div>
      <h1>Projects</h1>
      {props.projects.map(project => (
        <Project project={project} key={project.id} />
      ))}
    </div>
  );
};

export default Projects;
