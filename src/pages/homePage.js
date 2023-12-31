import React from 'react';
import welcome from "../img/welcome.svg";
import image__about1 from "../img/image__about1.png";
import image__about2 from "../img/image__about2.png";
import about__logo from "../img/about-ESH-alpha2.svg";
import service__logo from "../img/service__logo.svg";
import { Card } from "../components/cards/Card";
import { Link } from "react-router-dom";
import dataServices from '../content';
import settings from '../img/settings.svg'
import assessment from '../img/assessment.svg'
import account from '../img/account.svg'

export const HomePage = () => {
  const imgCard = [settings, assessment, account];

  const randomImg = () => {
    const randomNum = Math.trunc(Math.random() * 3);

    return imgCard[randomNum];
  }

  return (
    <>
      <header className="header header__main-page" id="home">
        <div className="header__bottom">
          <div className="header__content">
            <div className="title title__space">
              <h1>
                <span className="title__normal">Welcome to</span>
                <br/>
                <span className="title__strong">ESH Alpha</span>
              </h1>
            </div>
            <span className="header__text">
            Lorem ipsum dolor sit amet consectetur. Facilisis auctor a diam cursus amet.
            Molestie metus morbi purus amet malesuada proin amet facilisis.
          </span>
            <Link
              to="/contacts"
              className="btn btn--header"
              type="btn"
            >
              Contact us
            </Link>
          </div>

          <div className="header__content-image">
            <div className="header__image"></div>
          </div>
        </div>
      </header>

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
              className="btn btn--color_about"
              type="btn"
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
            {dataServices.cards.map(card => (
              <Card
                key={card.id}
                title={card.title}
                text={card.description}
                image={randomImg()}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
