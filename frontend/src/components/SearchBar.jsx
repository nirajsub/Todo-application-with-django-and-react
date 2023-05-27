import { useState } from "react";
import React from 'react'


function SearchBar(props) {
    return (
        <div>
            <h2>Search for an Item</h2>
            <form>
                <label htmlFor="name-field">Name</label>
                <input id="name-field" type="text" />
                <label htmlFor="price-field">Max Price</label>
                <input id="price-field" type="number" />
                <label htmlFor="type-field">Type</label>
                <input id="type-field" type="text" />
                <label htmlFor="brand-field">Brand</label>
                <input id="brand-field" type="text" />
                <button>Search</button>
            </form>
        </div>
        
    )
}

export default SearchBar