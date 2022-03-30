import React from "react"
import Autocomplete from "./Autocomplete"

let data = []

window.onload = () => {
    getData();
}



const Register = ({nextscreen}) =>{

    return (
        <div>
        
        <h2>Search for the dog the owner is requesting</h2>
        <Autocomplete suggestions={[data[0].name]}/>
      </div> 
    )

}


async function getData() {
    const apiUrl = "https://api.jsonbin.io/b/6087d9c3f6655022c46d0b41"
    const response = await fetch(apiUrl);
    data = await response.json();
    console.log(data);
    //addToList(data)

}

 //function addToList(dogData){}

export default Register
