function repetitionMap(listOfColors) {
  obj = {};
  for (const i of listOfColors) {
    if (obj.hasOwnProperty(i)) {
      obj[i]++;
    } else {
      obj[i] = 1;
    }
  }
  return sortByValues(obj);
} //console.log(repetitionMap(["green", "yellow", "green", "blue"]));

function sortByValues(objToSort) {
  return Object.fromEntries(
    Object.entries(objToSort).sort((a, b) => a[1] - b[1])
  );
}

//console.log(sortByValues({ green: 2, yellow: 1, blue: 2 }));

module.exports = { repetitionMap };
