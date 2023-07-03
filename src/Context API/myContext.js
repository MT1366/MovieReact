import React, {useState, createContext, useEffect} from "react"
export const MyContext = createContext();

const MyContextProvider = () => {
    let [data, setData] = useState();

    useEffect(() => {
         setData = async () => {
            const response = await fetch ("https://api.themoviedb.org/3/movie/550?api_key=b63f19c7ec6f3bec7a65c284551109a0");

            const data = await response.json()
            console.log(data)
        };
        setData();
    }, []);
    
    return (
        <MyContext.Provider value = {{data}}>
            <td>{data}</td>
        </MyContext.Provider>
    )
}

export default MyContextProvider;
