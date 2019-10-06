const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const open = require('open');
const axios = require('axios');

app.use(express.static('app'));

// this line redirects to the homepage if the user tries to go directly to another page
// e.g. "http://localhost:3000/6"
app.get('*', (req, res) => res.redirect("../"));

app.listen(port, () => {
  console.log('page loading on localhost:', port);
  open(`http://localhost:${port}/`)
});
