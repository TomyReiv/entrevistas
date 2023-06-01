function disemvowel(str) {
  let regularExpresion = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  let vowels = str.split("").filter((char) => {
    return !regularExpresion.includes(char);
  });
  vowels = vowels.join("");
  str = vowels;
  return str;
}

console.log(disemvowel("casa"));
