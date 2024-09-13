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
 * @return {number}
 */
var goodNodes = function (root) {
  let result = 0;

  function dfs(tree, previousMax) {
    if (tree == null) {
      return;
    }
    const value = tree.val ?? tree;
    if (value >= previousMax) {
      result = result + 1;
    }
    if (tree.left == null && tree.right == null) {
      return;
    }
    const max = Math.max(tree.val, previousMax);
    dfs(tree.right, max);
    dfs(tree.left, max);
  }
  dfs(root, root.val);

  return result;
};
