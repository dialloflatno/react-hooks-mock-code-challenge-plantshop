import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage(props) {

  return (
    <main>
      <NewPlantForm prevList = {props.listPlants} />
      <Search />
      <PlantList plantCardData = {props.listPlants} />
    </main>
  );
}

export default PlantPage;
