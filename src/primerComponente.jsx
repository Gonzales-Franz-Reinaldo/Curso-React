
//? Funcion de Componetes 
// function PrimerComponente() {
//     return ( <h1>Hola Mundo!</h1> );
// }

// export default PrimerComponente;


// //? Clase de Componentes
// import { Component } from 'react';

// class PrimerComponente extends Component {
//   state = {  } 
//   render() { 
//     return (
//       <div>
//         <h1>Hola Mundo!</h1>
//         <p>Este es mi primer componente</p>
//         <p>Mi nombre es Juan</p>
//         <p>Mi edad es 22</p>
//       </div>
//     );
//   }
// }

// export default PrimerComponente;


//? Componentes rfc

// import PropTypes from 'prop-types';

// export const PrimerComponente = ({ nombre, edad }) => {
//   return (
//     <div>
//       <h1>Hola Mundo!</h1>
//       <p>Este es mi primer componente</p>
//       <p>Mi nombre es {nombre}</p>
//       <p>Mi edad es {edad}</p>
//     </div>
//   );
// };

// // Definición de los tipos de los props
// PrimerComponente.propTypes = {
//   nombre: PropTypes.string.isRequired,
//   edad: PropTypes.number.isRequired
// };





// //? VARIABLES 
// import './primerComponente.css';

// const string = 'Esto es un curso!';
// const number = 22;
// const array = [1, "a", 'You Tube', 4, 5];
// // const boolean = true;
// const funcion = () => number + 10;
// const objeto = {
//     nombre: 'Juan',
//     edad: 22,
//     direccion: {
//         calle: 'Calle 1',
//         numero: 123,
//         ciudad: 'Bogota'
//     }
// };
// const fecha = new Date();


// export const PrimerComponente = () =>{

//     return (
//         <>
//             <h1>{string}</h1>
//             <p>{number}</p>
//             <p>{array[2]}</p>
//             {/* <p>{boolean}</p> */}
//             <p>{funcion()}</p>
//             <p>{objeto.nombre}</p>
//             <h2>{objeto.direccion.calle}</h2>
//             <p>{JSON.stringify(objeto)}</p>
//             <p>{JSON.stringify(fecha)}</p>

//             <footer>
//                 <h2>Hola mundo</h2>
//             </footer>

//         </ >
//     );
// }




//? PROPS

import PropTypes from 'prop-types';

export const PrimerComponente = ({ name, edad }) => {
  return (
    <>
        <h1>PROPS</h1>
        <p>Nombre: {name}</p>
        <p>Edad: {edad + 5}</p>
    </>
  );
}

// Definición de los tipos de los props
PrimerComponente.PropTypes = {
    name: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired
}

// Para poner el valor por defecto de los props
PrimerComponente.defaultProps = {
    name: 'Juan',
    edad: 30
}
