const express = require('express');
const connectDB =require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');

//connect Database
 connectDB();
const app=express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1/',require('./routes/flightRoutes'));

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
});