import TextField from '@mui/material/TextField';

const FormField = ({ id, label, type, placeholder, required }) => {
  return (
    <>
      <TextField 
        id={id} 
        label={label} 
        type={type}
        variant="outlined" 
        placeholder={placeholder}
        required
      />
    </>
  )
}

export default FormField;
