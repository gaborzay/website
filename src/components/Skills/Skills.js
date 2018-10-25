import React from 'react';
import Skill from './Skill/Skill';
import './Skills.scss';

const skills = (props) => {
  return (
    <div className="Skills">
      <h3 className="Skills__heading">{props.title}</h3>
      <div className="Skills__content">
        {props.skills.map(skill => {
          return <Skill experience={skill}/>;
        })}
      </div>
    </div>
  );
};

export default skills;