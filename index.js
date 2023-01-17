function isPalindrome(word) {
  // iterate from the beginning of the string to the middle of the string 
  for( let i = 0; i < word.length / 2; i++){
    const j = word.length - 1 - i;
    let startChar = word[i];
    let endChar = word[j];
      //   compare the letters we're iterating over to the corresponding letter at the end
      //     if the letters don't match, return false
      if (startChar !== endChar) return false;

  }

  // if we reach the middle, and all the letters match, return true.
  return true;

}


/* 
  Add your pseudocode here
  Write a function that will receive on argument, a string. The function should return true if
  the the string is a palindrome, and return false if the string is not a palindrome.

  iterate from the beginning of the string to the middle of the string 
    compare the letters we're iterating over to the corresponding letter at 
      if the letters don't match, return false

  if we reach the middle, and all the letters match, return true.
*/

/*

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("kayak"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("tacocat"));

}

module.exports = isPalindrome;
