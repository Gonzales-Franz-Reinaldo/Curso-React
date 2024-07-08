import { useState } from "react"
import { UserList } from "./components/userList";

export const UserApp = () => {

    const [endPoint, setEndPoint] = useState("users");
    
    const handleFetch = () =>{
        setEndPoint("comments");
    }

  return (
    <>
        <h1>Listado de usuarios</h1>
        <UserList endPoint={endPoint}/>

        <button onClick={handleFetch}>Mostrar Users</button>
    </>
  )
}
