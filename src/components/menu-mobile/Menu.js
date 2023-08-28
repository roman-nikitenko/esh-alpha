import React from 'react';
import './menu.scss'
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <aside className="menu">
      <div className="menu__content">
        <Link className="menu__link" to="/">Home</Link>
        <Link className="menu__link" to="/contacts">Contacts</Link>
        <Link className="menu__link" to="/service">Service</Link>
      </div>
    </aside>
  );
};
