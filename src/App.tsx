import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {RestaurantMenu} from "./components/RestaurantMenu/RestaurantMenu";
import {ColorGenerator} from "./components/ColorGenerator/ColorGenerator";
import {ToursList} from "./components/ToursList/ToursList";

function App() {
  return (
    // <Accordion/>
    //   <RestaurantMenu/>
    // <ColorGenerator/>
      <ToursList/>
  );
}

export default App;
