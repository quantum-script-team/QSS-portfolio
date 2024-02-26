import { useState } from "react";
import TextField from "@mui/material/TextField";

const FormField = ({ id, label, type, placeholder }) => {
  const [otherInputValue, setOtherInputValue] = useState("");
  const [isValidOtherInput, setIsValidOtherInput] = useState(true);

  const handleOtherInputChange = (event) => {
    const inputValue = event.target.value;
    setOtherInputValue(inputValue);
    setIsValidOtherInput(true);
    console.log("Other Input Value:", inputValue);
  };

  const handleOtherInputBlur = () => {
    setIsValidOtherInput(!!otherInputValue.trim()); // Valida en el evento blur
  };

  return (
    <>
      <TextField
        color={isValidOtherInput ? "success" : "error"}
        id={id}
        label={label}
        type={type}
        variant="outlined"
        placeholder={placeholder}
        value={otherInputValue}
        onChange={handleOtherInputChange}
        onBlur={handleOtherInputBlur}
        required
      />
    </>
  );
};

export default FormField;
