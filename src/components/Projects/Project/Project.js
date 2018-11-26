import React from 'react';
import './Project.scss';

const project = (props) => {
  const heading = props.name.split('-').join(' ');
  const techStack = props.tech.map(tech => (
    <button key={tech.toLowerCase().replace(' ', '-')} type="button" className="Project__tag btn btn-info btn-sm">{tech}</button>
  ));
  const lastCommit = new Date(props.updated_at).toUTCString();
  const github = (<a
    href={props.html_url}
    className="Project__link btn btn-secondary btn-sm"
    role="button"
    aria-pressed="true">Github</a>);
  const website = props.homepage ? (<a
    href={props.homepage}
    className="Project__link btn btn-secondary btn-sm"
    role="button"
    aria-pressed="true">Website</a>) : null;

  return (
    <div className="Project card">
      <div className="Project__header card-header">
        {heading}
        <p className="Project__text card-text">
          <small className="text-muted">
            Last updated: {lastCommit}
          </small>
        </p>
      </div>
      <div className="Project__body card-body">
        <p className="Project__text card-text">
          {props.description}
        </p>
      </div>
      <div className="Project__tech-stack card-footer">
        {techStack}
      </div>
      <div className="Project__footer card-footer text-right">
        {website}
        {github}
      </div>
    </div>
  );
};

export default project;