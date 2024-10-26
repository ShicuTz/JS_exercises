const { factors } = require("../../src/index");
const { expect } = require("chai");

const TEST_DATA = {
  input: 100,
  expectedOutput: [1, 2, 4, 5, 10, 20, 25, 50, 100],
};

describe("factors", () => {
  it("homework1 : displays list of factors for a number", () => {
    expect(factors(TEST_DATA.input)).deep.equals(TEST_DATA.expectedOutput);
  });
});
