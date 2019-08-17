import React, { useEffect, useState } from "react";
import axios from 'axios';

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
  }, [{/*TODO */}]);

  return (
    <section className="character-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
