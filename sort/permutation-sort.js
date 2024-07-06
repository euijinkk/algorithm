// https://github.com/euijinkk/algorithm/blob/main/permutation/README.md
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

function isAscending(arr) {
  return arr.every((_, i) => {
    if (i === arr.length - 1) {
      return true;
    }
    return arr[i] <= arr[i + 1];
  });
}

function permutationSort(arr) {
  const permutations = permute(arr);

  return permutations.find(isAscending);
}
