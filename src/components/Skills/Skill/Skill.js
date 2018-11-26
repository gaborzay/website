import React from 'react';
import './Skill.scss';

const skill = (props) => {
  const skills = (
    props.experience.skills.map((skill, index) => {
      const header = (<div className="Skill__name">{skill.name}</div>);
      const img = (<img className="Skill__image" src={skill.img.url} alt={skill.name}/>);
      const quantity = (<div className="Skill__quantity">{skill.experience} year(s)</div>);
      const category = (<div className="Skill__category">{skill.category}</div>);
      const key = skill.name.toLowerCase().replace(' ', '-')+index;

      return (
        <div key={key} className="Skill text-center bg-dark">
          {header}
          <div className="Skill__body">
            {img}
            {quantity}
          </div>
          {category}
        </div>
      );
    })
  );

  return (
    <div className="Skill__wrapper card">
      <h4 className="Skill__wrapper__header card-header">{props.experience.name}</h4>
      <div className="card-body">
        {skills}
      </div>
    </div>
  );
};

export default skill;