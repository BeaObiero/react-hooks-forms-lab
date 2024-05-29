import React, { useState }from "react";
import { v4 as uuid } from "uuid"; // uuid gives each new item a unique number

function ItemForm({ onItemFormSubmit }) {

  const [itemName, setItemName]= useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  //user input changes
  const handleNameChange = (e) => {
    setItemName(e.target.value);
  }

  const handleCategoryChange = (e)=>{
    setItemCategory(e.target.value);
  }

  //handling form submission

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name:itemName,
      category:itemCategory
    }
    onItemFormSubmit(newItem);
    setItemName("");
    setItemCategory("Produce");
  }

  //rendering on screen
  
  return (
    <form className="NewItem" onSubmit= {handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value= {itemName} onChange={((e) => setName(e.target.value))} />
      </label>

      <label>
        Category:
        <select name="category" value= {itemCategory} onChange={(e) => setCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
