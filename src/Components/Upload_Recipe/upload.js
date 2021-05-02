import "./upload.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
function Upload() {
  const classes = useStyles();
  const [category, setCat] = React.useState("");
  const [meal, setMeal] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleChange = (event) => {
    setCat(event.target.value);
  };
  const handleChange2 = (event) => {
    setMeal(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };
  return (
    <>
      <div className="container">
        <h2 style={{ color: "white", "font-weight": "700" }}>Upload Recipe</h2>
          <form
            style={{ "justify-content": "center", "align-items": "center" }}
          >
            <div className="mb-3 mt-4" >
              <TextField id="outlined-basic" label="Title" variant="outlined" style={{'width':'400px'}}/>
            </div>
            <div className="mb-3">
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                defaultValue=""
                variant="outlined"
                style={{'width':'400px'}}
              />
            </div>
            <div className="mb-3">
              <TextField
                id="outlined-basic"
                style={{'width':'400px'}}
                label="URL(picture)"
                variant="outlined"
              />
            </div>
            <div className="mb-3">
              <TextField
              style={{'width':'400px'}}
                id="outlined-multiline-static"
                label="Procedure"
                multiline
                rows={4}
                defaultValue=""
                variant="outlined"
              />
            </div>
            <div className="md-3">
              <InputLabel id="demo-controlled-open-select-label" style={{'width':'400px'}}>
                Category
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={category}
                onChange={handleChange}
                style={{'width':'400px'}}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Veg</MenuItem>
                <MenuItem value={20}>Non-Veg</MenuItem>
                <MenuItem value={30}>Vegan</MenuItem>
              </Select>
            </div>
            <div className="md-3 mt-3">
              <InputLabel id="demo-controlled-open-select-label" style={{'width':'400px'}}>
                Meal Type
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open2}
                onClose={handleClose2}
                onOpen={handleOpen2}
                value={meal}
                onChange={handleChange2}
                style={{'width':'400px'}}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Breakfast</MenuItem>
                <MenuItem value={20}>Lunch</MenuItem>
                <MenuItem value={30}>Dinner</MenuItem>
                <MenuItem value={40}>Snack</MenuItem>
              </Select>
            </div>
            <div className="mb-3 mt-3">
              <TextField id="outlined-basic" label="Cooking Time(min)" variant="outlined" style={{'width':'400px'}}/>
            </div>
            <div className="mb-3 mt-3">
              <TextField id="outlined-basic" label="Cuisine" variant="outlined"style={{'width':'400px'}} />
            </div>
            <div className="mb-3">
              <TextField
                style={{'width':'400px'}}
                id="outlined-multiline-static"
                label="Ingredients"
                multiline
                rows={4}
                defaultValue=""
                variant="outlined"
              />
            </div>
            <div className="mb-3">
            <button
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
            </div>
           
          </form>
      </div>
    </>
  );
}

export default Upload;