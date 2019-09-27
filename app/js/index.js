const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const open = require('open');

app.use(express.static('app'));

// for frontend dependencies:
// app.use('/scripts', express.static(`${__dirname}/node_modules/`));

app.listen(port, () => {
  console.log('page loading on localhost:', port);
  open(`http://localhost:${port}/`)
});
