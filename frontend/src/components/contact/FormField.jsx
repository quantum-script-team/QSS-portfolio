import { useState } from "react";
import TextField from "@mui/material/TextField";
import { validation } from "../../validations/contact";

const FormField = ({ id, label, type, placeholder, name, setError, error,onChange, value }) => {
  const handleOtherInputBlur = (event) => {
    value = value.trim()

    validation(value, event, setError);
  };

  return (
    <>
      <div className="form__field--container">
        <TextField
          color={error[name] ? "error" : "success"}
          id={id}
          label={label}
          type={type}
          name={name}
          variant="outlined"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={handleOtherInputBlur}
          sx={{marginTop: "20px", width: "100%"}}
          required
        />
        {error && error[id] && <span className="form__validation">{error[id]}</span>}
      </div>
    </>
  );
};

export default FormField;
