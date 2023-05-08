const FlightPrice = require('../models/Flight');
const express = require('express');
const router=express.Router();

router.get('/flight-prices', async (req, res) => {
    const { source, destination } = req.query;
  
    try {
      const result = await FlightPrice.findOne({ source, destination });
      if(result){
        res.json(result.flights);
      }
      else {
        res.status(404).json({ message: 'No flight prices found for the given route.' });
      }
      
    } catch (err) {
      console.log(err);
      res.status(500).send('Error fetching flight prices');
    } 
  });   
module.exports = router;