import '../../styles/contact/contact.css'
import FormField from './FormField'

const Contact = () => {
  return (
    <div className="contact__container">
      <h2 className='contacto__h2'>Datos de Contacto</h2>
      <form className='contact__form'>
        <FormField 
          id="name"
          label="Nombre"
          type="text"
          placeholder="Nombre"
          required
          />
        <FormField 
          id="lastName"
          label="Apellido"
          type="text"
          placeholder="Apellido"
          required
          />
        <div className='contact__form--group'>
        <FormField 
          id="country"
          label="Pais"
          type="select"
          placeholder="Pais"
          required
          />
          <FormField 
          id="phone"
          label="Telefono"
          type="number"
          placeholder="Telefono"
          required
          />
        </div>
          <FormField 
          id="bussines"
          label="Empresa/Razon Social"
          type="text"
          placeholder="Empresa/Razon Social"
          required
          />
          <textarea className='contact__form--textarea'></textarea>
        <button type="submit" className="btn">Enviar</button>
      </form>
    </div>
  )
}

export default Contact
