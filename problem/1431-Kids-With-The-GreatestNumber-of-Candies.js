function kidsWithCandies(candies, extraCandies) {
  const max = Math.max(...candies);
  const res = [];

  for (num of candies) {
    res.push(num + extraCandies >= max);
  }

  return res;
}
