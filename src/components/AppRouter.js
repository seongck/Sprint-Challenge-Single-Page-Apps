import React from "react";
import { Route } from "react-router-dom";
import WelcomePage from "./WelcomePage.js";
import CharacterList from "./CharacterList.js";

export default function AppRouter() {
  return (
    <Route 
      exact 
      path="/" 
      component={WelcomePage}
    />
  );
};
