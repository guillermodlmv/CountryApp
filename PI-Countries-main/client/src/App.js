import './App.css';
import { render } from '@testing-library/react';
import React, { useState } from 'react';
import {Route} from 'react-router-dom'
import Landing from './Components/Landing.jsx'
import Home from'./Components/Home.jsx'
import Nav from'./Components/Nav.jsx'
import NewActivity from'./Components/NewActivity.jsx'
import style from './App.css';
import Filter from './Components/Filter.jsx'

function App() {
  const [filterState, setFilterState] = React.useState(false);
  const [countries, setCountries] = React.useState([])
  const onClose = () =>{
    
  }

  
  const onClick = () => {
      setFilterState(!filterState)
  }


  


  return (
    <div className="App">
      {/* <Route path='/' render ={()=> <Nav />}/> */}
      <Route exact path='/' render ={()=> <Landing />}/>
      <Route exact path='/home' render ={()=> <><Nav /><Home  onClose={onClose} filterState={filterState} onClick={onClick}  /></>}/>
      <Route exact path='/NewActivity' render ={()=> <><Nav /><NewActivity /></>}/>
    </div>
  );
}

export default App;
