import React from "react";

function NewPlantForm({ listPlants }) {

  const handleChange = (e) => {
    console.log(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const newPlant = []
    // const newPlantList = [...listPlants, newPlant]
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange} />
        <button type="submit">Add Plant</button>
        
      </form>
      
    </div>
  );
}

export default NewPlantForm;
