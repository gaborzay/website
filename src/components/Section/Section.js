import React from 'react';
import './Section.scss';

const section = (props) => {
  const heading = props.heading ? props.heading : null;

  return (
    <section className="Section row" id={props.sectionId}>
      <h4 className="Section__heading">
        {heading}
      </h4>
      <div className="Section__content col-md-12">
        {props.children}
      </div>
    </section>
  );
};

export default section;