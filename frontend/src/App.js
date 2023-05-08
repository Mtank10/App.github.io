import React, {useState } from 'react';
import Home from './Home';
import './home.css'
const App = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  // const source="Delhi";
  // const destination="Jaipur";
  
  return (
    <div className='flight-details'>
         <h2>Flight Details</h2>
          <label htmlFor="source">Source:</label>
           <input type="text" id="source" value={source} onChange={(e) => setSource(e.target.value)} />
         
           <label htmlFor="destination">Destination:</label>
           <input type="text" id="destination" value={destination} onChange={(e) => setDestination(e.target.value)} />

    <Home source={source} destination={destination}/>
    </div>
  );
}

export default App;