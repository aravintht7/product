let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();
let apiRoutes = require("./api-routes");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/ProductDatabase', { useNewUrlParser: true,  useUnifiedTopology: true  })
 .then(() => console.log('connected to mongo DB'))
 .catch(err => console.error('',err));
// var db = mongoose.connection;

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Use Api routes in the App
app.use('/api', apiRoutes);

app.listen(port, () => console.log("Running on port " + port));
