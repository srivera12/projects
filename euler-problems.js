// PROBLEM 1
// the sum of all multiples of 3 or 5
function sumOfMultiples(num1, num2, range) {
  // set sum as a variable that can be changed
  let sum = 0;
  // for loop through the range provided
  for (let i = 0; i <= range; i++) {
    // check if multiple of the first number - add to sum if so
    if (i % num1 === 0) {
      sum = sum + i;
    }
    // check if multiple of second number - add to sum if so
    else if (i % num2 === 0) {
      sum = sum + i;
    }
    // otherwise, just continue with the loop
  }
  // provide answer
  console.log(sum);
}
// below 1000 means range does not include it
// sumOfMultiples(3, 5, 999);

// PROBLEM 2
// Fibonacci sequence, only adding even values, not exceeding 4 million, find sum
function sumOfEvenFib(range) {
  // make array to hold sequence - include beginning values
  const fibSeq = [1, 2];
  let first = 1;
  let second = 2;
  let next = 0;
  // set loop to create sequence and push to array - stop when reach upper limit
  while (next < range) {
    // add values to make new sum
    next = first + second;
    // add sum to array
    fibSeq.push(next);
    // shift values
    first = second;
    second = next;
  }
  // once sequence is completed, add up even values
  let sum = 0;
  fibSeq
    .filter((num) => num % 2 === 0)
    .forEach((num) => {
      sum = sum + num;
    });
  // provide answer
  console.log(sum);
}
// sumOfEvenFib(4000000);

// // PROBLEM 3
// // largest prime factor of a certain number
// function largestPrimeFactor(number) {
//   // for loop to find factor - start from number and work down to get largest
//   // once find a factor, check if prime, otherwise continue
//   const factors = [];
//   const max = number / 2;
//   for (let i = max; i > 1; i--) {
//     // limit some options by automatically filtering for evens, threes, and fives
//     if (number % i === 0 && i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {
//       factors.push(i);
//     }
//   }
//   console.log(factors);
// }
// largestPrimeFactor(600851475143);

// PROBLEM 4
// find the largest possible palindrome possible from multiplying two 3-digit numbers
function largestPalindrome() {
  // multiply 3 digit numbers, check if product is a palindrome, once a palindrome is found, return it
  // since looking for largest product, start at largest value and only consider values within a small range, expand if necessary
  for (let i = 999; i > 900; i--) {
    for (let j = 999; j > 900; j--) {
      const product = i * j;
      const forward = String(product);
      if (forward === forward.split('').reverse().join('')) {
        console.log(i, j, product);
        return;
      }
    }
  }
}
// largestPalindrome();

// // PROBLEM 5
// // find the smallest number evenly divisible by all numbers from 1 to 20
// function smallestMultiple(upperLimit) {
// // get fewest factors needed by removing repetitive values (ex 10 removes need for 2 and 5); also ignore 1 since irrelevant
// // loop through upperLimit down, skipping unnecessary numbers
// // multiply with necessary numbers
// let multiple = 1;
// for (let i = upperLimit; i > 1; i--) {
//     if(  )
// }
// }
// smallestMultiple(10);

// PROBLEM 6
// sum the squares of the first 100 natural numbers, and square the sum of the first 100 natural numbers, find the difference
function sumSquareDifference() {
  let sumOfSquares = 0;
  let squareOfSums = 0;
  for (let i = 0; i <= 100; i++) {
    sumOfSquares = sumOfSquares + Math.pow(i, 2);
    squareOfSums = squareOfSums + i;
  }
  squareOfSums = Math.pow(squareOfSums, 2);
  console.log(squareOfSums - sumOfSquares);
}
// sumSquareDifference();

// PROBLEM 7
// find the 10001st prime number by collecting primes by iterating up, checking if are prime
function findPrime(number) {
  const primes = [];
  for (let i = 2; primes.length < number; i++) {
    let isPrime = true;
    for (let j = i - 1; j > 1; j--) {
      // if divisible by any lower number, is shown to be composite
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    // if it has gone through all lower numbers and hasn't been proven to be composite, push to collection of primes
    if (isPrime) {
      primes.push(i);
    }
  }
  console.log(primes.pop());
}
// findPrime(10001);

// PROBLEM 9
// find the three numbers(a, b, and c) for which a^2 + b^2 = c^2 AND a + b + c = 1000
// set both conditions so that they are equations equaling c, combine, and see what combos of a and b needs to equal 1000
function specialPythagorean() {
  const equalsThousand = [];
  for (let a = 1; a < 1000; a++) {
    for (let b = 1; b < 1000; b++) {
      if (Math.pow(Math.pow(a, 2) + Math.pow(b, 2), 1 / 2) + a + b === 1000) {
        equalsThousand.push([a, b]);
      }
    }
  }
  // find which combo of a and be matches a c and those conditions
  let a;
  let b;
  let c;
  let triplet;
  for (let i = 0; i < equalsThousand.length; i++) {
    a = equalsThousand[i][0];
    b = equalsThousand[i][1];
    c = 1000 - a - b;
    if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
      triplet = [a, b, c];
    }
  }
  console.log(triplet, triplet[0] * triplet[1] * triplet[2]);
}
// specialPythagorean();

// // PROBLEM 10
// // sum all the primes below 2 million
// // iterate up to 2 million, add each prime found to sum
// function sumPrimes(number) {
//   let sum = 0;
//   // start at 2, the lowest prime
//   for (let i = 2; i <= number; i++) {
//     // check if prime
//     let isPrime = true;
//     for (let j = i - 1; j > 1; j--) {
//       // if divisible by any lower number, is shown to be composite
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       sum = sum + i;
//     }
//   }
//   console.log(sum);
// }
// sumPrimes(2000000);
