import { useState } from "react";

import React from "react";

function AddItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const addItemAction = () => {
    props.addItem({ name:name, price:price, type:type, brand:brand });
    setName("");
    setPrice(0);
    setType("");
    setBrand("");
  };
  return (
    <div className="max-w-xl mx-60">
  <h1 className="flex text-2xl font-bold mb-4 justify-start">Add new Item</h1>
  <form className="flex flex-col justify-start">
  <div className="flex flex-col mb-4 justify-start">
    <div className="flex flex-col w-1/2 pr-2">
      <label htmlFor="name-field" className="w-1/4 pr-2 text-left">Name:</label>
      <input
        type="text"
        id="name-field"
        className="px-2 py-1 border border-gray-300 rounded-md"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>

    <div className="flex flex-col w-1/3 pr-2">
      <label htmlFor="price-field" className="w-1/4 pr-2 text-left">Price:</label>
      <input
        type="text"
        id="price-field"
        className="px-2 py-1 border border-gray-300 rounded-md"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
    </div>

    <div className="flex flex-col w-1/3 pr-2">
      <label htmlFor="type-field" className="w-1/4 pr-2 text-left">Type:</label>
      <input
        type="text"
        id="type-field"
        className="px-2 py-1 border border-gray-300 rounded-md"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
    </div>

    <div className="flex flex-col w-1/3 pr-2">
      <label htmlFor="brand-field" className="w-1/4 pr-2 text-left">Brand:</label>
      <input
        type="text"
        id="brand-field"
        className="px-2 py-1 border border-gray-300 rounded-md"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
    </div>
    </div>

    <div className="flex justify-start">
      <button 
        type="button"
        onClick={addItemAction}
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Add Item
      </button>
    </div>
  </form>
</div>

  );
}

export default AddItem;
