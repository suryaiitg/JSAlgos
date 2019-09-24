/**
  Unstable Sort

  Worst Case Time Complexity [ Big-O ]: O(n2)
  Best Case Time Complexity [Big-omega]: O(n*log n)
  Average Time Complexity [Big-theta]: O(n*log n)
  Space Complexity: O(n*log n)
  */

function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function quicksort(arr, p, r, left) {
  console.log('quicksort called arr, p, r, left: ', arr, p, r, left);
  if(p < r) {
    var q;
    q = partition(arr, p, r);
    if (p != q) {
      quicksort(arr, p, q - 1, -1);
      quicksort(arr, q + 1, r, 1);
    }
  }
}

function partition (arr, low, high) {
  console.log('partition called arr, low, high: ', arr, low, high);
  let pivot = arr[high];
  let i = (low - 1);

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  
  swap(arr, i + 1, high);
  
  return (i + 1);
}

var arr = [3, 0, 2, 5, -1, 4, 1];
quicksort(arr, 0, arr.length - 1);
console.log(arr);

