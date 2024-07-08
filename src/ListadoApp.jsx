//? CONDICIONALES TERNARIOS

import { useState } from "react";
import { AgregarTarea } from "./components/AgregarTarea";

// const Items = ({nombre, visto}) => {
//     return (
//         <li>{nombre}{visto && '✅'}</li>
//     )
// };

// export const ListadoApp = () => {
//     return (
//         <>
//             <h1>Listado de temas en el curso</h1>
//             <ol>
//                 <Items nombre="Instalaciones necesarias" visto={true}/>
//                 <Items nombre="Uso de Vite" visto={true}/>
//                 <Items nombre="Componentes" visto={true}/>
//                 <Items nombre="Variables en  jsx" visto={true}/>
//                 <Items nombre="Props" visto={true}/>
//                 <Items nombre="Eventos" visto={true}/>
//                 <Items nombre="UseState" visto={true}/>
//                 <Items nombre="Redux" visto={false}/>
//                 <Items nombre="CustonHooks" visto={false}/>
//             </ol>
        
//         </>
        
//     )
// }



//? MAPS

// const Items = ({nombre, visto}) => {
//     return (
//         <li>{nombre}{visto && '✅'}</li>
//     )
// };

// export const ListadoApp = () => {

//     let listadoSecciones = [
//         {nombre: "Instalaciones necesarias", visto: true},
//         {nombre: "Uso de Vite", visto: true},
//         {nombre: "Componentes", visto: true},
//         {nombre: "Variables en  jsx", visto: true},
//         {nombre: "Props", visto: true},
//         {nombre: "Eventos", visto: true},
//         {nombre: "UseState", visto: true},
//         {nombre: "Redux", visto: false},
//         {nombre: "CustonHooks", visto: false}
//     ];

//     const [arreglo, setArreglo] = useState(listadoSecciones);

//     console.log(arreglo);

//     return (
//         <>
//             <h1>Listado de temas en el curso</h1>
//             <ol>
//                 {arreglo.map(item => (
//                     <Items key={item.nombre} nombre={item.nombre} visto={item.visto}/>
//                 ))}
//             </ol>
        
//         </>
        
//     )
// }





const Items = ({nombre, visto}) => {
    return (
        <li>{nombre}{visto ?  '✅' : '❌'}</li>
    )
};

export const ListadoApp = () => {

    const addTask = () => {
        setArreglo([...arreglo, {nombre: "Nueva tarea", visto: false}])
    }

    let listadoSecciones = [
        {id:0, nombre: "Instalaciones necesarias", visto: true},
        {id:1, nombre: "Uso de Vite", visto: true},
        {id:2, nombre: "Componentes", visto: true},
        {id:3, nombre: "Variables en  jsx", visto: true},
        {id:4, nombre: "Props", visto: true},
        {id:5, nombre: "Eventos", visto: true},
        {id:6, nombre: "UseState", visto: true},
        {id:7, nombre: "Redux", visto: false},
        {id:8, nombre: "CustonHooks", visto: false}
    ];

    const [arreglo, setArreglo] = useState(listadoSecciones);

    const onAgregarTarea = (val) =>{
        let valor = val.trim();
        
        if(valor === ""){
            alert("No se puede agregar una tarea vacia");
            return;
        }

        const elemento = {
            id: arreglo.length,
            nombre: valor,
            visto: false
        }

        setArreglo([...arreglo, elemento]);
    }

    return (
        <>
            <h1>Listado de temas en el curso</h1>
            <AgregarTarea agregarTarea={onAgregarTarea} />
            
            <ol>
                {arreglo.map(item => (
                    <Items key={item.id} nombre={item.nombre} visto={item.visto}/>
                ))}
            </ol>

            <button onClick={() => addTask()} className="btn">Agregar Tarea</button>
        
        </>
        
    )
}