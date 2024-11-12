// 3. Given an array of names, skip over any empty strings using continue and print the rest.

const names = ["Tom", "", "Jerry", "", "Spike"];

for (let i = 0; i < names.length; i++) {
 if (names[i] === "") {
  continue;
 }
 console.log("Name:", names[i]);
}

// Expected Output:
// Name: Tom
// Name: Jerry
// Name: Spike
