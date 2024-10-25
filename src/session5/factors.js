/*Task 1
Create a function that retuns all factors of a natural number.
i.e.
factors(100) = [1, 2, 4, 5, 10, 20, 25, 50, 100]*/

function factors(naturalNumber) {
  let listOfFactors = [];
  for (let i = 1; i <= naturalNumber; i++)
    if (naturalNumber % i == 0) {
      listOfFactors.push(i);
      //listOfFactors.push(naturalNumber / i);
    }
  return listOfFactors.sort((a, b) => a - b);
}

module.exports = { factors };
