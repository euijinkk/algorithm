/**
 * DFS
 */
var maxDepth = function (root) {
  let max = 0;
  function dfs(tree, level) {
    if (tree == null || tree.val === null) {
      if (max < level) {
        max = level;
      }
      return;
    }
    dfs(tree.left, level + 1);
    dfs(tree.right, level + 1);
  }
  dfs(root, 0);

  return max;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

console.log(maxDepth(new TreeNode(3, 9, new TreeNode(20, 15, 7))));

/**
 * BFS
 */
var maxDepth = function (root) {
  if (!root) return 0;
  let levels = 0;
  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let count = queue.length;

    for (let i = 0; i < count; i++) {
      const node = queue.shift();
      if (node.right) {
        queue.push(node.right);
      }
      if (node.left) {
        queue.push(node.left);
      }
    }
    levels++;
  }
  return levels;
};
