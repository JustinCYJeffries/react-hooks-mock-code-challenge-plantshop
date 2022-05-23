import React, { useState } from "react";

const initialNewPlant={
  name:"",
  image:"",
  price: 0
};
const BASE_URL = "http://localhost:6001/plants"

function NewPlantForm({setPlants}) {

  const [newPlant, setNewPlant] = useState(initialNewPlant)

  function handleChange(e){
    setNewPlant((currentNewPlantState)=>({
      ...currentNewPlantState,
       [e.target.name]:e.target.value
      
      }))
  }
  function handleSubmit(e){
    e.preventDefault();
    fetch (BASE_URL, {
      method: "POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify(newPlant)
    })
    .then(r=>r.json())
    .then((data) => setPlants((currentPlants)=>[...currentPlants, data]))
    setNewPlant(initialNewPlant);


  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange}value={newPlant.name} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} value={newPlant.image}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange} value={newPlant.price}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
