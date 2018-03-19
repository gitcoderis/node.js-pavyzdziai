var data = [{todo: "get job"}, {todo: "keep job"}, {todo: "start a company"}];

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = function(app) {

  app.get('/todo', function(req, res){
    res.render('todo', {todos: data});
  });

  app.post('/todo', urlencodedParser, function(req, res){
    data.push(req.body);
    res.json(data);
  });

  app.delete('/todo/:id', function(req, res){
    data.splice(req.params.id, 1);
    res.json(data);

  });

};
