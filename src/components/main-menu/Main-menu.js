import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import './main-menu.scss';
import logo from "../../img/logo.svg";
import classNames from "classnames";

export const MainMenu = ( { menuOpen, setMenuOpen } ) => {
  useEffect(() => {

  });

  return (
    <>
      <div className="main-menu">
        <Link to="/">
          <img className="main-menu__logo" src={logo} alt="logo"/>
        </Link>

        <button
          type="button"
          className={classNames('icon', 'icon__menu', {
            'icon__menu--close': menuOpen,
          })}
          onClick={() => {
            setMenuOpen(current => !current);
          }}
        >
        </button>

        <ul className="nav">
          <li className="nav__item">
            <Link to="/" className="nav__link">Home</Link>
          </li>
          <li className="nav__item">
            <Link to="/service" className="nav__link">Service</Link>
          </li>
          <li className="nav__item">
            <Link to="/contacts" className="nav__link">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
