import logo from './logo.svg';
import './App.css';

function App() {
  const person1 = {
    name: 'sadia',
    profession: 'Foodist'
  }
  const person2 = {
    name: 'nayeem',
    profession: 'IT man'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Exited to learn React
        </a>
        <div className="simple-style">
          <div>
            <h3>First person name is {person1.name}</h3>
            <p>She is a {person1.profession}</p>
          </div>
          <div>
            <h3>Second person name is {person2.name}</h3>
            <p>He is an {person2.profession}</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
