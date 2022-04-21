const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

const Note = require('./models/note.js');
const User = require('./models/user.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://daudau:<inzjz4KtJ9kJ2M8P>@dauphinecarrentalcluste.vfezv.mongodb.net/test').then(() => {
    console.log('Successfully connected to DB!');
}).catch((error) => {
    console.log('Unable to connect to DB!');
    console.error(error);
});

app.use((req, res, next) => {
    next();
});

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.set('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: "http://localhost:4200" }));
app.use(cookieParser());

app.listen(3000, () => { console.log("Listening on port 3000") });