import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
const plantUrl = "http://localhost:4000/plants";


function App() {
  const [plantList, setPlantList] = useState([])

  useEffect(() => {
    fetch(plantUrl)
      .then(Response => Response.json())
      .then(data => setPlantList(data))
  }, [])

  return (
    <div className="app">
      <Header />
      <PlantPage listPlants = {plantList}/>
    </div>
  );
}

export default App;
