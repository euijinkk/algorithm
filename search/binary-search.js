function findByBinarySearchResursive(arr, target) {
  let result = undefined;
  function recursive(currentArr) {
    if (currentArr.length === 0) {
      return;
    }

    const midIndex = Math.round(currentArr.length / 2);
    const midValue = currentArr[midIndex];

    if (midValue === target) {
      result = midValue;
      return;
    } else if (midValue > target) {
      recursive(currentArr.slice(0, midIndex));
    } else {
      recursive(currentArr.slice(midIndex + 1));
    }
  }

  recursive(arr);

  return result;
}

function findByBinarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return undefined;
}
