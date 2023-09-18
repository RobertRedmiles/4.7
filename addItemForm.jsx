import { useState } from "react";

const AddItemForm = ({handlerAddItem}) => {
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [itemCategory, setItemCategory] = useState("");


    const handlerName = (event) => {
        setItemName(event.target.value);
    }

    const handlerPrice = (event) => {
        setItemPrice(event.target.value);
    }

    const handlerDescription = (event) => {
        setItemDescription(event.target.value);
    }

    const handlerCategoryId = (event) => {
        console.log(event);
        setItemCategory(event.target.value);
    }

    const handlerSubmit = (event) => {
        event.preventDefault();
        const formData = {
            name: itemName,
            price: parseInt(itemPrice),
            description: itemDescription,
            categoryId: itemCategory
        }
        handlerAddItem(formData);
    }

    return (
        <div>
          <form onSubmit={handlerSubmit}>
            <input 
                type='text' 
                name='name' 
                placeholder='Item name' 
                onChange={handlerName} 
            />
             <input 
                type='number' 
                name='price' 
                placeholder='Item price' 
                onChange={handlerPrice} 
            />
                   <input 
                type='text' 
                name='description' 
                placeholder='Item description' 
                onChange={handlerDescription} 
            />
            <select onChange={handlerCategoryId}>
                <option value="1">
                    fruits
                </option>
                <option value="2">
                    vegetables
                </option>
                <option value="3">
                    dairy
                </option>
                <option value="4">
                    canned goods
                </option>
            </select>
            <button>Add</button>
          </form>
        </div>
      )
}

export default AddItemForm;