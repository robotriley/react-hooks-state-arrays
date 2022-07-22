import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [otvState, setOtvState] = useState("All")

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
    console.log(newFoodArray)
    
  }

  const handleLiClick = (id) => {
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1
        };
      } else {
        return food;
      }
    })
    setFoods(newFoodArray);
  }

  const handleOnChange = (option) => {
    // console.log(option.target.value)
    setOtvState(option.target.value)
  }
  const filteredList = foods.filter((food) => {
    if (otvState === "All" ) {
      return food;
    } else {
    if (food.cuisine === otvState) {
      return food;
    }}
  })

  const foodList = filteredList.map((food) => (
    <li key={food.id} onClick={() => 
      handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>

      <select name="filter" onChange={handleOnChange} >
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>

      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>

    </div>
    
  );
}

export default SpicyFoodList;
