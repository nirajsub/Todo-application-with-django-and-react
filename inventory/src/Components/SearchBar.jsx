import { useState } from "react";

import React from "react";

function SearchBar(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const searchButtonAction = () => {
    props.updateSearchParams({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
  };
  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-2xl font-bold mb-4">Search for an Item</h1>
      <form className="flex flex-col">
        <div className="flex flex-row mb-4 justify-center">
          <div className="flex flex-col w-1/2 pr-2">
            <label htmlFor="name-field" className="text-left">
              Name:
            </label>
            <input
              type="text"
              id="name-field"
              className="px-2 py-1 border border-gray-300 rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-1/3 pr-2">
            <label htmlFor="price-field" className="text-left">
              Max Price:
            </label>
            <input
              type="text"
              id="price-field"
              className="px-2 py-1 border border-gray-300 rounded-md"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-1/3 pr-2">
            <label htmlFor="type-field" className="text-left">
              Type:
            </label>
            <input
              type="text"
              id="type-field"
              className="px-2 py-1 border border-gray-300 rounded-md"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-1/3">
            <label htmlFor="brand-field" className="text-left">
              Brand:
            </label>
            <input
              type="text"
              id="brand-field"
              className="px-2 py-1 border border-gray-300 rounded-md"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          
        </div>

        <div className="flex justify-center">
            <button
            type="button"
            onClick={searchButtonAction}
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
export default SearchBar;
