import React from 'react';
import '../../sass/layout/_navigation.scss';

const navigation = (props) => {
  return (
    <div className="Navigation">
      <input className="Navigation__checkbox" id="navi-toggle" type="checkbox" name=""/>

      <label className="Navigation__button" htmlFor="navi-toggle">
        <span className="Navigation__icon"></span>
      </label>

      <div className="Navigation__brand">
        <div className="Navigation__heading">Gabor Zay</div>
        <div className="Navigation__subheading">Full Stack Web Developer</div>
      </div>

      <div className="Navigation__background">&nbsp;</div>

      <nav className="Navigation__nav">
        <ul className="Navigation__list">
          <li>&nbsp;</li>
          {Object.values(props.sections).map((section) => {
            return (
              <li key={section.id} className="Navigation__item">
                <a className="Navigation__link"
                   href={`#${section.id}`}> {section.heading}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default navigation;