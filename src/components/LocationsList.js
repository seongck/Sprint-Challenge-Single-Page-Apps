import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard.js';

export default function LocationsList(props) {
  const [ locationList, setLocationList ] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location/')
      .then( res => {
        console.log(res);
        setLocationList(res.data.results);
      })
      .catch( err => {
        console.log(err);
      });
  }, [props.match.params.path]);

  return (
    <section className="location-list grid-view">
      { locationList.forEach( location => {
        return <LocationCard key={location.id} {...location} />
      })}
    </section>
  );

}
