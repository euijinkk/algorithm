/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  return deepEqual(findLeafs(root1), findLeafs(root2));
};

function deepEqual(arr1, arr2) {
  // 배열의 길이가 다르면 false 반환
  if (arr1.length !== arr2.length) {
    return false;
  }

  // 요소 하나하나 비교
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

function findLeafs(tree) {
  const result = [];

  function dfs(node) {
    if (node == null) {
      return;
    }

    // 리프 노드인지 확인 (자식 노드가 없을 때)
    if (node.left === null && node.right === null) {
      result.push(node.val); // 리프 노드의 값을 배열에 추가
      return;
    }

    dfs(node.left);
    dfs(node.right);
  }

  dfs(tree);
  return result;
}
