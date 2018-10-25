import React from 'react';
import './Skill.scss';

const skill = (props) => {
  const skills = (
    props.experience.skills.map((skill) => {
      const img = skill.img.url ?
        <img className="Skill__image" src={skill.img.url} alt={skill.name}/> :
        null;
      return (
        <div className="Skill__individual">
          {img}
          <div className="Skill__name">{skill.name}</div>
          <div className="Skill__category">{skill.category}</div>
        </div>
      );
    })
  );

  return (
    <div className="Skill">
      <h4 className="Skill__heading">{props.experience.name}</h4>
      <div className="Skill__content">
        {skills}
      </div>
    </div>
  );
};

export default skill;