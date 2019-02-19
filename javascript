1 sort

var m = new Map();
m.set('2-1', "abc");
m.set('0-1', "xyz");
m.set('3-1', "jan");

var mapas = new Map([...m.entries()].sort());

console.log(mapas)

2 for

var inp = [2,3,8,1,4,5,9,7,6];

var o = [];
var done;

for (var i = 0, ii = inp.length ; i < ii ; i++){
  done = false;
  for (var j = 0, jj = o.length ; j < jj ; j++){
    if (inp[i] < o[j]){
      done = true;
      o.splice(j, 0, inp[i]);
      break;
    }
  }
  
  if (!done)
    o.push(i[i])
}

console.log(o);

3 foreach

ab = [];
ab[0] = 100;
a[b5] = 50;
ab[3] = 500;
ab[4] = 300;
ab.sort( function( a, b ) { return a - b });
ab.forEach( function( value ) { console.log( value ) }); 
