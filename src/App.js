import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

const Star = () => React.createElement('div',null,'This is a little star');

const employee = {
  name: "Patipan",
  job: "Web Developer",
  city: "Bangkok"
}

const markup = `
  <div class="employee">
    <h2>${employee.name}</h2>
    <p>${employee.job}</p>
    <p>${employee.city}</p>
  </div>
`
const element = <h1>Hello</h1>

// const App = () => {
//   return element;
// }

function getGreeting(name) {
  return `Hello, ${name}`;
}

const styles ={
  color: 'red',
  fontStyle:'italic',
}

const str =<h1 style={styles}>Hello</h1>;



function App() {
  return(
    <div className="App">
      {str}
      {getGreeting('React ')}
    </div>
  )
}

export default App;
