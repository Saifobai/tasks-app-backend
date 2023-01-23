require('dotenv').config()
const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose');
const tasksRoute = require('./routes/tasksRoute')

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({
    origin: ["http://localhost:3000/"]
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.get('/', (req, res) => {
    res.send('HomePage ...')
})

//tasks route
app.use('/api/tasks', tasksRoute)





// connect 
mongoose
    .set("strictQuery", false)
    .connect(process.env.MONGO_URI, {

    })

    .then(() => {
        app.listen(PORT, () => {
            console.log('server running on port and connected to the MongoDb ' + PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
