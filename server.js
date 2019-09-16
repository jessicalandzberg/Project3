const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const studentController = require('./controllers/studentController');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));
app.use('/cohorts', studentController);

app.get('/', (req, res) => {
  res.send('Welcome to the default route.');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
