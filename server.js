const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const cors = require('cors');
const url = require('url');
// const { addUser, removeUser, getUser, getallUsers } = require('./users.js');


const port = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

let allcontacts = [];

app.get('/', function(req, res) {
    console.log('i receive a GET request');
  
    var tryFetch = allcontacts
  
    res.json(tryFetch)
})

app.post('/add', function(req, res) {
    console.log('i receive a post request');

    const newcontact = {
        id: allcontacts.length+1,
        email : req.body.email,
        first : req.body.first,
        last : req.body.last,
        phone : req.body.phone
    }
    
    allcontacts.push(newcontact)
    console.log(allcontacts);
    res.json(allcontacts);
})

app.post('/edit/:id', function (req, res){
    console.log('i recieve a edit request');
    console.log(req.body.email);
    const editcontact = {
        id : req.body.id,
        email : req.body.email,
        first : req.body.first,
        last : req.body.last,
        phone : req.body.phone
    }
    for (let i=0; i< allcontacts.length; i++)
    {
        if (allcontacts[i].id === req.body.id)
        {
            allcontacts[i]= editcontact;
            break;
        }
    }

    res.json(allcontacts);

})



if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

server.listen(port, () => console.log(`Listening on port ${port}`));