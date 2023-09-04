import React from 'react';
import './service.scss';
import { ServiceCard } from "../../components/ServiceCard";
import img__card1 from "../../img/service_img_small.svg";
import img__card2 from "../../img/service_img_big.svg";
import content from '../../content';


export const ServicePage = () => {

  const description = <>
    <p>
      Lorem ipsum dolor sit amet consectetur. Fames tempor enim molestie rutrum tempus dui arcu. Eu ultrices ut est ut adipiscing lorem. Proin nisi sollicitudin erat diam felis euismod vehicula sit.
    </p>
    <br/>
    <p>
      Cras egestas sit faucibus nunc et. Enim vitae egestas arcu bibendum auctor in sed eget. Vulputate etiam quis lacus congue. Dapibus sed lacinia id enim dui aliquam purus faucibus. Eu lorem id sit ornare odio dictum sed dignissim.
    </p>
  </>


  return <>
    <header className="header header__service-page">
      <div className="header__service__content">
        <div className="title">
          <h1>
            <span className="title__normal">Our</span>
            &nbsp;
            <span className="title__strong">Services</span>
          </h1>
        </div>
        <span className="header__service__text">
          Lorem ipsum dolor sit amet consectetur.
          Facilisis auctor a diam cursus amet.
          Molestie metusmorbi purus amet
          malesuada proin amet facilisis.
        </span>
      </div>
    </header>
    <main className="main">

      {content.services.map((serv, index) => {
        const { mainTitle, subTitle, description} = serv;

        return (
          <ServiceCard
            styleCard={index % 2 !== 0 ? true : false}
            imgSmall={img__card1}
            imgBig={img__card2}
            title={mainTitle}
            subTitle={subTitle}
            description={description}
          />
        )
      })}




        {/*<ServiceCard />*/}
        {/*<ServiceCard />*/}
        {/*<ServiceCard />*/}
        {/*<ServiceCard />*/}


      {/*<div className="service__card">*/}
      {/*  <div className="service__card__top">*/}
      {/*    <div className="service__card__img--reverce">*/}
      {/*      <div className="card__ing1--r">*/}
      {/*        <div className="card__ing2--r"></div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="service__card__bottom">*/}
      {/*    <h2 className="service__card__title">*/}
      {/*    <span className="service__card__title--purple">*/}
      {/*      Services*/}
      {/*    </span>*/}
      {/*      <br/>*/}
      {/*      <span className="service__card__title--bold">*/}
      {/*        For Business Solutions*/}
      {/*      </span>*/}
      {/*    </h2>*/}
      {/*    <div className="service__card__description">*/}
      {/*      <p>*/}
      {/*        Lorem ipsum dolor sit amet consectetur. Fames tempor enim molestie rutrum tempus dui arcu. Eu ultrices ut est ut adipiscing lorem. Proin nisi sollicitudin erat diam felis euismod vehicula sit.*/}
      {/*      </p>*/}
      {/*      <br/>*/}
      {/*      <p>*/}
      {/*        Cras egestas sit faucibus nunc et. Enim vitae egestas arcu bibendum auctor in sed eget. Vulputate etiam quis lacus congue. Dapibus sed lacinia id enim dui aliquam purus faucibus. Eu lorem id sit ornare odio dictum sed dignissim.*/}
      {/*      </p>*/}

      {/*    </div>*/}

      {/*    <button*/}
      {/*      type="btn"*/}
      {/*      className="btn btn--dark_purple"*/}
      {/*    >*/}
      {/*      Start*/}
      {/*    </button>*/}

      {/*  </div>*/}

      {/*</div>*/}

    </main>
  </>
};
