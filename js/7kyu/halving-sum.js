/*
Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...

All elements of the sum are the results of integer division.
Example

25  =>  25 + 12 + 6 + 3 + 1 = 47
*/

function halvingSum(n) { 
  let divisor = 1;
  let sum = 0;
  
  while (n/divisor >= 1) {
    sum += Math.floor(n / divisor);
    divisor *= 2;
  }
  
  return sum;
}