// 5. You have a list of products. Skip over any product marked as "on sale" and print the rest using continue.


const products = ["normal", "on sale", "normal", "on sale", "premium"];

for (let i = 0; i < products.length; i++) {
 if (products[i] === "on sale") {
  continue;
 }
 console.log("Product:", products[i]);
}

// Expected Output:
// Product: normal
// Product: normal
// Product: premium
