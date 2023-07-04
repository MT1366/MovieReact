import React, {useContext, useEffect, useState} from "react";
// import MyContext from "../Context API/myContext";
// import MyContextProvider from "../Context API/myContext";
import "../index.css"


function Table () {
    return (
        <div style={{backgroundColor:"rgb(71, 77, 77)"}}>
            <hr></hr>
        <h1 style={{padding:"1rem"}}><span className="square">.</span> MOVIE NAME</h1>

        {/* <Content /> */}
        <FetchData />

        </div>
        
    )
}


// function Content() {
//     return(

//         // <tbody>
//         //     <tr>
//         //         <th>Row</th>
//         //         <th>Movies</th>
//         //         <th>Director</th>
//         //         <th>Gener</th>
//         //         <th>Release Year</th>
//         //         <th>Description</th>
//         //         <th>Delete</th>
//         //     </tr>
//         // <tbody>

//         // </tbody>
  
//         // </tbody>

//         )
// }



const FetchData = (props) => {
    let [data, setData] = useState([]);

    useEffect(() => {
         setData = async () => {
            const response = await fetch ("https://api.themoviedb.org/3/movie/550?api_key=b63f19c7ec6f3bec7a65c284551109a0");

            const data = await response.json()
            console.log(data)
            
        };
        setData();
    }, []);
    
    return (

        <>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.director}</td>
            <td>{item.genre}</td>
            <td>{item.releaseYear}</td>
            <td>{item.description}</td>
            <td>Delete</td>
          </tr>
        ))}
      </>    )
}



export default Table;