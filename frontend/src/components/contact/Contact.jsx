import "../../styles/contact/contact.css";
import FormField from "./FormField";
import FormCountry from "./FormCountry";

const Contact = () => {
  return (
    <div className="contact__container">
      <h2 className="contacto__h2">Datos de Contacto</h2>
      <form className="contact__form">
        <FormField
          id="name"
          label="Nombre"
          type="text"
        />
        <FormField
          id="lastName"
          label="Apellido"
          type="text"
        />
        <div className="contact__form--group">
          <FormCountry/>
          <FormField
            id="phone"
            label="Telefono"
            type="number"
          />
        </div>
        <FormField
          id="bussines"
          label="Empresa/Razon Social"
          type="text"
        />
        <FormField
          id="message"
          label="Mensaje"
          type="text"
        />
        <button type="submit" className="contact__btn">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
