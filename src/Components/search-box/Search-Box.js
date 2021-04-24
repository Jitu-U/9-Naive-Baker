import React,{useState,useEffect} from 'react';
import "./Search-Box.css";
import { IoIosSearch } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5"
import { Switch } from '@material-ui/core';

function SearchBox(){
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);

    return(
      <>
        <div className="Outer-container">
                <div className="search-bar" >
                  <IoIosSearch size={25} className="icon" onClick={handleClick}/>
                  <input type="text" className="s-input" placeholder=

                    "Search recipetitle, ingredients, cook Name"/>

                </div>
                <div className="Filters" >
                    <IoFilterSharp className="filter-btn" size={21}/>
                    <div className="Filter-Menu">
                      <div className="Menu-item">  <Switch/> Veg Only</div>
                      <div className="Menu-item"> <input className="F-input" type="text" placeholder="Enter ingredients"></input></div>
                    </div>
                </div>

        </div>
        <div className={click ? 'search-advanced': 'search-advanced-hidden'} >
            <div> </div>
        </div>

      </>
    )

}

export default SearchBox ;
