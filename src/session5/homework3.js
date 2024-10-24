/*Task 3
Creat a function that converts a natural number to binary (base 2).
i.e.
toBinary(3) = 11
toBinary(10) = 1010*/

function endToStart(word) {
  return word.split("").reverse().join("");
}

function toBinary(x) {
  str = "";
  while (x > 0) {
    str += x % 2;
    x = Math.floor(x / 2);
  }

  //console.log(endToStart(str));
  return endToStart(str);
}
/*toBinary(3);
toBinary(10);*/

module.exports = { toBinary };
