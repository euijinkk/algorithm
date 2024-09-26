/**
 * 1. Solving
 * 2. Algorithm anaysis
 *  - Time Complexity :
 *  - Space Complexity :
 *  - Data structure :
 * 3. Improve algorithm
 */

// tickets = [2,3,2], k = 2 -> 6
// tickets = [5,1,1,1], k = 0 -> 8
// tickets = [2,3,4], k= 2 -> 2+3+4=9
// 4. tickets = [2,3,4], k= 1 -> 2+2+2+1=7 =2+3+2
// 5. tickets = [4,3,2], k= 2 -> 6
// tickets = [4,3,2], k= 1 -> 3+3+2

// k - before - lower value (-) + higher value
// k - after - lower value

// tickets = [5,1,1,1], k = 0 -> 8

// 4. tickets = [2,3,4], k= 1 -> 2+3+2=7

// 4 example
// the index(0) less than k(0)
//   (ex4)if the number 2 is less than 3 => +number(2)
//   (ex5)if the number 4 is greater than 3 () => + the value at index k
// the index() greater than k(0)
//   (ex5) if the number 2 is less than 3 => +number(2) (same)
//   (ex4) if the number 4 is greater than 3 () => + the value at index k

//   (ex5) if the number 1 is less than 5 => +number(2)
//   (ex4) if the number 1 is greater than 5 => + number

// 2073
// mathematical solution
function timeRequiredToBuy2(arr, k) {
  let requiredTime = 0;
  const numberK = arr[k];

  for (let i = 0; i < arr.length; i++) {
    const number1 = arr[i]; // 1

    if (i < k) {
      // 1 <= 5
      if (number1 <= numberK) {
        // 1
        requiredTime += number1;
      } else {
        requiredTime += numberK;
      }
      continue;
    } else if (i === k) {
      // first
      requiredTime += numberK;
    } else {
      //
      if (number1 < numberK) {
        // 5
        requiredTime += number1;
      } else {
        requiredTime += numberK - 1;
      }
    }
  }

  return requiredTime;
}

// solution2

// declare time = 0
// iterate until arr[k] === 0 (i: 0->1->2->...->n->0->1->2)
// in a iteration, arr[i]-=1
// every iteration, time+=1
function timeRequiredToBuy(arr, k) {
  let time = 0;

  let i = 0;
  while (arr[k] > 0) {
    if (arr[i] !== 0) {
      arr[i] -= 1;
      time += 1;
    }

    if (i === arr.length - 1) {
      i = 0;
    } else {
      i += 1;
    }
  }

  return time;
}

// solution using queue
var timeRequiredToBuy = function (tickets, k) {
  let queue = tickets.map((ticketCount, index) => [ticketCount, index]);
  let time = 0;

  while (queue.length > 0) {
    let [ticketCount, index] = queue.shift();
    ticketCount -= 1;
    time += 1;

    if (ticketCount > 0) {
      queue.push([ticketCount, index]);
    }

    if (index === k && ticketCount === 0) {
      return time;
    }
  }
  return time;
};

// console.log(timeRequiredToBuy([2, 3, 2], 2));
console.log(timeRequiredToBuy([5, 1, 1, 1], 0));
// console.log(timeRequiredToBuy([2, 3, 4], 2));
// console.log(timeRequiredToBuy([2, 3, 4], 1));
// console.log(timeRequiredToBuy([9, 1, 1, 2, 3, 9, 1, 2, 3], 6));

// tickets = [2,3,2], k = 2 -> 6
// tickets = [5,1,1,1], k = 0 -> 8
// tickets = [2,3,4], k= 2 -> 2+3+4=9
// 4. tickets = [2,3,4], k= 1 -> 2+3+3=8  answer = 7
// 5. tickets = [4,3,2], k= 2 -> 6
// tickets = [4,3,2], k= 1 -> 3+3+2
