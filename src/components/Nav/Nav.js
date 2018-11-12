import React from 'react';
// import './Nav.scss';

const navigation = (props) => {
  const navItems = Object.values(props.sections).map((section) => {
    return (
      <li className="nav-item">
        <a className="nav-link" href={`#${section.id}`}>{section.heading}</a>
      </li>
    );
  });

  return (
    <nav className="navbar navbar-dark fixed-top bg-dark">
      <a className="navbar-brand" href="/">
        <h5>Gabor Zay</h5>
        <h6>PHP Full Stack Web Developer</h6>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          {navItems}
        </ul>
      </div>
    </nav>
  );
};

export default navigation;