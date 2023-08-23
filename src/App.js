import './App.scss';
import welcome from './img/welcome.svg'
import { Menu } from "./components/menu-mobile/Menu";
import { useState } from "react";
import { MainMenu } from "./components/main-menu/Main-menu";
import image__about1 from './img/image__about1.png';
import image__about2 from './img/image__about2.png';
import about__logo from './img/about-ESH-alpha2.svg'
import service__logo from './img/service__logo.svg'
import { Card } from "./components/cards/Card";
import settings from './components/cards/img/settings.svg';
import assessment from './components/cards/img/assessment.svg';
import account from './components/cards/img/account.svg';
import footer__logo from './img/footer__logo.svg';
import footer__title from './img/footer__title.svg';
import call from './img/phone.svg';
import email from './img/email.svg';
import location from './img/location.svg';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <MainMenu
        setMenuOpen={setMenuOpen}
        menuOpen={menuOpen}
      />
      <header className="header" id="home">
        <div className="header__bottom">
          <div className="header__content">
            <img className="header__welcome" src={welcome} alt="Welcome to ESH Aplha"/>
            <span className="header__text">
            Lorem ipsum dolor sit amet consectetur. Facilisis auctor a diam cursus amet.
            Molestie metus morbi purus amet malesuada proin amet facilisis.
          </span>
            <button className="button button--header" type="submit">Contact us</button>
          </div>

          <div className="header__content-image">
            <div className="header__image"></div>
          </div>
        </div>
      </header>

      {menuOpen && <Menu />}

      <main>
        <section className="content about" id="about">
          <div className="about__images">
            <img className="img1" src={image__about1} alt="about 1"/>
            <img className="img2" src={image__about2} alt="about 1"/>
          </div>

          <div className="about__describe">
            <img className="about__logo" src={about__logo} alt="logo about"  />
            <span className="about__text">
              Lorem ipsum dolor sit amet consectetur. Fames tempor enim molestie rutrum tempus dui arcu. Eu ultrices ut est ut adipiscing lorem. Proin nisi sollicitudin erat diam felis euismod vehicula sit.
            </span>
            <br/>
            <span className="about__text about__text--space">
              Cras egestas sit faucibus nunc et. Enim vitae egestas arcu bibendum auctor in sed eget. Vulputate etiam quis lacus congue. Dapibus sed lacinia id enim dui aliquam purus faucibus. Eu lorem id sit ornare odio dictum sed dignissim.
            </span>

            <button
              className="button button--color_about"
              type="button"
            >
              Read more
            </button>
          </div>


        </section>

        <section className="service" id="service">
          <img
            className="service__logo"
            src={service__logo}
            alt="service logo"
          />
          <div className="cards">
            <Card
              title="Lorem ipsum"
              text="
             Lorem ipsum dolor sit amet consectetur. Facilisis auctor a diam cursus amet."
              image={settings}
            />

            <Card
              title="Lorem ipsum"
              text="
             Lorem ipsum dolor sit amet consectetur. Facilisis auctor a diam cursus amet."
              image={account}
            />

            <Card
              title="Lorem ipsum"
              text="
             Lorem ipsum dolor sit amet consectetur. Facilisis auctor a diam cursus amet."
              image={assessment}
            />

            <Card
              title="Lorem ipsum"
              text="
             Lorem ipsum dolor sit amet consectetur. Facilisis auctor a diam cursus amet."
              image={assessment}
            />

            <Card
              title="Lorem ipsum"
              text="
             Lorem ipsum dolor sit amet consectetur. Facilisis auctor a diam cursus amet."
              image={assessment}
            />

            <Card
              title="Lorem ipsum"
              text="
             Lorem ipsum dolor sit amet consectetur. Facilisis auctor a diam cursus amet."
              image={assessment}
            />

          </div>
        </section>
      </main>

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
            <h3>Services</h3>
            <ul className="footer__service-list">
              <li className="footer__service-item"><a className="footer__service-link" href="#">Lorem</a></li>
              <li className="footer__service-item"><a className="footer__service-link" href="#">Services</a></li>
              <li className="footer__service-item"><a className="footer__service-link" href="#">Facilisis</a></li>
              <li className="footer__service-item"><a className="footer__service-link" href="#">Lorem</a></li>
              <li className="footer__service-item"><a className="footer__service-link" href="#">Lorem ipsum</a></li>
              <li className="footer__service-item"><a className="footer__service-link" href="#">Facilisis</a></li>
              <li className="footer__service-item"><a className="footer__service-link" href="#">Lorem ipsum</a></li>
              <li className="footer__service-item"><a className="footer__service-link" href="#">Services</a></li>
              <li className="footer__service-item"><a className="footer__service-link" href="#">Facilisis</a></li>
            </ul>
          </div>
        </div>
        <p className="footer__sign">© 2023 ESH Alpha all rights reserved</p>
      </footer>
    </>
  )
}

export default App;
