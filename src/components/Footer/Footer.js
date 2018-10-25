import React from 'react';
import '../../sass/layout/_footer.scss';

const footer = (props) => {
  const links = props.links.map(link => (
    <a
      className="Footer__link"
      href={link.href}
      dangerouslySetInnerHTML={{__html: link.name}}
    />
  ));

  return (
    <footer className="Footer">
      {links}
    </footer>
  );
};

export default footer;