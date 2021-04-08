function countToZero(i) {
  if (typeof i !== "number") return "NaN";
  console.log(i);
  if (i === 0) return i; // Base Case
  if (i > 0) {
    return countToZero(i - 1); // Recursion
  } else {
    return countToZero(i + 1); // Recursion
  }
}

module.exports = {
  countToZero,
};
