/**
 * 2215. Find the Difference of Two Arrays
 */

function findDifference(nums1, nums2) {
  return [
    findDifferenceFromArray(nums1, nums2),
    findDifferenceFromArray(nums2, nums1),
  ];
}

function findDifferenceFromArray(A, B) {
  // make A Set
  // also make B Set
  const distinctA = new Set(A);
  const distinctB = new Set(B);
  const res = [];

  // Loop through A and check B has that element
  for (el of Array.from(distinctA)) {
    if (distinctB.has(el) !== true) {
      res.push(el);
    }
  }

  return res;
}
