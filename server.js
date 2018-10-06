const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const main = require('./routes/api/main');
const practice = require('./routes/api/practice');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // return results as json


app.get('/', (req, res) => {
  res.send('Oi buddy!');
});

// route: GET /api/main/
app.use("/api/main", main);

// route: GET /api/practice/
app.use("/api/practice", practice);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
