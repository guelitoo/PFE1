function applyFunction(fn, value) {
  return fn(value);
}

const operations = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b
];

operations.forEach(fn => {
  console.log(fn(4, 2));
});
