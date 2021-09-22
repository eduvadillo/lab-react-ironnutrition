import { useState } from "react";

function Search(props) {
        

  const [inputSearch, setInputSearch] = useState('');


  const handleOnChangeSelect = (event) => {
        setInputSearch(event.target.value)
        props.buscadorFood(event.target.value)
        console.log(event.target.value)
        
         
      } 

        

  return (

      <form>
         <label> Buscador </label>    
         <input type="text" onChange={handleOnChangeSelect} value={inputSearch} /> 
      </form>

  )

}

  export default Search;