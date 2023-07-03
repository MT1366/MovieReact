import React, {useContext} from "react";
import MyContext from "../Context API/myContext";
import MyContextProvider from "../Context API/myContext";
import "../index.css"


function Table () {
    return (
        <div style={{backgroundColor:"rgb(71, 77, 77)"}}>
            <hr></hr>
        <h1 style={{padding:"1rem"}}><span className="square">.</span> MOVIE NAME</h1>

        <Content />
        {/* <List /> */}
        
        {/* <table className="table-head">

            <tr>
            <TableTH name={"Row"} />
            <TableTH name={"Movie Name"} />
            <TableTH name={"Directore"} />
            <TableTH name={"Genere"} />
            <TableTH name={"Release Year"} />
            <TableTH name={"Description"} />
            <TableTH name={"Delet"} />
            </tr>
            <hr></hr>
            <tr>
            <TableTD content={"1"} />
            </tr>

        </table> */}
        </div>
        
    )
}

// const List = () => {
//     // console.log(data)
//     return (

//     );
// }

function Content() {
    return(


        <table>
            <tr>
                <th>Row</th>
                <th>Movies</th>
                <th>Director</th>
                <th>Gener</th>
                <th>Release Year</th>
                <th>Description</th>
                <th>Delete</th>
            </tr>
                 <tr>
                  <TableRow />
                </tr>

            {/* <tr>
                <td>1</td>
                <td>Shutter Island</td>
                <td>Martin Scorsesse</td>
                <td>Horror</td>
                <td>2012</td>
                <td>Awesome</td>
                <td><button>X</button></td>
            </tr> */}
 
        </table>
        )
}


function TableRow() {
    const data = useContext(MyContext);
    return (
        <MyContextProvider>

        </MyContextProvider>
    )
}

// function TableTH (props) {
//     return (
//             <th>{props.name}</th>
//     )
// }
// function TableTD (props) {
//     return (
//             <td>{props.content}</td>
//     )
// }




// style="clip-path: "
export default Table;