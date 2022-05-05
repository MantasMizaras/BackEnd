const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { PORT } = require('./config');
const petsRoutes = require('./routes/petsRoutes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api', petsRoutes);

app.get('/', async (req, res) => {
  res.json('Hello');
});

app.all('*', (req, res) => {
  res.status(404).json({ error: 'Page not found' });
});

app.listen(PORT, () => console.log('server is running', PORT));
