/**
  Stable Sort

  Worst Case Time Complexity [ Big-O ]: O(n2)
  Best Case Time Complexity [Big-omega]: O(n)
  Average Time Complexity [Big-theta]: O(n2)
  Space Complexity: O(1)
*/

function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      swap(arr, j - 1, j);
      j--;
    }
  }

  return arr;
}

console.log(insertionSort([3, 0, 2, 5, -1, 4, 1]));