1 sort

var m = new Map();
m.set('2-1', "abc");
m.set('0-1', "xyz");
m.set('3-1', "jan");

var mapas = new Map([...m.entries()].sort());

console.log(mapas)

2 for

var arr1=[5,8,3,6,2,1,0];

var tmp;
for(var i=0;i<arr1.length;i++)
{
    for(var j=i+1;j<arr1.length;j++)
    {
        if(arr1[i] > arr1[j])
        {
            tmp=arr1[i];
            arr1[i]=arr1[j];
            arr1[j]=tmp;
        }
    }
}
for(var i=0;i<arr1.length;i++)
{
    console.log(arr1[i])
}

arr1.forEach(function(){
    console.log("print"+arr1);
});
3 foreach

ab = [];
ab[0] = 100;
ab[5] = 50;
ab[3] = 500;
ab[4] = 300;
ab.sort( function( a, b ) { return a - b });
ab.forEach( function( value ) { console.log( value ) }); 
