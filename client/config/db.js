const mongoose = require('mongoose');
const FlightPrice = require('../models/Flight')
const url = process.env.MONGO_URI;

const connectDB = async ()=>{
    try{
        const conn= await mongoose.connect('mongodb+srv://mtank:Mtank10@blog.3tvo4ir.mongodb.net/?retryWrites=true&w=majority')
        .then(() => {
            const newFlightPrice = new FlightPrice({
              source: 'up',
              destination: 'patna',
              flights: [
                { companyName: 'indigo', price: 2050 },
                { companyName: 'airasia', price: 1875 },
                { companyName: 'vistara', price: 2100 }
              ]
            });
        
            return newFlightPrice.save();
          })
          .then(result => {
            console.log('Saved flight price to database:', result);
          })
          .catch(error => {
            console.error('Error saving flight price to database:', error);
          });;
        console.log(`MongoDB connected`);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}
module.exports = connectDB;