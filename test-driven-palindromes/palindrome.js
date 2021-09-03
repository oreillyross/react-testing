module.exports = (str) => {
  const cleanLine = str
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s/g, "")
    .toLowerCase();
  const reverseString = cleanLine
    .split("")
    .reverse()
    .join("");
  if (cleanLine === reverseString) {
    return [reverseString];
  } else return [];
};
