import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import "./upload.css";
import { Link } from 'react-router-dom'
import { IoCloseSharp } from 'react-icons/io5'
import Select from 'react-select';
import { Button } from "@material-ui/core";

const optionsCategorys = [
  { value: 'Veg', label: 'Veg' },
  { value: 'Non-Veg', label: 'Non-Veg' },
  { value: 'Vegan', label: 'Vegan' },
];

const optionsMeals = [
  { value: 'Breakfast', label: 'Breakfast' },
  { value: 'Lunch', label: 'Lunch' },
  { value: 'Dinner', label: 'Dinner' },
  { value: 'Snack', label: 'Snack' }
];

const optionsCuisines = [
  { value: 'American', label: 'American' },
  { value: 'Italian', label: 'Italian' },
  { value: 'Indian', label: 'Indian' },
  { value: 'Maxican', label: 'Maxican' },
  { value: 'Chinese', label: 'Chinese' }
];

function Upload() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [procedure, setProcedure] = useState("");
  const [picURL, setPicURL] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [category, setCategory] = useState("");
  const [mealType, setMealtype] = useState("");
  const [preparationTime, setPreparationtime] = useState(0);
  const [cuisine, setCuisine] = useState("");
  const [optionsIngs, setOptionings] = useState([]);
  
  const changeCategory = (event) => {
    console.log(event.label);
    setCategory(event.label);
  };

  const changeMealType = (event) => {
    setMealtype(event.label);
  };

  const changeCuisine = (event) => {
    setCuisine(event.label);
  };

  const changepreparationTime = (event) => {
    setPreparationtime(parseInt(event.target.value));
  };

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const changeDescription = (event) => {
    setDescription(event.target.value);
  };

  const changeProcedure = (event) => {
    setProcedure(event.target.value);
  };

  const changePicURL = (event) => {
    setPicURL(event.target.value);
  };

  const changeIng = (event) => {
    
  }

  const uploadrecipe = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div className="container-upload">

        <Link className="close-btn" to="/">
          <IoCloseSharp className size={44} /> <div>Close</div>
        </Link>

        <div className="upload-title">
          <h1>Upload Recipe</h1>
        </div>

        <form style={{ "justify-content": "center", "align-items": "center" }}>
          <div className="mb-3 mt-4" >
            <h4>Title</h4>
            <TextField value={title} onChange={changeTitle} id="outlined-basic" label="Title" variant="outlined" style={{ 'width': '100%' }} />
          </div>
          <div className="mb-3">
            <h4>Description</h4>
            <TextField
              value={description}
              onChange={changeDescription}
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              defaultValue=""
              variant="outlined"
              style={{ 'width': '100%' }}
            />
          </div>
          <div className="mb-3">
            <h4>Procedure</h4>
            <TextField
              value={procedure}
              onChange={changeProcedure}
              style={{ 'width': '100%' }}
              id="outlined-multiline-static"
              label="Procedure"
              multiline
              rows={4}
              defaultValue=""
              variant="outlined"
            />
          </div>
          <div className="md-3 mt-3">
            <h4>Preparation Time</h4>
            <TextField
              style={{ 'width': '100%' }}
              id="outlined-multiline-static"
              label="Preparation Time"
              rows={1}
              value={preparationTime}
              onChange={changepreparationTime}
              variant="outlined"
              type="Number"
            />
          </div>
          <div className="md-3 mt-3 flexclass">
            <div className="flexitem">
              <h4>Meal Type</h4>
              <Select
                className='select-meal'
                options={optionsMeals}
                placeholder={'Recipe Meal Type'}
                onChange={changeMealType}
              />
            </div>
            <div className="flexitem">
              <h4>Cuisine</h4>
              <Select
                className='select-cuisine'
                options={optionsCuisines}
                placeholder={'Recipe Cuisine Type'}
                onChange={changeCuisine}
              />
            </div>
          </div>
          <div className="md-3">
            <h4>Category</h4>
            <Select
              className='select-category'
              options={optionsCategorys}
              placeholder={'Recipe Category'}
              onChange={changeCategory}
            />
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className="mb-3">
            <Button type="submit" variant="outlined" color="primary" onClick={uploadrecipe}>Submit</Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Upload;