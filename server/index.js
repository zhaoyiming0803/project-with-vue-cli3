const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Expose-Headers, Token');
  res.header('Access-Control-Allow-Methods','PUT, POST, GET, DELETE, OPTIONS, HEAD');  
  res.header('Content-Type', 'application/json; charset=utf-8');
  next();
});

app.get('/api/user', (req, res) => {
  res.json({
    name: 'zhaoyiming',
    age: 18
  });
});

console.log('app listen 8091');
app.listen(8091);