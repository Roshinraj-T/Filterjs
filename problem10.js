// ===================problem10======================
// Write a function that takes an array of strings and returns a new array with only 
// the strings that are palindromes. Use the filter method to accomplish this.
strings=['madam','roshin','rajiv','sleva','rar']
function isPalindrome(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return str === reversedStr;
  }
palindromes=strings.filter((e)=>isPalindrome(e))  
console.log(palindromes);