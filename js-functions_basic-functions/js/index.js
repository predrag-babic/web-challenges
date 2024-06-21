/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--
let title = "The Lord of the Javascript";
let author = "Mario";
let rating = 4.2;
let sales = 120;

// --^-- write your code here --^--
console.log(`Title: ${title}`);
console.log(`Author: ${author}`);
console.log(`Rating: ${rating}`);
console.log(`Sales: ${sales}`);

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--

// --^-- write your code here --^--
sales = sales + 20;
rating = rating + 0.3;
console.log(`Sales: ${sales}`);
console.log(`Rating: ${rating}`);

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

function logBookData() {
  console.log(`Title: ${title}`);
  console.log(`Author: ${author}`);
  console.log(`Rating: ${rating}`);
  console.log(`Sales: ${sales}`);
}

logBookData();

sales = sales + 50;
rating = rating + 0.5;

logBookData();

// --v-- write your code here --v--

// --^-- write your code here --^--
