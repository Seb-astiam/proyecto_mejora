import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

const Detail = ()=>{
const {id} = useParams();
const [character, setCharacter] = useState({});

useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);
    return (
        <div>
            <div>
            <h1>{character.name}</h1>
            <br/>
            <h2 >{'Status: '+character.status}</h2>
            <h2 >{'Specie: '+character.species}</h2>
            <h2 >{'Sex: '+character.gender}</h2>
            <h2 >{'Origin: '+character?.origin?.name}</h2>
            </div>
            
            <div>
             <img src={character.image} alt='' />
            </div>
        </div>
    )
}
export default Detail