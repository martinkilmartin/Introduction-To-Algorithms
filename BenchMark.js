function benchmark(f) {
  const start = new Date().getTime();
  for (let i = 0; i < 1000000; i++) {
    f();
  }
  const end = new Date().getTime();
  return end - start;
}
