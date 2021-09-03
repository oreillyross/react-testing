const palindromes = require("../palindrome");

describe("palindromes", () => {
  test("correctly identifies one palindrome", () => {
    expect(palindromes("madam")).toEqual(["madam"]);
    expect(palindromes("racecar")).toEqual(["racecar"]);
  });

  test("returns an empty array when no palindromes found", () => {
    expect(palindromes("tic tac toe")).toEqual([])
  })

  test("it ignores casing", () => {
    expect(palindromes('WoW')).toEqual(["wow"])
  })

  test("Ignores punctuation", () => {
    expect(palindromes("yo, banana boy!")).toEqual(["yobananaboy"])
  })

  test("detects multi-word palindromes", () => {
    expect(palindromes("A man, a plan, a canal, Panama")).toEqual(["amanaplanacanalpanama"])

  })

});
