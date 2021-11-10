import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantCardData }) {

  const plantCard = plantCardData.map(plant => <PlantCard 
    key ={plant.id}
    name={plant.name}
    image={plant.image}
    price={plant.price}

  />)

  return (
    <ul className="cards">
      {plantCard}
    </ul>
  );
}

export default PlantList;
