//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
// let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
// let dog_names = ["Max","HAS","PuRple","dog"]

// function findWords(){
//     //Your code goes here
// }

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

function findWords(str, names) {
  for (let i = 0; i < names.length; i++) {
    // Convert both the string and the current name to lowercase for a case-insensitive match
    let lowercaseStr = str.toLowerCase();
    let lowercaseName = names[i].toLowerCase();

    if (lowercaseStr.includes(lowercaseName)) {
      console.log("Matched " + names[i]);
    }
  }

  if (!names.some(name => str.toLowerCase().includes(name.toLowerCase()))){
    console.log("No Matches");
  }
}

findWords(dog_string, dog_names);



// //============Exercise #2 ============//
// /*Write a fucntion that takes in an array and removes every even index with a splice,
// and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

// function replaceEvens(arr){
//     //code goes here
// }

// //Expected output
// //Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// //Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];

function replaceEvens(arr) {
  for (let i = 0; i < arr.length; i += 2) {
    arr.splice(i, 1, "even index");
  }
}

replaceEvens(arr);
console.log(arr);




// Code wars #1
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoot(n) {
  while (n >= 10) {
    // Convert the number to a string, split into digits, and sum them
    n = n.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  }

  return n;
}

// Examples
console.log(digitalRoot(16));     // Output: 7
console.log(digitalRoot(942));    // Output: 6
console.log(digitalRoot(132189)); // Output: 6
console.log(digitalRoot(493193)); // Output: 2


// Code Wars #2

// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
  // Convert the string to lowercase to handle case-insensitivity
  let lowercaseString = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    // Check if the current character appears only once in the string
    if (
      lowercaseString.indexOf(lowercaseString[i]) === i &&
      lowercaseString.lastIndexOf(lowercaseString[i]) === i
    ) {
      return s[i];
    }
  }

  // Return an empty string if no non-repeating character is found
  return '';
}

// Examples
console.log(firstNonRepeatingLetter('stress'));   // Output: 't'
console.log(firstNonRepeatingLetter('sTreSS'));   // Output: 'T'
console.log(firstNonRepeatingLetter('abba'));      // Output: ''


// Code Wars #3

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

function countCharacters(s) {
  let charCount = {};

  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
}

// Examples
console.log(countCharacters('aba'));  // Output: { 'a': 2, 'b': 1 }
console.log(countCharacters(''));      // Output: {}

function countCharacters(s) {
  let charCount = {};

  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
}

// Examples
console.log(countCharacters('aba'));  // Output: { 'a': 2, 'b': 1 }
console.log(countCharacters(''));      // Output: {}


// Code Wars #4

// A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

function bouncingBall(h, bounce, window) {
  if (h > 0 && 0 < bounce < 1 && window < h) {
    let count = 1; // The initial drop
    let height = h * bounce;

    while (height > window) {
      count += 2; // Counting the upward and downward movement
      height *= bounce;
    }

    return count;
  } else {
    return -1;
  }
}

// Examples
console.log(bouncingBall(3, 0.66, 1.5)); // Output: 3
console.log(bouncingBall(3, 1, 1.5));    // Output: -1
