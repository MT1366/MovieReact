import React, { useState } from "react";
import "../index.css"

function SearchComponent() {
    const [isOpen, setIsOpen] =  useState("true");
    console.log(isOpen)
 
    return (
        <form className="searchForm shadow">
            <Input type={"text"} name={"Movies Name"} placeholder={"Enter the movies name"} />
            <Input type={"text"} name={"Gener"} placeholder={"Enter the Gener"} />
            <Input name={"Director"} placeholder={"Enter the Directors name"} />
            <Input type={"date"} name={"Release date"} placeholder={"Pick a year"} />
            <Input type={"textarea"} name={"Description"} placeholder={"Description"}/>
            <div className="btns">
            <Buttons name={"Save"} />
            <Buttons name={"Cancel"}/>

            <Modal /> 
            </div>
        </form>      

    )
}

function Input(props) {
   const [inputValue,setInputValue] = useState("")
    
    function handleChange (event) {
    setInputValue(event.target.value)
    console.log(inputValue)
   }


    return (
        <div className="row ">
            <label><span className="square">.</span>{props.name}</label>
            <input onChange={handleChange} type={props.type} placeholder={props.placeholder}></input>
        </div>
    )
}


function Buttons(props) {

    return (
        <button>{props.name}</button>
    )
}


function Modal() {
    
    return (

        <div className="modal">
            <div className="modal-content">
                <p>Are You Sure You Want To Delet?</p>

                <Buttons name={"X"}/>
            </div>
        </div>
    )
}

export default SearchComponent;