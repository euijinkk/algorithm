function permute(arr, _k) {
  const k = _k ?? arr.length;
  const result = [];

  function recursive(alreadySelected) {
    if (alreadySelected.size === k) {
      result.push(Array.from(alreadySelected));
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (alreadySelected.has(arr[i]) === true) {
        continue;
      }
      alreadySelected.add(arr[i]);
      recursive(alreadySelected);
      alreadySelected.delete(arr[i]);
      continue;
    }
  }

  recursive(new Set([]));

  return result;
}
