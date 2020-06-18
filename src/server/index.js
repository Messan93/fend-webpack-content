const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
var AYLIENTextAPI = require('aylien_textapi');
const mockAPIResponse = require('./mockAPI.js')

// set aylien API credentials
var textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });

const app = express()

/* Dependecies */
const bodyParser = require('body-parser')

/* Middleware*/
// Here we are configuring express to use body-parser as middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Cors for cross origin allowance
const cors = require('cors')
app.use(cors())

// Intialize the main project folder

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
