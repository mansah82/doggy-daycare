import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import './Register.css';

const Register = ({setDogInfo}) =>{

const [data, setData] = useState([]);
const [dogs, setDogs] = useState([]);
const [input, setInput] = useState("");

const getData = async () => {

    const apiUrl = "https://api.jsonbin.io/b/624d576cd96a510f029214bc";
    const response = await fetch(apiUrl);
    const responseData = await response.json();
    console.log("DATA FETCHED:" + responseData);
    setData(responseData);
    setDogs(responseData);
    console.log("Array of dogs in getData()" + dogs);
};

console.log("reRender");
useEffect(()=>{
    getData();
}, []);

useEffect(()=>{
    if(input == ""){
        console.log("Input");
        setDogs(data);
    } else {
        let searchList = []
        dogs.forEach((dog) => {
            let dogNameLowerCased = dog.name.toLowerCase(); 
            if(dogNameLowerCased.startsWith(input.toLowerCase())) {
                searchList.push(dog);
            }
        })
        setDogs(searchList);
    }

}, [input]);

const dogInfo = dogs.map((dog) => (
    <div key={dog.chipNumber} className="dogItem">
      <div className="name">{dog.name}</div>
      <Link to="/info">
       <img onClick={() => setDogInfo(dog)} className="dog-img" src={dog.img} alt={dog.name} />
      </Link>
    </div>
  ));
    return (
        <div>
        <input className="input" type="text" value={input} onInput={e => setInput(e.target.value) } />
        <div className="dogsList">
        {dogInfo}
        </div>
        
      </div> 
    )
  }
export default Register;