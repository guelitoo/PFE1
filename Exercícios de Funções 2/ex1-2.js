function validateNumber(n) {
  if (typeof n === 'number') return true;
  throw new Error('Não é um número');
}

function validateUser(name, age) {
  return typeof name === 'string' && name !== '' && typeof age === 'numero' && age >= 0;
}
