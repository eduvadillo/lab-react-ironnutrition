import { Input } from "antd";
import { useState } from "react";

function AddFoodForm(props) {
        console.log(props)

  const [inputName, setInputName] = useState('');
  const [inputImage, setInputImage] = useState(``);
  const [inputCalories, setInputCalories] = useState(0)
  const [inputServings, setInputServings] = useState(0)

  const handleInputNameChange = (event) => {
        setInputName(event.target.value)
  }

    const handleInputImageChange = (event) => {
        setInputImage(event.target.value)
  }

      const handleInputCaloriesChange = (event) => {
        setInputCalories(event.target.value)
  }

      const handleInputServingsChange = (event) => {
        setInputServings(event.target.value)
  }


        const handleSubmit = (event) => {
                event.preventDefault();
             const newFood = {name: inputName , image : inputImage , calories : inputCalories , servings : inputServings}
                
            props.añadirFood(newFood) 
            console.log(props.añadirFood(newFood))

            setInputName ('')
            setInputImage('')
            setInputCalories(0)
            setInputServings(0)
      } 
        

  return (
      <form onSubmit={handleSubmit}>

         <label> Name </label>    
         <Input type="text" onChange={handleInputNameChange} value={inputName} /> 
         <label> Image </label>    
         <Input type="image" onChange={handleInputImageChange} value={inputImage} /> 
        <label> Calories </label>    
         <Input type="number" onChange={handleInputCaloriesChange} value={inputCalories} /> 
        <label> Servings </label>    
         <Input type="number" onChange={handleInputServingsChange} value={inputServings} /> 


        <button type="submit" value="Submit"> Enviar </button>
      </form>

  )}

  export default AddFoodForm;