import React from 'react';
import './menu.scss'

export const Menu = ({ dropRef }) => {
  return (
    <aside className="menu" ref={dropRef}>
      <div className="menu__content">
        <a className="menu__link" href="#">Home</a>
        <a className="menu__link" href="#">Service</a>
        <a className="menu__link" href="#">Contacts</a>
      </div>
    </aside>
  );
};
