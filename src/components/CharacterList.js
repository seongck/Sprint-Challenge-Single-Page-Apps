import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard.js';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [ characterList, setCharacterList ] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
      .then( res => {
        console.log(res);
        setCharacterList(res.data.results);
      })
      .catch( err => {
        console.log(err);
      });
  }, [props.match.params.path]);

  return (
    <section className="character-list grid-view">
      { characterList.forEach( character => {
        return <CharacterCard key={character.id} character={character} />
      })}
    </section>
  );
}
