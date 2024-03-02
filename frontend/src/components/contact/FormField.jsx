import { useState } from "react";
import TextField from "@mui/material/TextField";
import { validation } from "../../validations/contact";

const FormField = ({ id, label, type, placeholder, name, setError, error }) => {
  const [otherInputValue, setOtherInputValue] = useState("");
  const [isValidOtherInput, setIsValidOtherInput] = useState(true);
  const [isFieldEmpty, setIsFieldEmpty] = useState(false);

  const handleOtherInputChange = (event) => {
    const inputValue = event.target.value;

    setOtherInputValue(inputValue);
    setIsValidOtherInput(true);
  };

  const handleOtherInputBlur = (event) => {
    // const {name} = event.target.name
    setIsValidOtherInput(!!otherInputValue.trim()); // Valida en el evento blur
    setIsFieldEmpty(!otherInputValue.trim());

    validation(otherInputValue, event, setError);
  };
  return (
    <>
      <TextField
        color={isValidOtherInput ? "success" : "error"}
        id={id}
        label={label}
        type={type}
        name={name}
        variant="outlined"
        placeholder={placeholder}
        value={otherInputValue}
        onChange={handleOtherInputChange}
        onBlur={handleOtherInputBlur}
        sx={{marginTop: "20px", width: "100%"}}
        required
      />
      {error && error[id] && <span className="form__validation">{error[id]}</span>}
    </>
  );
};

export default FormField;
