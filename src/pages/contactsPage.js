import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { MapLeaflet } from '../components/mapLeaflet';
import emailjs from '@emailjs/browser';
import classNames from "classnames";


export const ContactsPage = () => {
  const [submitting, setSubmitting] = useState(false);

  const [{
    name,
    email,
    phone,
    subject,
    message
  }, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
  });


  const handleChange = (event) => {
    const { name: field, value } = event.target;

    setValues(current => ({ ...current, [field]: value }));
    setErrors(current => ({ ...current, [field]: false }));
  };

  const clearForm = () => {
    setValues({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });

    setErrors({
      name: false,
      email: false,
      phone: false,
      subject: false,
      message: false,
    });
  };


  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitting(true)

    setErrors({
      name: !name,
      email: !email,
      message: !message,
      phone: !phone,
      subject: !subject,
    });

    if (!name || !email || !message || !phone || !subject) {
      setSubmitting(false);
      return;
    }

    emailjs.sendForm('service_9b8hu7h', 'template_a9nz65p', formRef.current, 'FJ8XykqucxwlwNMeM')
      .then(result => {
        setSubmitting(false);
        clearForm();
      }, (error) => {
        setSubmitting(false)
        console.log(error.text);
      });
  };

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

            <form className="form" ref={formRef} onReset={clearForm} onSubmit={sendEmail}>
              <label className="form__lable" htmlFor="name">
                Your Name
                <input
                  className={classNames('form__field', { 'is-danger': errors.name })}
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="help">Name is required</p>
                )}
              </label>

              <label className="form__lable" htmlFor="email">
                Your email
                <input
                  className={classNames('form__field', { 'is-danger': errors.email })}
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="help">Email is required</p>
                )}
              </label>

              <label className="form__lable" htmlFor="phone">
                Phone
                <input
                  className={classNames('form__field', { 'is-danger': errors.phone })}
                  type="text"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <p className="help">Phone is required</p>
                )}
              </label>

              <label className="form__lable" htmlFor="subject">
                Subject
                <input
                  className={classNames('form__field', { 'is-danger': errors.subject })}
                  type="text"
                  name="subject"
                  id="subject"
                  value={subject}
                  onChange={handleChange}
                />
                {errors.subject && (
                  <p className="help">Subject is required</p>
                )}
              </label>


              <label className="form__lable grid-1-3" htmlFor="message">
                Message
                <textarea
                  className={classNames('form__field__area', { 'is-danger': errors.message })}
                  name="message"
                  id="message"
                  rows={4}
                  cols={40}
                  value={message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <p className="help help--position-area">Message is required</p>
                )}

              </label>

            </form>

                <button
                  type="submit"
                  onClick={sendEmail}
                  className={classNames('button', 'btn', 'btn--dark_purple', 'btn--position', 'btn-space', {
                    'btn--loading' : submitting
                  })}
                >
                  <span className={classNames({ 'btn-text--hidden': submitting })}>
                    Send now
                  </span>
                </button>

            <MapLeaflet />
          </div>
        </div>
      </div>
    </div>
  </>
};
