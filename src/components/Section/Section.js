import React from 'react';
import './Section.scss';

const section = (props) => {
  return (
    <section className="Section" id={props.sectionId}>
      <h2 className="Section__heading">{props.heading}</h2>
      <div className="Section__content">
        {props.children}
      </div>
    </section>
  );
};

export default section;