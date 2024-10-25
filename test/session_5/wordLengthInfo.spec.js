const {
  wordLengthInfo,
  getWordsInStr,
} = require("../../JS_files/session_5/homework2.js");
const { expect } = require("chai");

const TEST_DATA = {
  input: [
    "the fox something",
    "If I want to improve my skills, I need to practice. This is a good plan.",
  ],
  expectedOutput: [
    {
      3: ["the", "fox"],
      9: ["something"],
    },
    {
      1: ["I", "a"],
      2: ["If", "to", "my", "is"],
      4: ["want", "need", "This", "good", "plan"],
      6: ["skills"],
      7: ["improve"],
      8: ["practice"],
    },
  ],
};

describe("wordLengthInfo", () => {
  it("homework2: groups words in a text based on word length", () => {
    expect(wordLengthInfo(getWordsInStr(TEST_DATA.input[0]))).deep.equals(
      TEST_DATA.expectedOutput[0]
    );
    expect(wordLengthInfo(getWordsInStr(TEST_DATA.input[1]))).deep.equals(
      TEST_DATA.expectedOutput[1]
    );
  });
});
