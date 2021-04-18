import React,{useState,useEffect} from 'react';
import "./Search-Box.css";
import { IoIosSearch } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5"



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
                <div className="search-button" >
<<<<<<< HEAD
                    <IoFilterSharp className="icon" size={21}/>
=======
                    <IoFilterSharp className="search-icon" size={21}/>
>>>>>>> devmain
                </div>

        </div>
        <div className={click ? 'search-advanced': 'search-advanced-hidden'} >
            <div> </div>
        </div>

      </>
    )

}

export default SearchBox ;
