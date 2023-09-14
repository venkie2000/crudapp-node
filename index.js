const express = require("express")
const bodyParser = require("body-parser")
const dotenv = require('dotenv');
const connectDb = require("./config/db");
// const fs = require('fs');

const port = process.env.PORT || 3000 ;
dotenv.config();

connectDb();

// create our express app
const app = express()

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// route
const userRouter = require('./routes/userRoutes')
app.use('/api', userRouter);

//connect


//start server
app.listen(port, ()=>{
    console.log(` Server listening at port:${port}`);
    
});

