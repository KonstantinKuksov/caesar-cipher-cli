module.exports = (code, min, max) => {
  if (code > max) {
    return code - 26;
  } else if (code < min) {
    return code + 26;
  } else return code;
};
