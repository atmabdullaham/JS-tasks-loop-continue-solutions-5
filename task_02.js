// 2. Write a for loop to print numbers from 1 to 10, but skip numbers divisible by 3 using continue.

for (let i = 1; i <= 10; i++) {
 if (i % 3 === 0) {
  continue;
 }
 console.log(i);
}

// Expected Output: 1, 2, 4, 5, 7, 8, 10
