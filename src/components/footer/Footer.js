import React from 'react';
import './footer.scss'
import footer__logo from "../../img/footer__logo.svg";
import footer__title from "../../img/footer__title.svg";
import call from "../../img/phone.svg";
import location from "../../img/location.svg";
import email from "../../img/email.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__top">
          <div className="footer__title">
            <a href="#">
              <img src={footer__logo} alt="footer logo" />
            </a>
            <img src={footer__title}  alt="title footer"/>
          </div>

          <div className="footer__contacts">
            <ul className="contacts">
              <li>
                <img src={call} alt="phoen number"/>
                <a href="tel:+38 099 999 99 99" className="link">
                  +38 099 999 99 99
                </a>
              </li>
              <li>
                <img src={location} alt="location"/>
                <a href="https://www.google.com/maps/search/780+E+15th+Floor,+Z+Tower+New+York,+USA/@40.5884939,-73.9548903,17z/data=!3m1!4b1?entry=ttu"
                   target="_blank"
                   rel="noreferrer"
                   className="link"
                >
                  Location
                </a>
              </li>
              <li>
                <img src={email} alt="email"/>
                <a href="mailto:eshalpha@mailing.com" className="link">
                  eshalpha@mailing.com
                </a><
                /li>
            </ul>
          </div>

        </div>
        <div className="footer__bottom">

          <h3 className="list__title">Services</h3>

          <ul className="footer__service-list">
            <li className="list__item">
              <a className="list__link" href="#">Lorem</a>
            </li>
            <li className="list__item">
              <a className="list__link" href="#">Services</a>
            </li>
            <li className="list__item">
              <a className="list__link" href="#">Facilisis</a>
            </li>
            <li className="list__item">
              <a className="list__link" href="#">Lorem</a>
            </li>
            <li className="list__item">
              <a className="list__link" href="#">Services</a>
            </li>
            <li className="list__item">
              <a className="list__link" href="#">Lorem</a>
            </li>
            <li className="list__item">
              <a className="list__link" href="#">Lorem</a>
            </li>
            <li className="list__item">
              <a className="list__link" href="#">Lorem</a>
            </li>
          </ul>

        </div>
      </div>
      <p className="footer__sign">© 2023 ESH Alpha all rights reserved</p>
    </footer>
  );
};
