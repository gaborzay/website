import React from 'react';
import Skill from './Skill/Skill';
import './Skills.scss';

const skills = (props) => {
  const skills = props.skills.map((skill, index) => {
    return <Skill key={index} experience={skill}/>;
  });

  return (
    <div className="Skills">
      <h5 className="Skills__heading">
        {props.title}
      </h5>
      <div className="Skills__content">
        {skills}
      </div>
    </div>
  );
};

export default skills;