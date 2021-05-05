import React,{useState,useEffect} from 'react';
import "./Search-Box.css";
import { IoIosSearch } from "react-icons/io";
import {useHistory} from 'react-router-dom'
import {RiFileSearchLine} from 'react-icons/ri'


function SearchBox(){

  const history = useHistory();

  function handleClick() {
    history.push("/SearchPage");
  }
    return(
      <>
        <div className="Outer-container">
                <div className="search-bar" >
                  <IoIosSearch size={25} className="icon" />
                  <input type="text" className="s-input" placeholder=

                    "Search recipetitle, ingredients, cook Name"/>

                </div>
                <div className="Filters"  onClick={handleClick}>
                  <RiFileSearchLine/>Search Page
                </div>

        </div>
        

      </>
    )

}

export default SearchBox ;
