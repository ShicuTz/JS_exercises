/*
Task 2
Create a function that returns information about the length of the word in a text. Words are separated by spaces. Do not count commas or dots. No duplicate for words.
i.e.
str = 'If I want to improve my skills, I need to practice. This is a good plan.'
wordLengthInfo(str) = {
  1: ['I', 'a'],
  2: ['If', 'to', 'my', 'is'],
  4: ['want', 'need', 'This','good', 'plan'],
  6: ['skills'],
  7: ['improve'],
  8 : ['practice']
}*/
/*function getWordsInStr(str) {
  return str.split(" ").filter(function (n) {
    return n != "";
  });
}*/

function getWordsInStr(str) {
  return str
    .replace(/[,.]/g, "")
    .split(" ")
    .filter((n) => n != "");
}

function wordLengthInfo(arrayOfWords) {
  let obj = {};
  for (const key of arrayOfWords) {
    noOfLetters = key.length;
    if (obj.hasOwnProperty(noOfLetters)) {
      if (!obj[noOfLetters].includes(key)) {
        obj[noOfLetters].push(key);
      }
    } else {
      obj[noOfLetters] = [key];
    }
  }
  return obj;
}

module.exports = { wordLengthInfo, getWordsInStr };
/*const finalObject = wordLengthInfo(
  getWordsInStr(
    "If I want to improve my skills, I need to practice. This is a good plan."
  )
);*/
//console.log(finalObject);
