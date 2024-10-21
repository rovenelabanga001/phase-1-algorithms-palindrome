function isPalindrome(word) {
  // Write your algorithm here
  const cleanedStr = word.toLowerCase().replace(/[^a-z0-9]/g, '')
  const reversedStr = cleanedStr.split('').reverse().join('');

  return cleanedStr === reversedStr
}

/* 
  Add your pseudocode here
  function isPalindrome(word)
    variable cleaned string  converts word to lowercase, removes unwanted characters from a string
    variable reversed string reverses the cleaned string
    check if the cleaned string is same as reversed string
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
