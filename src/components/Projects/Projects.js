import React from 'react';
import Project from './Project/Project';

const projects = (props) => {
  return (
    <React.Fragment>
      <h3>{props.title}</h3>
      {props.projects.map((project) => (
        <Project
          key={project.id}
          {...project}
        />
      ))}
    </React.Fragment>
  );
};

export default projects;

