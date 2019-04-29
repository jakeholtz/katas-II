const minDepth = (root, depth = 1, min = null) => {
  if (!root) return 0;
  
  if (!root.left && !root.right && (min === null || depth < min)) min = depth;
  if (root.left) min = minDepth(root.left, depth + 1, min);
  if (root.right) min = minDepth(root.right, depth + 1, min);

  return min;
}
