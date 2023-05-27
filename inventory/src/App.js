import { useState } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import AddItem from './Components/AddItem';
import ItemDisplay from './Components/ItemDisplay';

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState ({ items: [] });
  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };
  const addItemToData = (item) => {
    let items = data["items"];
    item.id = items.length;
    items.push(item);
    setData({items: items});
    console.log(data);
  };
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
      Inventory App!
    </h1>
      <SearchBar updateSearchParams={updateFilters}/>
      <ItemDisplay items = {data["items"]}/>
      <AddItem addItem={addItemToData} />
      
    </div>
  );
}

export default App;
