import TextField from "@mui/material/TextField";
import { validation } from "../../validations/contact";

const TextArea = ({ id, label, name, setError, error, onChange, value }) => {

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
          name={name}
          value={value}
          onChange={onChange}
          onBlur={handleOtherInputBlur}
          multiline
          sx={{marginTop: "20px", width: "100%"}}
          required
        />
        {error && error[id] && <span className="form__validation">{error[id]}</span>}
      </div>
    </>
  );
};

export default TextArea;
