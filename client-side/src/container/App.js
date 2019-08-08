import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import File from '../presentational/file';
import logo from '../images/logo.png';
import box from '../images/boxingGloves.jpg';
import idNum from '../images/idNumber.png';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

function App() {

  // style
  const useStyles = makeStyles( theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      backgroundColor: 'white',
      borderColor: 'black'
    }
  }));

  const classes = useStyles();

  // State
  const [files, setFiles] = useState([]);
  const [filterFiles , setFilterFiles] = useState([]);
  const [filterFilesSecond , setFilterFilesSecond] = useState([]);
  
  // Asynchronous fetch
  useEffect( () => {
    const result = fetch('http://localhost:8000/')
    result
    .then( response => response.json())
    .then( json => {
      setFiles(json);
    });
    firstRender();
  },[]);
  
  // Event handlers
    const firstRender = () => {
      console.log('%c Author', 'color: white; background-color: #E81E3E', "This is a project made by Vytautas Klimavicius");
    };

  const handleChange = (e) => {
    let filt = files.filter( file => {
      return file.id === parseInt(e.target.value);
    })
    setFilterFiles(filt);
  };

  const handleChangeSecond = (e) => {
    let filt = files.filter(file => {
      return file.id === parseInt(e.target.value);
    })
    setFilterFilesSecond(filt);
  }

  return (
    <div className="App">
      <img src={logo} alt="logo"></img>
      <br/>
      {/* <label htmlFor="id">Search by ID number</label> */}
      <img src={idNum} alt="Idnum"></img>
      <br/>
      <TextField
        id="outlined-number"
        onChange={handleChange}
        type="number"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
        variant="outlined"
      />
      {filterFiles.length > 0 ? filterFiles.map( file => {
        return <File key={file.id} file={file}></File>
      }) : <h1><span role="img" aria-label="boom">💥</span>No record matches the ID Number!!</h1>}
      <br/>
      <img src={box} alt="box" style={{width: '5em'}}></img>
      <br/>
      <br/>
      <br/>
      <img src={idNum} alt="Idnum"></img>
      <br />
      <TextField
        id="outlined-number"
        onChange={handleChangeSecond}
        type="number"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
        variant="outlined"
      />
      {/* <input type="number" onChange={handleChangeSecond}></input> */}
      {filterFilesSecond.length > 0 ? filterFilesSecond.map(file => {
        return <File key={file.id} file={file}></File>
      }) : <h1><span role="img" aria-label="boom">💥</span>No record matches the ID Number!!</h1>}
    </div>
  );
}

export default App;
