let http = require('http');
let fs = require('fs');

//kuriam serveri
let server = http.createServer(
  function(req, res) {
    console.log('request was made: ' + req.url);

    if(req.url === '/home' || req.url === '/') {
      res.writeHead(200, {'content-Type': 'text/html'});
      fs.createReadStream(__dirname + '/index.html',  'utf8').pipe(res);
    } else if(req.url === '/contact'){
      res.writeHead(200, {'content-Type': 'text/html'});
      fs.createReadStream(__dirname + '/contact.html',  'utf8').pipe(res);
    } else if(req.url === '/api/david_html') {
      let david_html = [{skills: "HTML"}, {skills: "CSS"}];
      res.writeHead(200, {'content-Type': 'application/json'});
      res.end(JSON.stringify(david_html));
    } else {
      res.writeHead(404, {'content-Type': 'text/plain'});
      res.end('Page not found 404');

    }


    //--------------------------
    // res.writeHead(200, {'content-Type': 'application/json'});
    // let myObj = {
    //   name: 'Marius',
    //   job: 'ninja',
    //   age: 26
    // };
    // res.end(JSON.stringify(myObj));
    //---------------------
  }
);
//klausomes atnaujinimu 3000 porte
server.listen(3000, '127.0.0.1');
console.log('my server is running on 3000 port');
