import React from 'react';
import welcome from "../img/welcome.svg";
import image__about1 from "../img/image__about1.png";
import image__about2 from "../img/image__about2.png";
import about__logo from "../img/about-ESH-alpha2.svg";
import service__logo from "../img/service__logo.svg";
import { Card } from "../components/cards/Card";
import settings from "../components/cards/img/settings.svg";
import account from "../components/cards/img/account.svg";
import assessment from "../components/cards/img/assessment.svg";

export const HomePage = () => {
  return (
    <>
      {/*<MainMenu*/}
      {/*  setMenuOpen={setMenuOpen}*/}
      {/*  menuOpen={menuOpen}*/}
      {/*/>*/}
      <header className="header header__main-page" id="home">
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

      {/*<Footer />*/}
    </>
  );
};
