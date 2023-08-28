import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import './main-menu.scss';
import logo from "../../img/logo.svg";
import classNames from "classnames";

export const MainMenu = ( { menuOpen, setMenuOpen, refMenu } ) => {
  const refButton = useRef();

  const handler = (e) => {
    if (e.target === refMenu.current) {
      return;
    }

    if (e.target !== refButton.current) {
      setMenuOpen(false);
    }

  };

  useEffect(() => {

    window.addEventListener('click', handler);

    return () => {
      window.addEventListener('click', handler);
    }
  })

  return (
    <>
      <div className="main-menu">
        <Link to="/">
          <img className="main-menu__logo" src={logo} alt="logo"/>
        </Link>

        <button
          ref={refButton}
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
