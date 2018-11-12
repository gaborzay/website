import React from 'react';
import './About.scss';

const about = (props) => {
  return (
    <div className="About">
      <div className="About__image">
        <img src="/assets/img/me.jpg?text=Image" alt="Gabor Zay"/>
      </div>

      <div className="About__card card">
        <div className="About__body card-body">
          <p className="About__text card-text">
            <p>Hello World!</p>
            <p>I'm a Vancouver based Full Stack Web developer with a
              background in Computing Science from Simon Fraser
              University.</p>
            <p>When I'm not writing code you can find me hiking the local
              mountains,
              riding around the seawall, or walking around the city taking
              pictures.</p>
          </p>
        </div>

        <div className="About__links card-body">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default about;