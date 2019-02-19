1 sort

var m = new Map();
m.set('2-1', "abc");
m.set('0-1', "xyz");
m.set('3-1', "jan");

var mapas = new Map([...m.entries()].sort());

console.log(mapas)

2 for

var input = [2,3,8,1,4,5,9,7,6];

var output = [];
var inserted;

for (var i = 0, ii = input.length ; i < ii ; i++){
  inserted = false;
  for (var j = 0, jj = output.length ; j < jj ; j++){
    if (input[i] < output[j]){
      inserted = true;
      output.splice(j, 0, input[i]);
      break;
    }
  }
  
  if (!inserted)
    output.push(input[i])
}

console.log(output);

3 foreach

ab = [];
ab[0] = 100;
ab[5] = 50;
ab[3] = 500;
ab[4] = 300;
ab.sort( function( a, b ) { return a - b });
ab.forEach( function( value ) { console.log( value ) }); 
