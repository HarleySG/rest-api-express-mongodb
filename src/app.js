const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const express = require('express');
// DEFINE ROUTES
const routeUsers = require('./routes/route.users')
const app = express();

// MONGODB
mongoose.connect('mongodb://localhost/rest-api-example', { useNewUrlParser: true })
.then(db => console.log('mongoDB conected'))
.catch(err => console.error(err));

// SETTINGS EXPRESS
const port = process.env.PORT || 3000;
const www = process.env.WWW || './';
app.use(express.static(www));
console.log(`serving ${www}`);

// MIDDELWARE
app.use(morgan('start'));
app.use(bodyParser.json());

// USE ROUTES
app.use('/users', routeUsers);

// STATIC FILES

// ERROR HANDLERS

// START SERVER
app.get('*', (req, res) => {
    res.sendFile(`index.html`, { root: www });
});
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
