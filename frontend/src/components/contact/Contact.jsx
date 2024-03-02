import "../../styles/contact/contact.css";
import FormField from "./FormField";
import FormCountry from "./FormCountry";
import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { public_key, template } from "../../utils/environmentVariables";
const Contact = () => {
  const form = useRef();
  const [error, setError] = useState({

    name: "",
    lastName: "",
    email: "",
    phone: "",
    bussines: "",
    message: ""
  })

  const checkMail = (obj) => {
    for (let key in obj) {
      if (obj[key] !== "") {
        return false; // Si alguna propiedad no está vacía, retorna false
      }
    }
    return true;

  }
  const sendEmail = (e) => {
    e.preventDefault();

    if (checkMail(error)) {

      emailjs
        .sendForm(template, 'template_gbzxunm', form.current, {
          publicKey: public_key,
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };


  return (
    <div className="contact__container" id="contactus">
      <h2 className="contacto__h2">Datos de Contacto</h2>
      <form className="contact__form" ref={form} onSubmit={sendEmail}>
        <FormField
          id="name"
          name="name"
          label="Nombre"
          type="text"
          setError={setError}
          error={error} />
        <FormField
          id="lastName"
          name="lastName"
          label="Apellido"
          type="text"
          setError={setError}
          error={error} />
        <FormField
          id="email"
          name="email"
          label="Email"
          type="text"
          setError={setError}
          error={error} />
        <div className="contact__form--group">
          <FormCountry />
          <FormField
            id="phone"
            name="phone"
            label="Telefono"
            type="number"
            setError={setError} />
        </div>
        <FormField
          id="bussines"
          name="bussines"
          label="Empresa/Razon Social"
          type="text"
          setError={setError}
          error={error} />
        <FormField
          id="message"
          name="message"
          label="Mensaje"
          type="text"
          setError={setError}
          error={error} />
        <button type="submit" className="contact__btn">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
