
const express = require ('express');
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.port || 8000;

//middleware
app.use(express.json());
app.use('/api', userRoutes);


app.get('/', (req,res)=>{
    res.send("Welcome");
});


//mongodbconnection
mongoose.connect(process.env.MONGODB_URI)
.then (()=> console.log ('connected'))
.catch((error)=> console.error(error));


app.listen(8000, () => console.log('Escucho', 8000));


