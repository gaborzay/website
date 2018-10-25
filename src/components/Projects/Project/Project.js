import React from 'react';
import './Project.scss';

const project = (props) => {
  const github = <a
    className="Project__link"
    href={props.html_url}
    target="_blank"
    rel="noopener noreferrer">Github</a>;
  const website = props.homepage ? <a
    className="Project__link"
    href={props.homepage}
    target="_blank"
    rel="noopener noreferrer">Website</a> : null;
  const lastCommit = new Date(props.updated_at).toUTCString();
  const heading = props.name.split('-').join(' ');

  return (
    <div className="Project">
      <div className="Project__heading">
        <strong>{heading}</strong>
      </div>
      <div className="Project__status">Last Commit: {lastCommit}</div>
      <p className="Project__description">{props.description}</p>
      <div className="Project__links">
        {website}
        {github}
      </div>
    </div>
  );
};

export default project;