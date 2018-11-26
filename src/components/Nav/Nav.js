import React from 'react';

const navigation = (props) => {
  const navLinks = Object.values(props.sections).map((section) => {
    return (
      <a
        key={section.id}
        className={"nav-link bg-dark text-white"}
        href={`#${section.id}`}>{section.heading}</a>
    );
  });

  return (
		<nav className={"nav navbar-expand-md navbar-dark bg-dark fixed-top p-2"}>
      <a className="navbar-brand" href="/">Gabor Zay</a>
      <button
        className={"navbar-toggler ml-auto justify-content-right"}
        data-toggle="collapse"
        data-target="#navLinks"
        aria-label="Toggle Navigation">
				<span className={"navbar-toggler-icon"}></span>
			</button>
      <div className={"collapse navbar-collapse justify-content-center"} id="navLinks">
				{navLinks}
      </div>
		</nav>
  );
};

export default navigation;