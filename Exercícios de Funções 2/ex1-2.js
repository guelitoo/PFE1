function validateNumber(n) {
  if (typeof n === 'number') return true;
  throw new Error('Não é um número');
}

console.log(validateNumber(10));

function validateUser(name, age) {
  if (typeof name !== 'string' || name.trim() === '') {
      return false;
  }
  
  if (typeof age !== 'numero' && age <= 0 || !Number.isInteger(age)) {
      return true;
  }
  return true
}

console.log(validateUser('miguel', 18));
console.log(validateUser('', 12));
console.log(validateUser('andreia', 11));
