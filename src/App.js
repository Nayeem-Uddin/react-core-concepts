import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const names = ['sadia','kanchi','kobita','nayeem'];
  
  const friends = [
    {name:'bappy',age:24},
    {name:'farhad',age:25},
    {name:'sadia',age:23},
    {name:'ramisa',age:22},
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p>Sadia is a reactful person</p>
        
        <Counter></Counter>

        <ul>
          {
            names.map(name => <li>{name}</li>)
          }
        </ul>
        {
          friends.map(friend => <Friend friend={friend}></Friend>)
        }
        {
          names.map(name => <Name name={name}></Name>)
        }

      </header>
    </div>
  );
}
const friendStyle = {
  margin:'20px',
  padding:'20px',
  borderRadius:'5px',
  boxShadow:'5px 5px 10px lightsalmon'
}
function Friend(props){
  const {name,age} = props.friend;
  return (
    <div style={friendStyle}>
        <h3>{name}</h3>
        <p>{age}</p>
    </div>
  );
}

//useState or hook
function Counter(){
  const [count, setCount] = useState(0);

  const incraseBtn = () =>{
    const newCount = count + 1;
    setCount(newCount);
  }

  const decraseBtn = () =>{
    const newCount = count - 1;
    if(newCount>=0){
      setCount(newCount);
    }else{
      alert('You have to select at least one product');
    }
  }
  return (
    <div>
        <h3>Count : {count}</h3>
        <button onClick={incraseBtn}>Increase</button>
        <button onClick={decraseBtn}>Decrease</button>
    </div>
  );
}

function Name(props){
  return (
    <div style={friendStyle}>
        <h3>{props.name}</h3>
    </div>
  );
}

export default App;
