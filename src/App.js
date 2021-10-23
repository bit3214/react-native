import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
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

const items = [
  'Bread',
  'Milk',
  'Eggs'
]


const str =<h1 style={styles}>Hello</h1>;

const loggedIn = false;
const error=true;

function FunctionComponent() {
  return <h1>This is a function component.</h1>;
}

class ClassComponent extends Component{
  render(){
    return <h1>This is a class componet.</h1>;
  }
}

function  handleEvent(e) {
  alert('Button clicked');
  console.log(e);
}

function al() {
  alert("Hello");
}

const language=[
  "c#","c++","js"
]

function App() {
  return(
    <div className="App">
      {str}
      {getGreeting('React ')}

      {(loggedIn)? 'Welcome back': 'Nice to meet you'}
      <label>Name: <input/></label>
      {error ? <div style={{color:'red'}}>Name invalid</div> : null}
      {error && <div style={{color:'red'}}>Name invalid</div> }
      <br/>
      <h1>items</h1>
      <ul>
      {items.map(item => <li>{item}</li>)}
      </ul>
      <ui>
        {language.map(lg => <li>{lg}</li>)}
      </ui>
      <FunctionComponent/>
      <ClassComponent/>
      <button onClick={handleEvent}>Click</button>
    </div>
  )
}

export default App;
