//? COUSTON HOOKS
import { useEffect, useState } from "react";
import { fetchData } from "../helpers/fetchData";

export const userFetchData = ({endPoint}) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    
    const {data, isLoading} = await fetchData(endPoint);
    setData(data);
    setIsLoading(isLoading);
  }

  // useEffect() se ejecute cada vez que cambie el endPoint, se debe pasar como dependencia en el segundo argumento del useEffect().
  useEffect(() => {
    getData();
  }, [endPoint])

  return {
    data,
    isLoading
  }
}
