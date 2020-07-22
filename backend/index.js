const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

// Routes
const indexRouter = require('./routes/index');
const messagesRouter = require('./routes/messages');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// This line goes above the backend routing! Helps prioritize the frontend server.
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../frontend', 'build')));

// This is for backend server!
app.use('/', indexRouter);
app.use('/messages', messagesRouter);

//if (process.env.NODE_ENV === 'production') {

//}

// app.use(express.static('../frontend/build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'));
})

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParse: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//if (process.env.NODE_ENV === 'production') {

//}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});