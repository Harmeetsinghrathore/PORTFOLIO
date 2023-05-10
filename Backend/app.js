const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());


const connection = require('./Services/db_connection');
connection();


app.listen(process.env.PORT, () => {
    console.log(`Server running on the port : ${process.env.PORT}`);
})