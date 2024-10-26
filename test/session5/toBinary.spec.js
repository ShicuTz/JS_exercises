const { toBinary } = require("../../src/index");
const { expect } = require("chai");

const TEST_DATA = {
  input: [3, 10],
  expectedOutput: ["11", "1010"],
};

describe("toBinary test", () => {
  it("homework3: converts decimal number to binary", () => {
    expect(toBinary(TEST_DATA.input[0])).deep.equals(
      TEST_DATA.expectedOutput[0]
    );

    expect(toBinary(TEST_DATA.input[1])).deep.equals(
      TEST_DATA.expectedOutput[1]
    );
  });
});
