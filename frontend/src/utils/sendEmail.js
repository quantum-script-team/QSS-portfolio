import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const checkMail = (obj) => {
    for (let key in obj) {
      if (obj[key] !== "") {
        return false
      }
    }
    return true;

  }

export const sendEmail = (error,form, setFormData, navigate) => {
    if (checkMail(error)) {

      emailjs
         .sendForm("service_w3bq1fj", "template_o2lanma", form.current, {
          publicKey: "cXEjsdNq5mbGm570m",
        })
        .then(
          () => {

              Swal.fire({
                  icon: "success",
                  text: "Su consulta fue enviada con exito, pronto nos pondremos en contacto.",
                  confirmButtonText: 'Aceptar',
                  confirmButtonColor: "#2cb67d",
                  
                  didOpen: () => {
                    const acceptButton = Swal.getConfirmButton();
                      acceptButton.addEventListener('click', () => {
                        
                        
                        setFormData({
                          name: "",
                          lastName: "",
                          email: "",
                          phone: "",
                          bussines: "",
                          message: "",
                          country: ""
                        })
                        setTimeout(() => {
                          window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll hacia arriba después de 2 segundos
                          navigate("/");
                        }, 2000);
                      });
                    }
                  },
                  
                  )
                  
                }
          ,
          
          (error) => {
            Swal.fire({
              icon: "warning",
              html: `<p>Su consulta no pudo ser enviada. Puede mandarnos su consulta por este e-mail: <a href=mailto:${"contact.quantumscript@gmail.com"}>contact.quantumscript@gmail.com</a></p>`,
              confirmButtonColor: "#2cb67d",
            })          },
            );
          }
        };