function isSameTree(p, q) {
  const queue = [p, q];
  while (queue.length > 0) {
    const first = queue.shift();
    const second = queue.shift();

    if (!first && !second) {
      continue;
    }
    if (first?.val !== second?.val) {
      return false;
    }

    queue.push(first.left, second.left, first.right, second.right);
  }

  return true;
}
