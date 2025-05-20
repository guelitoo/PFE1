function validateNumber(n) {
  if (typeof n === 'number') return true;
  throw new Error('Não é um número');
}

console.log(validateNumber(10));

function validateUser(name, age) {
  return typeof name === 'string' && name !== '' && typeof age === 'numero' && age >= 0;
}

console.log(validateUser(Miguel, 18));
