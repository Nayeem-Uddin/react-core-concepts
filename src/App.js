import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ["nayeem nayok","uddin nayok","guddu babu nayok","gullu mitai nayok",'jashim'];

  const products = [
      {name: 'pen', price: '$1'},
      {name: 'book', price: '$5'},
      {name: 'pencil', price: '$1.5'},
      {name: 'pencil', price: '$1.5'}
  ]; 

  return (
    <div className="App">
      <header className="App-header">
        <p>Sadia is a reactful person</p>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }

        <Person name={nayoks[0]} nayika="sadia"></Person>
        <Person name={nayoks[1]} nayika="kobita"></Person>
        <Person name={nayoks[2]} nayika="kanchi"></Person>
        <Person name={nayoks[3]} nayika="buri buri"></Person>
      </header>
    </div>
  );
}

//display the products details
const productStyle = {
  height: '250px',
  width: '250px',
  backgroundColor: 'lightgrey',
  borderRadius: '10px',
  boxShadow: '5px 5px 10px lightsalmon',
  margin:'10px'
}
const buttonStyle = {
  padding:'5px 14px',
  fontSize:'15px',
  color:'coffee',
  backgroundColor:'lightcyan',
  borderRadius:'7px'
}
function Product(props){
  // console.log(props);
  const {name,price} = props.product;
  return (
    <div style={productStyle}>
        <h3>{name}</h3>
        <h1>{price}</h1>  
        <button style={buttonStyle}>Buy Now</button>
    </div>
  )
}


function Person(props) {
  // console.log(props);
  return (
    // <div className="sadia-style">
    <div style={{ border: '2px solid red', margin: '20px', padding: '20px',width:'300px'}}>
      <div>
        <img src="/" alt="" />
        <h3>{props.name}</h3>
        <p>Hero of : {props.nayika}</p>
      </div>
    </div>
  );
}


export default App;
