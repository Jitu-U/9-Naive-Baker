import React, { useState, useEffect } from 'react';
import "./Search-Box.css";
import { IoIosSearch } from "react-icons/io";

function SearchBox() {
  return (
    <>
      <div className="Outer-container">
        <div className="search-bar" >
          <IoIosSearch size={25} className="icon" />
          <input type="text" className="s-input" placeholder="Search recipetitle, ingredients, cook Name" />
        </div>
      </div>
    </>
  )
}

export default SearchBox;
