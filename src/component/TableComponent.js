// import MyContext from "../Context API/myContext";
// import MyContextProvider from "../Context API/myContext";
// import SearchComponent from "./SearchComponent";
import React, { useContext, useEffect, useState } from "react";
import "../index.css";

function Table() {
  return (
    <div style={{ backgroundColor: "rgb(71, 77, 77)" }}>
      <hr></hr>
      <h1 style={{ padding: "1rem", fontWeight: "bold", color: "grey" }}>
        <span className="square">.</span> MOVIE LIST:{" "}
      </h1>
      <FetchData />
      {/* <Content /> */}
    </div>
  );
}

const FetchData = ({ onClick }) => {
  const [data, setData] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [isModalDesc, setIsModalDesc] = useState(false);

  function modalHandler() {
    setIsModal((m) => !isModal);
  }

  function modalDescHandler() {
    setIsModalDesc((d) => !isModalDesc);
  }

  useEffect(() => {
    const fetchData = async (name) => {
      const response = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=3f9cb62a"
      );
      const data = await response.json();
      console.log(data); // add this line
      setData(data);
    };
    fetchData();
  });

  return (
    <table className="table-head">
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
      {!isModal && (
        <tr key={data.id} className="movieTableBody">
          <td>{data.Title}</td>
          <td>{data.Director}</td>
          <td>{data.Genre}</td>
          <td>{data.Year}</td>
          <td>
            <button className="descBtn" onClick={modalDescHandler}>
              Description
            </button>
            {isModalDesc && (
              <ModalDesc
                onClick={modalDescHandler}
                overview={data.Plot}
              ></ModalDesc>
            )}
          </td>
          <td>
            <button className="delBtn" onClick={modalHandler}>
              Delete
            </button>
            {isModal && <Modal onClick={modalHandler} />}
          </td>
        </tr>
      )}
    </table>
  );
};

function Modal({ onClick }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>Are You Sure You Want To Delete?</p>
        <div className="modalBtns">
          <button className="delBtn" onClick={onClick}>
            Yes
          </button>
          <button className="delBtn" onClick={onClick}>
            No!
          </button>
        </div>
      </div>
    </div>
  );
}

function ModalDesc({ overview, onClick }) {
  return (
    <div className="modalDesc" style={{ width: "600px" }}>
      <button
        className="descBtn"
        onClick={onClick}
        style={{ width: "10%", margin: "10px", float: "left" }}
      >
        x
      </button>
      <div className="modalDescContent">{overview}</div>
    </div>
  );
}

export default Table;
