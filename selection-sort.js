/**
  Unstable Sort

  Worst Case Time Complexity [ Big-O ]: O(n2)
  Best Case Time Complexity [Big-omega]: O(n2)
  Average Time Complexity [Big-theta]: O(n2)
  Space Complexity: O(1)
*/
function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function indexOfMinimum (arr, startIndex) {
  let minValue = arr[startIndex];
  let minIndex = startIndex;

  for(let i = minIndex + 1; i < arr.length; i++) {
    if(arr[i] < minValue) {
        minIndex = i;
        minValue = arr[i];
    }
  }

  return minIndex;
}

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let index = indexOfMinimum(arr, i);
    swap(arr, i, index);
  }

  return arr;
}

console.log(selectionSort([3, 0, 2, 5, -1, 4, 1]));