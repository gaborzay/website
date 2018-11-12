import React from 'react';
import Project from './Project/Project';
import './Projects.scss';

const projects = (props) => {
  const projects = props.projects.map((project) => (
    <Project
      key={project.id}
      {...project}
    />
  ));

  return (
    <div className="Projects">
      <h5 className="Projects__heading ">{props.title}</h5>
      <div className="Projects__content card-deck">
        {projects}
      </div>
    </div>
  );
};

export default projects;

