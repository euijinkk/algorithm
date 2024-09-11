var isSymmetric = function (root) {
  if (!root) return true; // 빈 트리는 대칭

  let queue = [root.left, root.right]; // 큐에 왼쪽, 오른쪽 추가

  while (queue.length > 0) {
    let left = queue.shift();
    let right = queue.shift();

    if (!left && !right) continue; // 둘 다 null이면 다음으로
    if (!left || !right || left.val !== right.val) return false; // 대칭이 아니면 false

    // 왼쪽 자식의 왼쪽, 오른쪽 자식의 오른쪽을 비교
    queue.push(left.left, right.right);
    // 왼쪽 자식의 오른쪽, 오른쪽 자식의 왼쪽을 비교
    queue.push(left.right, right.left);
  }

  return true;
};
