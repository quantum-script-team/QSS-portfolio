export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validatePhone = (phone) => {
  const regex = /^\d{10}$/;
  return regex.test(phone);
};

export const validation = (otherInputValue, event, setError) => {
  if (!otherInputValue) {
    setError((prevValue) => {
      return { ...prevValue, [event.target.name]: "Este campo es obligatorio" };
    });
  } else {
    if (event.target.name === "email") {
      if (!validateEmail(otherInputValue)) {
        setError((prevValue) => {
          return {
            ...prevValue,
            [event.target.name]:
              "La dirección de correo electrónico no es válida",
          };
        });
      } else {
        setError((prevValue) => {
          return { ...prevValue, [event.target.name]: "" };
        });
      }
    } else if (event.target.name === "phone") {
      if (!validatePhone(otherInputValue)) {
        setError((prevValue) => {
          return {
            ...prevValue,
            [event.target.name]: "El numero ingresado no es válido",
          };
        });
      } else {
        setError((prevValue) => {
          return { ...prevValue, [event.target.name]: "" };
        });
      }
    } else {
      if (otherInputValue) {
        setError((prevValue) => {
          return { ...prevValue, [event.target.name]: "" };
        });
      }
    }
  }
};
