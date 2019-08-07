import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import File from '../presentational/file';

function App() {

  // State
  const [files, setFiles] = useState([]);
  const [filterFiles , setFilterFiles] = useState([]);
  
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

  const handleSearch = (e) => {
    console.log(e.target.value);
  };


  return (
    <div className="App">
      <h1>SimpAnTool</h1>
      <label htmlFor="id">Search by ID number</label>
      <br/>
      <input type="number" onChange={handleChange}></input>
      {filterFiles.length > 0 ? filterFiles.map( file => {
        return <File key={file.id} file={file} search={handleSearch}></File>
      }) : <h1><span role="img" aria-label="boom">💥</span>No record matches the ID Number!!</h1>}
    </div>
  );
}

export default App;
