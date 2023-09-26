/* 
Express is a minimal and flexible Node.js web application framework that provides a robust set
of features for building web and mobile applications
*/
const express = require('express');
const cors = require('cors');
/* 
The path module in node js is used for managing and altering file paths.
It's a part of the core modules with methods that help you deal with directory
and file path names on the local machine's file system
*/
const path = require('path');
const app = express();
const port = process.env.PORT || 5002;

/*
CORS (Cross-Origin Resource Sharing) is a browser security feature that restricts
cross-origin HTTP requests with other servers and specifies which domains access your resources.
We will use this Node.js package to allow cross-origin requests.
 */
app.use(cors());
app.use(express.json());
// enables the server to serve the client app without running it
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api/helloworld', (req, res) => {
  res.send('Hello World');
});

app.post('/api/createuser', (req, res) => {
  
  let time = new Date();

  res.send("POST Request accepted , user created succussfully , Called at: " + time.toDateString());
});


app.get('/api/time', (req, res) => {
  
  let time = new Date();

  res.send(time.toDateString());
});

app.get('/api/name', (req, res) => {
  res.send('gal');
});

app.get('/*', (req, res) => {
  // res.send('Anything else');
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});