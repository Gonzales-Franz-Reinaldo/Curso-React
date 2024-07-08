
// const Button = () => {
//   return (
//     <button>Soy un boton</button>
//   )
// }




// export const ContadorApp = ({value}) => {

//     function handerClick() {
//         value += 1;
//         console.log(value);
//     }

//   return (
//     <>
//         <h1>Contador de clicks</h1>
//         <p>{value}</p>
//         <button onClick={handerClick}>Soy boton</button>
//     </>
//   )
// }





//? USO DE HUBS - ESTADOS

import { useState } from "react";

export const ContadorApp = ({value}) => {

    const [contador, setContador] = useState(value);

    function handerClick() {
        setContador(contador + 1);
    }

    return (
        <>
            <h1>Contador de clicks</h1>
            <p>{contador}</p>
            <button onClick={handerClick}>Soy boton</button>
        </>
    )
}