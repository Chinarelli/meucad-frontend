require('dotenv');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//const routes = require('./routes');

const port = process.env.PORT || 3300;

const app = express();

// view engine setup
//app.set('public', path.resolve(__dirname));
app.set('views', path.resolve(__dirname, 'app', 'views'));
app.use(express.static(path.resolve(__dirname, 'app', 'views')));
app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Front-end is running at localhost:${port}`)
});

app.get('/', (req, res) => {
    res.render('index');
});