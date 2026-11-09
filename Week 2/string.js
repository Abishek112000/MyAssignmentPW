// Example 1

let s = "Hello World";
let word = s.split(" ");
console.log(`The Length of Word World is ${word[1].length}`);

//Example 2
let b = "    fly me to  the moon";
let test = b.trim.split(" ");
let testing = test[test.length - 1];
console.log(testing.length);

//Example 3

function isAnagram(str1, str2) {
  let string1 = str1.toLowercase().split("").sort().join("");
  let string2 = str2.toLowercase().split("").sort().join("");

  return string1 === string2;
}
console.log(isAnagram("silent", "listen"));
console.log(isAnagram("Hello", "World"));
