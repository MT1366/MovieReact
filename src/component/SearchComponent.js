import React from "react";
import "../index.css"

function SearchComponent() {
    return (
        <form className="searchForm shadow">
            <Input type={"text"} name={"Movies Name"} placeholder={"Enter the movies name"} />
            <Input type={"text"} name={"Gener"} placeholder={"Enter the Gener"} />
            <Input name={"Director"} placeholder={"Enter the Directors name"} />
            <Input type={"date"} name={"Release date"} placeholder={"Pick a year"} />
            <Input type={"textarea"} name={"Description"} placeholder={"Description"} rows={"9"}/>
            <div className="btns">
            <Buttons name={"Save"} />
            <Buttons name={"Cancel"}/>
            </div>
        </form>
    )
}


function Input(props) {
    return (
        <div className="row ">
            <label><span className="square">.</span>{props.name}</label>
            <input  type={props.type} placeholder={props.placeholder}></input>
        </div>
    )
}


function Buttons(props) {
    return (
        <button>{props.name}</button>
    )
}

export default SearchComponent;