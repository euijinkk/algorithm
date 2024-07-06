function findByBinarySearch(arr, target) {
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
