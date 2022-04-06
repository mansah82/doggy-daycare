import React from "react"
import Autocomplete from "./Autocomplete"
import { Link, useParams } from 'react-router-dom'

let data = []
let dogIndex = 0
let dogNames = []

window.onload = () => {
    getData();
}

// const params = useParams();

// let showCaseDog = 0;
// if ('showCaseDog' in params) {
//     if (params.showCaseDog >= 0 && params.showCaseDog <= data.length)
//         showCaseDog = Number(params.showCaseDog)
// }





const Register = () =>{

    return (
        <div>
        
        
        
        <h2>Search for the dog the owner is requesting</h2>
        <Link to="/info">
       <button>INFO</button>
        </Link>
        <Autocomplete suggestions={dogNames}/> 
        
      </div> 
    )

}


async function getData() {
    const apiUrl = "https://api.jsonbin.io/b/624d576cd96a510f029214bc"
    const response = await fetch(apiUrl);
    data = await response.json();
    //console.log(data);
    //addToList(data)
    getNames();
    

}

function getNames(){
    data.forEach(data => {
        dogNames.push(data.name)
    });
    console.log(dogNames)
}


 //function addToList(dogData){}

export default Register
