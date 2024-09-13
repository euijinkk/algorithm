/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const right = queue.filter((v) => v != null || v?.val != null).at(-1);
    if (right != null) {
      result.push(right?.val ?? right);
    }

    const count = queue.length;
    for (let i = 0; i < count; i++) {
      const node = queue.shift();

      if (node?.left) {
        queue.push(node.left);
      }
      if (node?.right) {
        queue.push(node.right);
      }
    }
  }

  return result;
};
