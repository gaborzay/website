import React from 'react';

const button = (props) => {
  return (
    <a
      href={props.href}
			target="_blank"
			rel="noopener noreferrer"
			className="Button btn btn-outline-primary btn-lg m-2"
      role="button"
      aria-pressed="true">
      {props.icon}
    </a>
  );
};

export default button;