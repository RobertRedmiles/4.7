import { useState, useEffect } from 'react';
import CategoryDisplay from './components/CategoryDisplay';
import AddCategoryForm from './components/AddCategoryForm';
import AddItemForm from './components/addItemForm';
import ItemDisplay from './components/itemDisplay';
import './App.css';
import apiConn from './api/conn';

function App() {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);

  const getCategories = async () => {
    try {
      //http://localhost:3001/categories
      const response = await apiConn.get("/categories");
      console.log(response.data);
      setCategories(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  const getItems = async () => {
    try {
      const response = await apiConn.get("/items");
      console.log(response.data);
      setItems(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  const createCategory = async (categoryName) => {
    try {
      const response = await apiConn.post("/categories", {name: categoryName});
      console.log(response.data);
      getCategories();
    } catch (error) {
      console.log(error.message);
    }
  }

  const createItem = async (itemData) => {
    try {
      const response = await apiConn.post("/items", itemData);
      console.log(response.data);
      getItems();
    } catch (error) {
      console.log(error.message);
    }
  }
    
  useEffect(() => {
    getCategories();
    getItems();
  }, []);


  return (
    <div className="App">
      <hi>Category List</hi>
      <AddCategoryForm handlerAddCategory={createCategory} />
      <CategoryDisplay list={categories} />
      <AddItemForm handlerAddItem={createItem} />
      <ItemDisplay list={items} />
    </div>
  );
}

export default App;
