import React, {useContext, useEffect, useState} from "react";
// import MyContext from "../Context API/myContext";
// import MyContextProvider from "../Context API/myContext";
import "../index.css"
// import SearchComponent from "./SearchComponent";

function Table () {
  const [isModal, setIsModal] = useState(true)

  function modalHandler() {
    setIsModal((m) => (!isModal))
}

  function Modal() {
    
    return (
  
        <div className="modal">
            <div className="modal-content">
                <p>Are You Sure You Want To Delete?</p>
                <button className="delBtn" onClick={modalHandler} >X</button>
            </div>
        </div>
    )
  }



  
    return (
        <div style={{backgroundColor:"rgb(71, 77, 77)"}}>
            <hr></hr>
        <h1 style={{padding:"1rem" , fontWeight:"bold"}}><span className="square">.</span> MOVIE: </h1>
        <FetchData />
        {/* <Content /> */}
        {isModal && <Modal />} 


        </div>
        
    )
}
const FetchData = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.themoviedb.org/3/movie/550?api_key=b63f19c7ec6f3bec7a65c284551109a0");
      const data = await response.json();
      console.log(data); // add this line
      setData(data);
    };
    fetchData();
  }, {});

  return (
    <table>
      <thead>
        <tr className="movieTableHead">
          <th>Title</th>
          <th>Director</th>
          <th>Genre</th>
          <th>Release year</th>
          <th>Description</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody >
          <tr key={data.id} className="movieTableBody">
            <td>{data.title}</td>
            <td>{data.director}</td>
            <td>{data.genre}</td>
            <td>{data.release_date}</td>
            <td><button className="delBtn" >Description</button></td>
            <td><button className="delBtn" >Delete</button></td>
          
          </tr>
      </tbody>
    </table>
  );
};




export default Table;