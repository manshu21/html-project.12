let P = 5000;
let r = 10;
let n = 1;
let t = 3;

let A = P * (1 + r / (100 * n)) ** (n * t);
let CI = A - P;

// A=amount
// P=principle
// r=rate of intrest
// n=number of times interest is compound is as follow
// t=time(in year)

console.log("The total Amount after 3 years is", A);

console.log("The Compound Interest after 3 years is", CI);
