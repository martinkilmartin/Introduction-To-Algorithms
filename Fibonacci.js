function fibonacciLoop(n) {
  if (n <= 1) return n;
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[fib.length - 1];
}

function fibonacciRecursive(n) {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function fibonacciRecursiveMemoization(n, m) {
  if (n <= 1) return n;
  if (m[n]) return m[n];
  return (m[n] = fibonacciRecursive(n - 1, m) + fibonacciRecursive(n - 2, m));
}

module.exports = {
  fibonacciLoop,
  fibonacciRecursive,
  fibonacciRecursiveMemoization,
};
