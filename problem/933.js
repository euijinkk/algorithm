/**
 * 1. Solving
 * 2. Algorithm anaysis
 *  - Time Complexity :
 *  - Space Complexity :
 *  - Data structure :
 * 3. Improve algorithm
 */

// 1. declare the array to store the request time.
// 2. if the ping is invoked, push t into array and return the valid values
// 3. the valid condition is t - 3000 <= c <= t
// 4. return the number of request that meet the valid condition.
// I'll fill in the details while solving the problem.

var RecentCounter = function () {
  this.arr = [];
  this.criteria = 0;
  return null;
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.arr.push(t);

  // we don't need to iterate all arr.
  // if it doesn't match once, it's better to drop out it.
  // declare the variable to store the criteria
  for (let i = this.criteria; i < this.arr.length; i++) {
    // 3. promising condition is t - 3000 <= c <= t
    const num = this.arr[i];
    const promising = t - 3000 <= num && num <= t;
    if (promising) {
      this.criteria = i;
      this.arr = this.arr.slice(i);
      return this.arr.length;
    }
  }
  // I don't need to iterate all numbers, since it is ascending sorted.

  // 4. return the number of request meeting promising condition.
};
