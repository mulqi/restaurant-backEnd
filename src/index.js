const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(' INI dari ariq 2 ke test branch :>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
