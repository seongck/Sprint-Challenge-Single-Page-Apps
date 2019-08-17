import React from "react";
import { Route } from "react-router-dom";
import WelcomePage from "./WelcomePage.js";
import CharacterList from "./CharacterList.js";
import LocationsList from "./LocationsList.js";
import EpisodeList from "./EpisodeList.js";

export default function AppRouter() {
  return (
    <div>
      <Route 
        exact 
        path="/" 
        component={WelcomePage}
      />

      <Route 
        path="/characters" 
        render={props => <CharacterList {...props} />}
      />

      <Route 
        path="/locations" 
        render={props => <LocationsList {...props} />}
      />

      <Route 
        path="/episodes" 
        render={props => <EpisodeList {...props} />}
      /> 
    </div>
  );
};
