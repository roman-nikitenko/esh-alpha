import React from 'react';
import { Link } from "react-router-dom";


export const ContactsPage = () => {
  return <>
    <div className="contact__page">
      <div className="contact__block">
        <div className="contact__block__top">
          <div className="contact__block__image"></div>
          <div className="contact__block__main">
            <div className="contact__block__title">
              <h2 className="title__h2">
                <span
                  className="title__normal title__normal--purple"
                >
                  Contact
                </span>
                <br/>
                <span className="title__storng">Information</span>
              </h2>
              <p className="title__description">
                Lorem ipsum dolor sit amet consectetur. Facilisis auctor a diam cursus amet.
              </p>
            </div>

            <div className="contact__block__contacts">
              <div className="mini__block">
                <h3>Office</h3>
                <a href="https://www.google.com/maps/search/780+E+15th+Floor,+Z+Tower+New+York,+USA/@40.5884939,-73.9548903,17z/data=!3m1!4b1?entry=ttu"
                   target="_blank"
                   rel="noreferrer"
                   className="mini__block__link">
                  780 E 15th Floor, Z Tower
                  <br/>
                  New York, USA
                </a>
              </div>
              <div className="mini__block">
                <h3>Mail us</h3>
                <a href="mailto: eshalpha@mail.com"
                   className="mini__block__link"
                >
                  eshalpha@mail.com
                </a>
              </div>
              <div className="mini__block">
                <h3>Phone</h3>
                <a href="tel: +12 345 678 91 00"
                   className="mini__block__link"
                >
                  +12 345 678 91 00
                </a>
              </div>
              <div className="mini__block">
                <h3>Web</h3>
                <Link className="mini__block__link" to="/">
                  www.eshalpha.com
                </Link>
              </div>

            </div>
          </div>
        </div>

        <div className="contact__block__bottom">
          <div className="contact__block__form">
            <h2 className="contact__block__title">
              Love to hear <span className="contact__block__title--stong">from you,leave a</span>  message
            </h2>

            <form className="form">
              <label className="form__lable" htmlFor="name">
                Your Name
                <input className="form__field" type="text" name="name" id="name"/>
              </label>

              <label className="form__lable" htmlFor="email">
                Your email
                <input className="form__field"  type="email" name="email" id="email" />
              </label>

              <label className="form__lable" htmlFor="phone">
                Phone
                <input className="form__field"  type="text" name="phone" id="phone" />
              </label>

              <label className="form__lable" htmlFor="sunject">
                Subject
                <input className="form__field"  type="text" name="sunject" id="sunject" />
              </label>


              <label className="form__lable grid-1-3" htmlFor="message">
                Message
                <textarea
                  className="form__field__area"
                  name="message"
                  id="message"
                  rows={4}
                  cols={40}
                />
              </label>


            </form>
            <button type="submit" className="button button--dark_purple button--position">
              Send now
            </button>
          </div>
        </div>


      </div>
    </div>
  </>
};
