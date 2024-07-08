
import { useState } from "react";

export const AgregarTarea = ({agregarTarea}) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = (event) => {
        setInputValue(event.target.value);
        // console.log(inputValue);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        agregarTarea(inputValue);
    }

  return (
    <form onSubmit={onSubmit}>
        <input type="text" onChange={onInputChange} value={inputValue} placeholder="Ingrese una nueva tarea" />
    </form>
  )
}
