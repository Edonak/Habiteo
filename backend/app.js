let express = require('express'); 
let path = require ('path');
let coukieParser = require('coukie-parser');
let logger = require ('morgan');


let usersRouter = require('.routes/users');


let app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(coukieParser())
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', usersRouter);


module.exports = app; 