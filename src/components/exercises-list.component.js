import React, { Component } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom';

const Exercise = props => (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.desc}</td>
      <td>{props.exercise.duration}</td>
      <td>
    <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
      </td>
    </tr>
  )

class ExercisesList extends Component{

    constructor(props){
        super(props)
        this.deleteExercise=this.deleteExercise.bind(this)
        this.state={exercises:[]}
    }

    componentDidMount(){
        axios.get('https://exertracker-api-p0nk.onrender.com/exercises')
        .then(response=>{
            this.setState({exercises:response.data})
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    deleteExercise(id) {
        axios.delete('https://exertracker-api-p0nk.onrender.com/exercises/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          exercises: this.state.exercises.filter(el => el._id !== id)
        })
      }

      exerciseList() {
        return this.state.exercises.map(currentexercise => {
          return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
        })
      }

    render(){
        return(
            <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
        )
    }
}

export default ExercisesList