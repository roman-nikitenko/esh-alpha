import React from 'react';
import './menu.scss'

export const Menu = () => {
  return (
    <aside className="menu">
      <div className="menu__content">
        <a className="menu__link" href="#home">Home</a>
        <a className="menu__link" href="#about">About</a>
        <a className="menu__link" href="#service">Service</a>
      </div>
    </aside>
  );
};
