
const Input = (props) => {
    
    const {type, placeholder, required, value, setValue} = props;

    const handleChangeValue = (e) =>{
        // e.preventDefault();
        setValue(e.target.value)
    }

    // console.log(props);

    return (
        <>
        <input 
        type={type} 
        onChange={handleChangeValue} 
        placeHolder={placeholder} 
        required={required} 
        value={value}/>
        </>
    )
}

export default Input;