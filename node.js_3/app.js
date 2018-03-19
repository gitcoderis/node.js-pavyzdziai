//isirasius express js, veikia sitaip:

let express = require('express');
let bodyParser = require('body-parser');
let urlEncodedParser = bodyParser.urlencoded({extended: false});
let app = express();
let fs = require('fs');

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));


app.get('/', function(req, res){
  // res.send('this is the landing page');
  res.render('index');
});

app.get('/contact', function(req, res){
  // res.send('this is the contact page');
  res.render('contact');
});
app.post('/contact', urlEncodedParser, function(req,res){
  let contactDB = [];
  if(fs.existsSync(__dirname + 'Monikos.json')) {
    contactDB = fs.readFileSync('Monikos.json');
    contactDB = JSON.parse(contactDB);
  }
  
  contactDB.push(req.body);
  fs.writeFileSync('Monikos.json',JSON.stringify(contactDB));

  res.render('contacts-thanks', {contact: req.body});
});

app.get('/profile/:name', function(req, res){
  // res.send('Profile name: ' + req.params.name);
  let data = {
    age: 26,
    job: "IT",
    hobbies: ['david', 'html', 'fetish']
  };
  res.render('profile', {person: req.params.name,  data: data}); // BUTINAI visada ejs folderis turi buti views
});
app.listen(3000);
