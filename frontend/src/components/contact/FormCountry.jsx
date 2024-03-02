import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { countries } from "../../data/countries.json";
import { validation } from "../../validations/contact";

const FormCountry = ({setError, name, error}) => {
  const [country, setCountry] = useState("");
  const [isValidCountry, setIsValidCountry] = useState(true);

  const handleChangeCountry = (event) => {
    const selectedValue = event.target.value;
    setCountry(selectedValue);
    setIsValidCountry(true);
  };
  
  const handleCountryBlur = (event) => {
    setIsValidCountry(!!country); 
    validation(country, event, setError)
  };

  return (
    <FormControl fullWidth sx={{marginTop: "20px", marginRight: {sm: "20px"}}}>
      <InputLabel id="demo-simple-select-label">Pais</InputLabel>
      <Select
        required
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={country}
        label="Pais"
        onChange={handleChangeCountry}
        onBlur={handleCountryBlur}
        color={isValidCountry ? "success" : "error"}
        name={name}
      >
        {countries.map((country) => (
          <MenuItem key={country.id} value={country.nombre} >
            {country.nombre}
          </MenuItem>
        ))}
      </Select>
      {error && error[name] && <span className="form__validation">{error[name]}</span>}
    </FormControl>
  );
};

export default FormCountry;
