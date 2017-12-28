import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
      {id: 'sadfs', name: 'Cristhian', age: '23'},
      {id: 'sadfsdqwd', name: 'Crist', age: '22'},
      {id: 'sadfvbdfbs', name: 'Cris', age: '21'}
    ],
    showPersons: false
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {

    let persons = null;
    let buttonClass = null;

    if(this.state.showPersons){
      persons = <div>
      <Persons persons={this.state.persons}
      clicked={this.deletePersonHandler}
      changed={this.changeNameHandler} />
      </div>
      buttonClass = classes.Red;
    }

    const assignedClasses = []

    if(this.state.persons.length < 3){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length < 2){
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1> I'm a react app </h1>
          <p className={assignedClasses.join(' ')}> Cool is working! </p>
          <button
            className={buttonClass}
            onClick={this.togglePersonHandler}>Toggle Persons</button>
          {persons}
        </div>
    );
  }
}

export default App;
