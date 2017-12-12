import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'sadfs', name: 'Cristhian', age: '23'},
      {id: 'sadfsdqwd', name: 'Crist', age: '22'},
      {id: 'sadfvbdfbs', name: 'Cris', age: '21'}
    ],
    showPersons: false
  }

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Carlys', age: '23'},
        {name: event.target.value, age: '22'},
        {name: 'Cris', age: '21'}
      ]
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
    const style = {
      backgroundColor: 'gray',
      color: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '5px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons){
      persons = <div>
        {this.state.persons.map( (person, index) => {
          return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}/>
        })}
      </div>
    }

    return (
      <div className="App">
        <h1> I'm a react app </h1>
        <p> Cool is working! </p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
