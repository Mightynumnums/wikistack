function split(arr) {
  return [arr.slice(0, arr.length / 2), arr.slice(arr.length / 2)];
}

function merge(arr1, arr2){
  var mergedArray = [];

  while(arr1.length && arr2.length){
    if (arr1[0] < arr2[0]){
      mergedArray.push(arr1.shift());
    }
    else {
      mergedArray.push(arr2.shift());
    }
  }

  mergedArray = mergedArray.concat(arr1).concat(arr2);

  return mergedArray;
}

// function mergeSort(arr){
//   if (arr.length === 1){
//     console.log("this is what we're returning ", arr);
//     return arr;

//   }
//   else {
//     if(Array.isArray(arr[0])){
//       mergeSort(arr[0]);
//       mergeSort(arr[1]);
//     }
//     else {
//       //here, arr[0] = a value and arr[1] = another value, we can go back out
//     }

//     let splitArray = split(arr);
//     console.log('this is the split array: ', splitArray)
//     mergeSort(splitArray);
//   }
// }