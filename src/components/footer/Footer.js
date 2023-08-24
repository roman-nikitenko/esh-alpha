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
                <a href="https://www.google.com.ua/maps/place/%D1%83%D0%BB.+%D0%9A%D1%80%D0%B5%D1%89%D0%B0%D1%82%D0%B8%D0%BA,+%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.4475854,30.5194508,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4ce56b2456d3b:0xd062ae171b57e947!8m2!3d50.4475854!4d30.5220257!16zL20vMDlydmhu?hl=ru&entry=ttu"
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
