import { useState } from 'react';


//Como parametro de un componente siempre se reciben las props pero comunmente de destructuran como se ve en la siguiente linea
export const AddCategory = ({onAddCategory}) => {

  const [ inputValue, setInputValue ] = useState('')

  // En la linea siguiente destructuro el el e.target
  const onInputChange = ({ target })=>{

    setInputValue(target.value)

  }

  const onSubmit = (event)=>{
    event.preventDefault();

    if (inputValue === '') return
    onAddCategory(inputValue.trim());
    setInputValue('')
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
      type="text"
      placeholder="Buscar gifs"
      id="testText"
      value={inputValue}
      //En la linea siguiente resumo la funcion. Osea es lo mismo que poner (e)=> onInputChange(e)
      onChange={onInputChange}
      />
    </form>

    )
}
