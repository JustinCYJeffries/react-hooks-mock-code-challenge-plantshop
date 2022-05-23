import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
 const BASE_URL = "http://localhost:6001/plants"
 const [plants, setPlants] =useState([])
  const[search, setSearch]=useState('')

  
 useEffect(() =>{
    fetch(BASE_URL)
    .then(r=>r.json())
    .then((data)=>setPlants(data))
}, [])

const filteredPlants = plants.filter((plant)=> plant.name.includes(search))

  return (
    <main>
      <NewPlantForm setPlants={setPlants}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
