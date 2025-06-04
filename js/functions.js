function compareLength(string, maxLength){
  return string.length <= maxLength;
}

function isPalindrome(string){
  string = string.replaceAll(' ', '').toLowerCase();
  let reverseString = '';
  for (let i = string.length - 1; i >= 0; i--){
    reverseString += string.at(i);
  }
  return string === reverseString;
}
(isPalindrome('abcba'));
(compareLength('abc',4));
