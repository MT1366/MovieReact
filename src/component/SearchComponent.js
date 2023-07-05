import React, { useState } from "react";
import Table from "./TableComponent";
import "../index.css";

function SearchComponent() {
  // const [isOpen, setIsOpen] = useState("true");
  // const [inputValue, setInputValue] = useState("");

  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <form className="searchForm shadow" onSubmit={submitHandler}>
      <Input
        type={"text"}
        name={"Movies Name"}
        placeholder={"Enter the movies name"}
      />
      <Input type={"text"} name={"Gener"} placeholder={"Enter the Gener"} />
      <Input name={"Director"} placeholder={"Enter the Directors name"} />
      <Input type={"date"} name={"Release date"} placeholder={"Pick a year"} />
      <Input
        type={"textarea"}
        name={"Description"}
        placeholder={"Description"}
      />
      <div className="btns">
        <Buttons name={"Save"} />
        <Buttons name={"Cancel"} />
      </div>
    </form>
  );
}

function Input({ name, type, placeholder }) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);

    const newMovie = {
      inputValue,
    };
    console.log(newMovie);
  }

  return (
    <div className="row ">
      <label>
        <span className="square">.</span>
        {name}
      </label>
      <input
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
      ></input>
    </div>
  );
}

function Buttons({ name, onClick }) {
  return (
    <button className="inputBtn" onClick={onClick}>
      {name}
    </button>
  );
}

export default SearchComponent;
