import React from 'react';
import Project from './Project/Project';
import './Projects.scss';

const projects = (props) => {
  return (
    <div className="Projects">
      <h3 className="Projects__heading">{props.title}</h3>
      {props.projects.map((project) => (
        <Project
          key={project.id}
          {...project}
        />
      ))}
    </div>
  );
};

export default projects;

