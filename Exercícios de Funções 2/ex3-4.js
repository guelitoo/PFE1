function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

function countDown(n) {
  if (n === 0) return;
  console.log(n);
  countDown(n - 1);
}
