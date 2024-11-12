// 4. You are analyzing test scores. Skip any score below 60 and print only the passing scores using continue.

const scores = [45, 82, 56, 74, 90, 38];

for (let i = 0; i < scores.length; i++) {
 if (scores[i] < 60) {
  continue;
 }
 console.log("Passing score:", scores[i]);
}

// Expected Output:
// Passing score: 82
// Passing score: 74
// Passing score: 90
