const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API Running: Welcome to the Jungle 🐯'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Welcome to the Jungle on port ${PORT}`))