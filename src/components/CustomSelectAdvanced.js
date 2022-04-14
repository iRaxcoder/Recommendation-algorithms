const CustomSelectAdvanced = ({ register, name, options, ...rest }) =>{
    return (
      <select {...register(name)} {...rest}>
          {options.map((object,i)=>(
               <option key={i} value={i}>{object}</option>
          ))}
    </select>
    )
  }
  
  export default CustomSelectAdvanced;