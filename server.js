require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors module

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log("connected to MongoDB"));

app.use(cors()); // Use cors middleware
app.use(express.json());

const ngajisRouter = require('./routes/ngajis');
const usersRouter = require('./routes/users');
app.use('/ngajis', ngajisRouter);
app.use('/users', usersRouter);

app.listen(process.env.PORT, () => console.log('Server started'));
