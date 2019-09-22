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