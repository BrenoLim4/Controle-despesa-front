import { Input as InputStyled } from "../Container/componentsStyle";

const Input = (props) => {

  const { type, placeholder, required, value, setValue } = props;

  const handleChangeValue = (e) => {
    // e.preventDefault();
    setValue(e.target.value)
  }

  // console.log(props);

  return (
    <>
      <InputStyled type={type}
        onChange={handleChangeValue}
        placeHolder={placeholder}
        required={required}
        value={value} />
      {/* <input 
          type={type} 
          onChange={handleChangeValue} 
          placeHolder={placeholder} 
          required={required} 
          value={value}/> */}

    </>
  )
}

export default Input;