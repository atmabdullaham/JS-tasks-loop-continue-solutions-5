// 1. You are analyzing a list of flags. Skip over any "red flag" and print the rest. Use continue to skip these items.


const flags = ["green", "red", "blue", "red", "yellow"];

for (let i = 0; i < flags.length; i++) {
 if (flags[i] === "red") {
  continue;
 }
 console.log("Flag:", flags[i]);
}

// Expected Output:
// Flag: green
// Flag: blue
// Flag: yellow
