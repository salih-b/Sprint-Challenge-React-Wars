import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";

const Cardconstructor = ()=>{
const [page, setPage] = useState(1);
const [data, setData] = useState([]);

    // useEffect(()=>{
    //     axios
    //     .get (`https://rickandmortyapi.com/api/character/?page=${page}`)
    //     .then (response => setData(response.data.results))
    // }, [page])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

    // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.
    
    useEffect(() => {
      axios
        .get(`https://swapi.co/api/people/?page=${page}`)
        .then(response => {
          console.log("this is the response", response);
          setData(response.data.results)
        })
        .catch(error => {
          console.log("Not fethcing API data", error);
          
        }, [page] );
    });
  
const previous = () =>{
    if(page > 1){
        setPage(page -1);
    }
}

const next = () =>{
    if(page < 25){
        setPage(page +1);
    }
}
    return (
<div>
    <button onClick={previous} >Previous</button>
    <button onClick={next} >Next</button>
{data.map((char, index)=>
    <Cards 
    name={char.name}
    birth={char.birth_year}
    gender={char.gender}
    // image={char.image} 
    key={index}
    />
)}
</div>
    )
}

export default Cardconstructor;