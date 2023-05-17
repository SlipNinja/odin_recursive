console.log(fibs(10));

// Recursive fibonacci func
function fibs(n){
  
  if(n <= 0) return [];
  if(n == 1) return [0];
  if(n == 2) return [0, 1];
  
  return myFibs(n-2, [0, 1]);
}

function myFibs(n, array){
  if(n <= 0) return array;
  
  let previous = array[array.length-1];
  let previousbis = array[array.length-2];
  let next = previous + previousbis;
  
  return myFibs(n-1, array.concat(next));
}
