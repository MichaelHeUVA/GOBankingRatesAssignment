function reverseString(str) {
  return str.split("").reverse().join("");
}

let reversedString = reverseString("Hello World!");

console.log(reversedString); // Output: "!dlroW olleH"
