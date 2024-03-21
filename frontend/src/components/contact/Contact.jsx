import "../../styles/contact/contact.css";
import FormField from "./FormField";
import FormCountry from "./FormCountry";
import TextArea from  "./TextArea";
import { useState } from "react";
import React, { useRef } from 'react';
import { sendEmail } from "../../utils/sendEmail";
import {  useNavigate } from "react-router";


const Contact = () => {
  const form = useRef();
  const navigate = useNavigate()


  const [error, setError] = useState({

    name: "",
    lastName: "",
    email: "",
    phone: "",
    bussines: "",
    message: "",
    country: ""

  })

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    bussines: "",
    message: "",
    country: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    sendEmail(error,form, setFormData, navigate)
  }


  return (
    <div className="contact__container" id="contactus">
      <h2 className="contacto__h2">Contacto</h2>
      <form className="contact__form" ref={form} onSubmit={handleSubmit}>
        <FormField
          id="name"
          name="name"
          label="Nombre"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
          setError={setError}
          error={error} />
        <FormField
          id="lastName"
          name="lastName"
          label="Apellido"
          type="text"
          value={formData.lastName}
          onChange={handleInputChange}
          setError={setError}
          error={error} />
        <FormField
          id="email"
          name="email"
          label="Email"
          type="text"
          value={formData.email}
          onChange={handleInputChange}
          setError={setError}
          error={error} />
        <div className="contact__form--group">
          <FormCountry
            setError={setError}
            name="country"
            error={error}
            value={formData.country}
            onChange={handleInputChange}
          />
          <FormField
            id="phone"
            name="phone"
            label="Telefono"
            type="number"
            value={formData.phone}
            onChange={handleInputChange}
            setError={setError}
            error={error}
          />
        </div>
        <FormField
          id="bussines"
          name="bussines"
          label="Empresa/Razón social"
          type="text"
          value={formData.bussines}
          onChange={handleInputChange}
          setError={setError}
          error={error} />
        <TextArea
          id="message"
          name="message"
          label="Mensaje"
          value={formData.message}
          onChange={handleInputChange}
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
