
import { userFetchData } from "../hooks/userFetchData";

export const UserList = ({endPoint}) => {

    //* Llamamos a nuestro Couston Hook 
    const {data, isLoading} = userFetchData({endPoint})

  return (
    <>
        <ul>
            {isLoading ? 
                <p>Cargando....</p> :
                endPoint == 'users' ? 
                    data.map(item =>  <li key={item.id}>Nombre: {item.name}</li>) : 
                    data.map((item) =>  <li key={item.id}>Descrip: {item.body}</li>)
            }
        </ul>
    </>
  )
}
