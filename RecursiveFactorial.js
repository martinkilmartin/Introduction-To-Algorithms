function factorial(n) {
  if (typeof n !== "number") return "NaN";
  if (n < 0) return "n must be > or = to 0";
  if (n <= 1) return 1; // Base Case
  return n * factorial(n - 1); // Recursion
}

module.exports = {
  factorial,
};
