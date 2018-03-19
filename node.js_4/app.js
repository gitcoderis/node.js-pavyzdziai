var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();

//setup template engine
app.set('view engine', 'ejs');

//static files
//ims failus visus, kurie yra public folderyje
app.use(express.static('./public'));


//fire controllers
todoController(app);

//listen to port
app.listen(3000);
console.log('Server is running on port 3000');
