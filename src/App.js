import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Shirt from './Shirt'
import Pants from './Pants'
import Shoes from './Shoes'
import './App.css';

function App() {
  const [shirtIndex,setShirtIndex] = useState(0);
  const [pantsIndex,setPantsIndex] = useState(0);
  const [shoesIndex,setShoesIndex] = useState(0);

  function randomize() {
    setShirtIndex(Math.floor(Math.random() * 13));
    setPantsIndex(Math.floor(Math.random() * 13));
    setShoesIndex(Math.floor(Math.random() * 9));
  }

  return (
    <div className="App">
      <section className="App-intro">
        <h1>Outfit Generator</h1>
        <p>Pick an outfit!</p>
        <Button className="shoes-btn" onClick={randomize} variant="light">randomize whole outfit</Button>
      </section>      
      <section className="clothing">
        <Shirt shirtIndex={shirtIndex} setShirtIndex={setShirtIndex} />
        <Pants pantsIndex={pantsIndex} setPantsIndex={setPantsIndex} />
        <Shoes shoesIndex={shoesIndex} setShoesIndex={setShoesIndex} />
      </section>
    </div>
  );
}

export default App;
