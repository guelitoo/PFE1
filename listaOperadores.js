{
    console.log(`Exercício 1`);
    let x = 10;

    console.log(x); // => 10

    console.log();
    console.log(`Exercicio 2`);
    let a = 20;
    let b = 5;

    console.log(a + b); // => 25
    console.log(a - b); // => 15
    console.log(a * b); // => 100
    console.log(a / b); // => 4
    console.log(a % b); // => 0

    console.log();
    console.log(`Exercicio 3`);

    let num = -15;

    console.log(-num); // => 15

    console.log();
    console.log(`Exercicio 4`);

    let count = 5;

    console.log(++count); // => 6
    console.log(--count); // => 5

    console.log();
    console.log(`Exercicio 5`);
}
let x = 10;

console.log(x += 5); // => 15
console.log(x -= 3); // => 12
console.log(x *= 2); // => 24
console.log(x /= 4); // => 6
console.log(x %= 3); // => 0

console.log();
console.log(`Exercicio 6`);

let p = true;
let q = false;

console.log(p && q); // => false
console.log(p || q); // => true
console.log(!p); // => false
console.log(!q); // => true

console.log();
console.log(`Exercicio 7`);

console.log(0 || "Hello"); // => Hello
console.log("" && "World"); // => 
console.log(null ?? "Default Value"); // => Default Value
console.log(undefined ?? 42); // => 42

console.log();
console.log(`Exercicio 8`);

let resultado = 10 + 5 * 2 > 20 && !false;

console.log(resultado); /* => false, porque 
vai seguindo a conta, primeiro da multiplicação, 
depois a de adição, depois e o 20 > 20 que não é maior que 20,
depois a ! (exclamação), que é o oposto e depois usa o o &&, 
com um false e outro true vai dar false*/

console.log();
console.log(`Exercicio 9`);

console.log("5" - 2); // => Converte o "5" para int e 5-2=3
console.log("5" + 2); // => A String é concatenada ao 2 sendo 52 o resultado
console.log(true + 1); // => O booleano é convertido para o numero, então 1+1=2
console.log(false + 10); // => O booleano false é convertido para número 0 e somando com o 10, vai ficar 0+10=10
{
    console.log();
    console.log(`Exercicio 10`);

    let x = 5;
    let y = 10;
    let z = (x++ * --y) / 2 + (y % 3);

    console.log(z); /* => Primeiro parenteses é incrementado 1 ao x 
    e desencrmentado 1 do y e esses números são multiplicados, 
    no outro parenteses é epgo o resto da divisão e é divididospor 2 e somado ao segundo parenteses*/
}
