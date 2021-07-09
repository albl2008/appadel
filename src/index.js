const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const middlewares = require('./middlewares');
const places = require('./api/places')
const mongoose = require('mongoose')

require('dotenv').config();

mongoose.connect(process.env.DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,

})


const app = express();


app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());


app.get('/',(req,res)=>{
    res.json({
        message:'appadle :)',
    });
});

app.use('/api/places', places)

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)



const port = process.env.PORT || 1337;

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}/`);
});