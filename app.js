const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

var bodyParser = require('body-parser')

//serving static files: middleware
app.use(express.static('public'));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))

//parse application/json 
app.use(bodyParser.json());

//importing routes
require('./routes')(app);

//template engine
app.set('view engine', 'ejs');

//listen on port
app.listen(port, () => {
    console.log('server is running on port' + port)
})