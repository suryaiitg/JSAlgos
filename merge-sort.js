/**
  Stable Sort

  Worst Case Time Complexity [ Big-O ]: O(n*log n)
  Best Case Time Complexity [Big-omega]: O(n*log n)
  Average Time Complexity [Big-theta]: O(n*log n)
  Space Complexity: O(n)
*/

function mergeSort(arr, p, r, left) {
  console.log('mergeSort called arr, p, r, left: ', arr, p, r, left);
  var q;
  if(p < r) {
    q = parseInt((p + r) / 2);
    mergeSort(arr, p, q, -1);
    mergeSort(arr, q + 1, r, 1);
    merge(arr, p, q, r);
  }
}

function merge(arr, p, q, r) {
  console.log('merge called arr, p, q, r: ', arr, p, q, r);
  var brr = [];
  var i, j, k;
  k = 0;
  i = p;
  j = q + 1;
  while(i <= q && j <= r) {
    if(arr[i] < arr[j]) {
      brr[k++] = arr[i++];    // same as brr[k]=arr[i]; k++; i++;
    } else {
      brr[k++] = arr[j++];
    }
  }

  while(i <= q) {
    brr[k++] = arr[i++];
  }

  while(j <= r) {
    brr[k++] = arr[j++];
  }

  for(i=r; i >= p; i--) {
    arr[i] = brr[--k];  // copying back the sorted list to arr[]
  }

  return arr;
}

var arr = [3, 0, 2, 5, -1, 4, 1];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);