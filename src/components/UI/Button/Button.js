import React from 'react';
import './Button.scss';

const button = (props) => {
  return (
    <a
      href={props.href}
      className="Button btn btn-outline-primary btn-lg"
      role="button"
      aria-pressed="true">
      {props.icon}
    </a>
  );
};

export default button;