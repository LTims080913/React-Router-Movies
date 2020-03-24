import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { BrowserRouter as Router } from "react-router-dom";


const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <Router>
      <SavedList list={savedList} />
     <Route component= {MovieList} exact path="/"/>
        <Route path="/movies/:id">
          <Movie addToSavedList={addToSavedList} />
        </Route>
        
          
     
    </Router>
  );
};

export default App;
