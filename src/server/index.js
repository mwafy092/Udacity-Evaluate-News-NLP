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
let appData = [];
let API_KEY = process.env.API_KEY;
let baseURL = `https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&lang=en&model=general&txt=https://www.nytimes.com/2020/08/22/us/politics/usps-bill-congress-vote.html`

let getAPIData = async (baseURL) => {
    const request = await fetch(baseURL);
    try {
        const data = await request.json();
        // console.log(data);
        appData.push(data);
    }
    catch (error) {
        console.log(error);
    }
}
getAPIData(baseURL);
app.get('/test', (request, response) => {
    response.send(appData);
})

