import React from 'react';
import './About.scss';

const about = (props) => {
  return (
    <div className="About">
      <div className="About__image">
        <img
          src="/assets/img/me.jpg"
          alt="Gabor Zay"
        />
      </div>
      <div className="About__blurb">
        <p>Hello World!</p>
        <p>I'm a Vancouver based Full Stack Web developer with a
          background in Computing Science from Simon Fraser
          University.</p>
        <p>When I'm not writing code you can find me hiking the local
          mountains,
          riding around the seawall, or walking around the city taking
          pictures.</p>
      </div>
      <div className="About__links">
        {props.children}
      </div>
    </div>
  );
};

export default about;