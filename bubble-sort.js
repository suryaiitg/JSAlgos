/**
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

function bubble_Sort(arr) {

  var length = arr.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1);
      }
    }
  }

  return arr;
}

console.log(bubble_Sort([3, 0, 2, 5, -1, 4, 1]));