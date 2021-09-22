import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";
import { useState } from "react";

function App() {

 const [allFoods, setAllFoods] = useState(foods);
 

 const añadirFood = (newFood) => {

    const foodActualizado = [...allFoods, newFood];
    console.log('a ver si aparece' , foodActualizado)

    setAllFoods(foodActualizado)
 }

  const buscadorFood = (buscando) => {

        let filteredFood = allFoods.filter(food => food.name.startsWith(buscando) )
        
        console.log(filteredFood)
        setAllFoods(filteredFood)
 }

 

  return <div className="App">

        <AddFoodForm  añadirFood={(newFood) => {
        añadirFood(newFood);
        }}/>

         <FoodBox allFoods={allFoods}/>

        <Search buscadorFood={buscadorFood}/>
          
        

  </div>;



}

export default App;