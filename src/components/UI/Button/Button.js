import React from 'react';
import './Button.scss';

const button = (props) => {
  return (
    <div className="Button">
      <a className="Button__link" href={props.href}>
        <div className="Button__icon">
          {props.icon}
        </div>
      </a>
    </div>
  );
};

export default button;