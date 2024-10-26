const { repetitionMap } = require("../../src/index");
const { expect } = require("chai");

const TEST_DATA = {
  input: ["red", "green", "blue", "red", "red", "blue"],
  expectedOutput: {
    green: 1,
    blue: 2,
    red: 3,
  },
};

describe("repetitionMap", () => {
  it("groups colors based on numbers", () => {
    expect(repetitionMap(TEST_DATA.input)).deep.equals(
      TEST_DATA.expectedOutput
    );
  });

  it("also sorts object pairs based on the value", () => {
    arrayInput = Object.entries(repetitionMap(TEST_DATA.input));
    arrayOutput = Object.entries(TEST_DATA.expectedOutput);
    expect(arrayInput).deep.equals(arrayOutput);
  });
});
