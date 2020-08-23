// express and app instance
const express = require('express')
const app = express()

// middleware and cors
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

var path = require('path')
const mockAPIResponse = require('./mockAPI.js')

// meaning cloud
const MeaningCloud = require('meaning-cloud')

// env file config
const dotenv = require('dotenv');
const { default: fetch } = require('node-fetch')
const { ppid } = require('process')
const { urlencoded } = require('body-parser')
dotenv.config();


app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

// designates what port the app will listen to for incoming requests
let port = 8000;
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})

app.get('/api', function (req, res) {
    res.send(mockAPIResponse);
})

/*
    sentiment API 
*/

// using our API KEY
let API_KEY = process.env.API_KEY;
let baseURL = `https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&of=json&lang=en&model=general&txt=`

app.post('/apiData', async (request, response) => {
    let userInput = request.body.url;
    let data = await getAPIData(baseURL + userInput)
    response.json({
        userInput: userInput,
        apiData: data
    })
})

let getAPIData = async (baseURL) => {
    const request = await fetch(baseURL);
    try {
        const data = await request.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}
