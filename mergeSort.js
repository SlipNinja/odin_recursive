let randomlist = [11, 8, 1, 4, 5, 10, 7, 2, 6, 3, 0, 9];
console.log("Final list : " + mergeSort(randomlist));

// Recursive merge sort function
function mergeSort(l){
  if(l.length < 2) return l;
  
  let middleIndex = Math.floor((l.length)/2);
  let l1 = l.slice(0, middleIndex);
  let l2 = l.slice(middleIndex);

  l1 = mergeSort(l1);
  l2 = mergeSort(l2);

  let i = 0;
  let j = 0;
  let l3 = [];
  
  while(i <= l1.length || j <= l2.length){
    if(i == l1.length){
      l3 = l3.concat(l2.splice(j));
      break;
    }
    
    if(j == l2.length){
      l3 = l3.concat(l1.slice(i));
      break;
    }

    if(l1[i] <= l2[j]){
      l3.push(l1[i]);
      i++;
    } else {
      l3.push(l2[j]);
      j++;
    }
  }
  return l3;
}
