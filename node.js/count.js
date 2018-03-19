let counter = function(arr){
  return 'there are ' + arr.length + ' elements in this array';
};

let sum = function(a,b){
  return `sum of two numbers is ${a+b}`;
};

let pi = function(){
  return 3.14;
}

//
// module.exports.counter = counter;
// module.exports.manoSuma = sum;

module.exports = {
  counter: counter,
  manoSuma: sum,
  pi
};
