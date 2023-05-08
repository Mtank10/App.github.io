const mongoose = require('mongoose');
const {Schema} = mongoose;

const flightSchema = new Schema({
    source: {
        type: String,
        required: true
      },
      destination: {
        type: String,
        required: true
      },
      flights: [
        {
          companyName: {
            type: String,
            required: true
          },
          price: {
            type: Number,
            required: true
          }
        }
      ],
    createdAt:{type:Date,default:Date.now}
})

const FlightPrice = mongoose.model('FlightPrice', flightSchema);

module.exports = FlightPrice;