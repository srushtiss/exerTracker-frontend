import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import { Routes } from 'react-router-dom'
import {Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar.component'
import ExercisesList from './components/exercises-list.component'
import CreateExercise from './components/create-exercise.component'
import CreateUser from './components/create-user.component'

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
          <Navbar/>
          <br/>
          <Routes>
                <Route path="/" element={<ExercisesList/>}></Route>
                <Route path="/create" element={<CreateExercise/>}></Route>
                <Route path="/user" element={<CreateUser/>}></Route>
          </Routes>  
      </div> 
    </BrowserRouter>
  );
}

export default App;
