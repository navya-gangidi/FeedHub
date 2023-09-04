const express = require('express')

const app = express();

app.get('/', (req, res) =>{
    res.send({hi: 'there'});
});

//const PORT = process.env.PORT - used in production environment
//To run in a dev environment - sometimes it might not be set by Heroku therefore we'll use 5000 instead.

const PORT = process.env.PORT || 5000
app.listen(PORT);

