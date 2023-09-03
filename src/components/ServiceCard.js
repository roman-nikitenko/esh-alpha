import React from 'react';
import img__card1 from "../pages/service/service-img/service_img_big.svg";
import img__card2 from "../pages/service/service-img/service_img_small.svg";

export const ServiceCard = () => {
  return <>
    <div className="service__card">
      <div className="service__card__top">
        <div className="twice__image">
          <img
            src={img__card1}
            alt="big"
            className="img--big"
          />
          <img
            src={img__card2}
            alt="small"
            className="img--small"
          />
        </div>
      </div>
      <div className="service__card__bottom">
        <h2 className="service__card__title">
          <span className="service__card__title--purple">
            Services
          </span>
          <br/>
          <span className="service__card__title--bold">
              For Business Solutions
            </span>
        </h2>
        <div className="service__card__description">
          <p>
            Lorem ipsum dolor sit amet consectetur. Fames tempor enim molestie rutrum tempus dui arcu. Eu ultrices ut est ut adipiscing lorem. Proin nisi sollicitudin erat diam felis euismod vehicula sit.
          </p>
          <br/>
          <p>
            Cras egestas sit faucibus nunc et. Enim vitae egestas arcu bibendum auctor in sed eget. Vulputate etiam quis lacus congue. Dapibus sed lacinia id enim dui aliquam purus faucibus. Eu lorem id sit ornare odio dictum sed dignissim.
          </p>

        </div>

        <button
          type="button"
          className="btn btn--dark_purple"
        >
          Start
        </button>
      </div>
    </div>
  </>
};
