import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import File from '../presentational/file';
import logo from '../images/logo.png';
import idNum from '../images/idNumber.png';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

function App() {

  // style
  const useStyles = makeStyles( theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      backgroundColor: 'white',
      borderColor: 'black',
    },
    boxLeft: {
      float: 'left',
      marginTop: '0em',
    },
    boxRight: {
      float: 'right',
      marginTop: '-1em',
      marginLeft: '1em',
      marginRight: '2em'
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
      <img src={logo} alt="logo" style={{marginTop: '3em'}}></img>
      <br/>
      <Box width="48%" className={classes.boxLeft}>
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
      </Box>
      <br/>
      <Box width="48%" className={classes.boxRight}>
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
      {filterFilesSecond.length > 0 ? filterFilesSecond.map(file => {
        return <File key={file.id} file={file}></File>
      }) : <h1><span role="img" aria-label="boom">💥</span>No record matches the ID Number!!</h1>}
      </Box>
      <footer className="footer">
        <p>Vytautas Klimavicius<span role="img" aria-label="copyright">©</span></p>
        <p>Contact information: <a href="mailto:vyklimavicius@gmail.com">
          vyklimavicius@gmail.com</a>.</p>
      </footer>
    </div>
  );
}

export default App;
