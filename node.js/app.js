// let belekas = require('./count');
//
//
// let myArr = ['Marius', 'Lukas', 'David'];
// console.log(belekas.counter(myArr));
// console.log(belekas.manoSuma(2,5));
// console.log(belekas.manoSuma(belekas.pi(),5));
//----------------------------------------------
let events = require('events');

// let myEventEmitter = new events.EventEmitter();
//
// myEventEmitter.on('someEvent', function(msg){
//     console.log(msg);
// });
//
// myEventEmitter.emit('someEvent', 'the event was emitted');

//----------------------------------------------------
//
// let util = require('util');
//
// let Person = function(name) {
//   this.name = name;
// };
//
// util.inherits(Person, events.EventEmitter);
//
// let james = new Person('james');
// let mary = new Person('mary');
// let tom = new Person('tom');
// let people = [james, mary, tom];
//
// people.forEach(function(person){
//   person.on('speak', function(msg){
//     console.log(person.name + ' said: ' + msg);
//   });
// });
// james.emit('speak', 'hey dude!');
// james.emit('speak', 'hey dude!');
// mary.emit('speak', 'hey, im a girl!');
//
// console.log(james);

//------------------------------------

// let fs = require('fs'); //file service
//
// fs.readFile('dumb.txt', 'utf8', function(err, data){
//   fs.writeFile('writeNew.txt', data + " naujas failas");
// });

// fs.writeFileSync('myNew.txt', readMe);

// console.log(readMe);

//-------------------------------------------------

let fs = require('fs');
let path = require('path');
//
// fs.mkdir('stuff', function(){
//   fs.writeFileSync('./stuff/newFile.txt', 'mano nauja informacija');
// });

const directory = 'stuff';
fs.readdir(directory, (error, files)=>{
  for(const file of files) {
    fs.unlink(path.join(directory, file), err=> {
      if (err) throw err;
    });
  }
});

// fs.unlink('./stuff/newFile.txt', function(){
//   fs.rmdir('stuff');
// });
