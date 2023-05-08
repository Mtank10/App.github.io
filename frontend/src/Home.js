import React from 'react'
import { useState } from 'react';
import './home.css'
const Home = ({source,destination}) => {
    const [flights, setFlights] = useState([]);


  const handleSubmit =  (event) => {
    event.preventDefault();
    // validate input
    if (!source || !destination) {
      alert('Please enter source and destination');
      return;
    }
    // fetch flight data
     fetch(`http://localhost:3000/api/v1/flight-prices?source=${source}&destination=${destination}`)
      .then(response => response.json())
      .then(data=>{
         console.log(data);
         setFlights(data);
      })
      .catch(error => console.error(error));
  };
  return (
    
    <div className='btn'>
     <button type="submit" onClick={handleSubmit}>Search</button>
     <div className='flight-details'>
    {flights.length > 0 ?
        <ul>
          {flights.map(flight => (
            <li key={flight.companyName}>
              <div className='list'>Company = {flight.companyName}  </div>
              <div className='list'>Price = ${flight.price}</div>
            </li>
          ))}
        </ul>
        :
        <div>No flights found</div>
      }
      </div>
      </div>
  )
}

export default Home