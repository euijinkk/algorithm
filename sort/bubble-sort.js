function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

/**
 * 개선버전
 * 한번의 순회에서 1번도 교체되지 않는다면, break 하고 return 한다.
 * Best 의 연산횟수는 n-1 이다. 즉 시간복잡도는 O(n) 이다.
 */
function bubbleSort(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (swapped === false) {
      break;
    }
  }
  return arr;
}
