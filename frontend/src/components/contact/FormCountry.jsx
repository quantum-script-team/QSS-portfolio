import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { countries } from "../../data/countries.json";

const FormCountry = () => {
  const [country, setCountry] = useState("");
  const [isValidCountry, setIsValidCountry] = useState(true);

  const handleChangeCountry = (event) => {
    const selectedValue = event.target.value;
    setCountry(selectedValue);
    setIsValidCountry(true);
    console.log("Selected Country:", selectedValue);
  };

  const handleCountryBlur = () => {
    setIsValidCountry(!!country); // Valida en el evento blur
  };

  return (
    <FormControl fullWidth>
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
      >
        {countries.map((country) => (
          <MenuItem key={country.id} value={country.id}>
            {country.nombre}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FormCountry;
