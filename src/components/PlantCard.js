import React, {useState} from "react";
import PlantPage from "./PlantPage";



function PlantCard({plant}) {

  const [inStock, setInStock] = useState(true)

  function handleClick(newValue){
    setInStock(newValue)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={()=>handleClick(false)}>In Stock</button>
      ) : (
        <button onClick={()=>handleClick(true)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
