import React, { useEffect } from 'react';
import './main-menu.scss';
import logo from "../../img/logo.svg";
import classNames from "classnames";

export const MainMenu = ({ setMenuOpen, menuOpen }) => {


  useEffect(() => {

  });

  return (
    <>
      <div className="main-menu">
        <a href="#">
          <img className="main-menu__logo" src={logo} alt="logo"/>
        </a>

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
            <a href="" className="nav__link">Home</a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__link">Service</a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__link">Contacts</a>
          </li>
        </ul>
      </div>
    </>
  );
};
