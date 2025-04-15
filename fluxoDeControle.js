// Funções para os exercícios fáceis
function exercicio1() {
    const numero = parseInt(prompt("Digite um número:"));
    if (numero > 0) {
        console.log("O número é positivo.");
    } else {
        console.log("O número não é positivo.");
    }
}

function exercicio2() {
    const numero = parseInt(prompt("Digite um número:"));
    if (numero % 2 === 0) {
        console.log("O número é par.");
    } else {
        console.log("O número é ímpar.");
    }
}

function exercicio3() {
    const turno = prompt("Digite o turno (M para manhã, T para tarde, N para noite):").toUpperCase();
    if (turno === "M") {
        console.log("Bom dia!");
    } else if (turno === "T") {
        console.log("Boa tarde!");
    } else if (turno === "N") {
        console.log("Boa noite!");
    } else {
        console.log("Turno inválido!");
    }
}

function exercicio4() {
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));
    if (num1 > num2) {
        console.log(`O maior número é: ${num1}`);
    } else {
        console.log(`O maior número é: ${num2}`);
    }
}

function exercicio5() {
    const numero = parseFloat(prompt("Digite um número:"));
    console.log(numero >= 0 ? "Positivo" : "Negativo");
}

function exercicio6() {
    const opcao = prompt("Escolha uma opção:\n1 - Início\n2 - Sobre\n3 - Sair");
    switch (opcao) {
        case "1":
            console.log("Você escolheu Início");
            break;
        case "2":
            console.log("Você escolheu Sobre");
            break;
        case "3":
            console.log("Você escolheu Sair");
            break;
        default:
            console.log("Opção inválida");
    }
}

function exercicio7() {
    let contador = 1;
    while (contador <= 5) {
        console.log(contador);
        contador++;
    }
}

function exercicio8() {
    let contador = 5;
    do {
        console.log(contador);
        contador--;
    } while (contador >= 1);
}

function exercicio9() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

function exercicio10() {
    let soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += i;
    }
    console.log(`A soma dos números de 1 a 10 é: ${soma}`);
}

function exercicio11() {
    const array = ["Maçã", "Banana", "Laranja", "Uva"];
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

function exercicio12() {
    const nomes = ["Ana", "João", "Maria", "Pedro"];
    for (const nome of nomes) {
        console.log(nome);
    }
}

function exercicio13() {
    const pessoa = {
        nome: "Carlos",
        idade: 25,
        cidade: "São Paulo"
    };
    for (const propriedade in pessoa) {
        console.log(`${propriedade}: ${pessoa[propriedade]}`);
    }
}

function exercicio14() {
    for (let i = 1; i <= 10; i++) {
        if (i === 6) {
            break;
        }
        console.log(i);
    }
}

function exercicio15() {
    for (let i = 1; i <= 10; i++) {
        if (i === 7) {
            continue;
        }
        console.log(i);
    }
}

// Funções para os exercícios médios
function exercicio16() {
    const nota = parseFloat(prompt("Digite a nota do aluno (0 a 10):"));
    if (nota < 6) {
        console.log("Reprovado");
    } else if (nota >= 6 && nota < 8) {
        console.log("Recuperação");
    } else if (nota >= 8 && nota <= 10) {
        console.log("Aprovado");
    } else {
        console.log("Nota inválida");
    }
}

function exercicio17() {
    const numero = parseInt(prompt("Digite um número para ver sua tabuada:"));
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

function exercicio18() {
    const arrayMisto = [1, "a", 2, "b", 3, true, 4];
    let contador = 0;
    for (const elemento of arrayMisto) {
        if (typeof elemento === "number") {
            contador++;
        }
    }
    console.log(`O array possui ${contador} elementos numéricos.`);
}

// Funções para os exercícios difíceis
function exercicio19() {
    const palavra = prompt("Digite uma palavra:").toLowerCase();
    let palavraInvertida = "";
    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida += palavra[i];
    }
    if (palavra === palavraInvertida) {
        console.log("A palavra é um palíndromo!");
    } else {
        console.log("A palavra não é um palíndromo.");
    }
}

function exercicio20() {
    let opcao;
    while (opcao !== "4") {
        opcao = prompt(
            "Menu:\n1 - Opção 1\n2 - Opção 2\n3 - Opção 3\n4 - Sair"
        );
        switch (opcao) {
            case "1":
                console.log("Você escolheu a Opção 1");
                break;
            case "2":
                console.log("Você escolheu a Opção 2");
                break;
            case "3":
                console.log("Você escolheu a Opção 3");
                break;
            case "4":
                console.log("Saindo do menu...");
                break;
            default:
                console.log("Opção inválida!");
        }
    }
}

// Menu principal
function exibirMenu() {
    console.log("=== MENU DE EXERCÍCIOS ===");
    console.log("1. Verificar se número é positivo");
    console.log("2. Número par ou ímpar");
    console.log("3. Boas-vindas por turno");
    console.log("4. Maior de dois números");
    console.log("5. Uso do operador ternário");
    console.log("6. Menu simples com switch");
    console.log("7. Contador de 1 a 5 com while");
    console.log("8. Contagem regressiva com do...while");
    console.log("9. Imprimir de 1 a 10 com for");
    console.log("10. Somar números de 1 a 10");
    console.log("11. Imprimir elementos de um array com for");
    console.log("12. Usar for...of com array");
    console.log("13. Usar for...in com objeto");
    console.log("14. Parar contagem com break");
    console.log("15. Pular número com continue");
    console.log("16. Classificar nota do aluno");
    console.log("17. Tabuada de um número");
    console.log("18. Contar elementos numéricos em um array misto");
    console.log("19. Verificar se uma palavra é palíndromo");
    console.log("20. Menu interativo com switch e while");
    console.log("0. Sair");
}

function executarExercicio(opcao) {
    switch (opcao) {
        case "1":
            exercicio1();
            break;
        case "2":
            exercicio2();
            break;
        case "3":
            exercicio3();
            break;
        case "4":
            exercicio4();
            break;
        case "5":
            exercicio5();
            break;
        case "6":
            exercicio6();
            break;
        case "7":
            exercicio7();
            break;
        case "8":
            exercicio8();
            break;
        case "9":
            exercicio9();
            break;
        case "10":
            exercicio10();
            break;
        case "11":
            exercicio11();
            break;
        case "12":
            exercicio12();
            break;
        case "13":
            exercicio13();
            break;
        case "14":
            exercicio14();
            break;
        case "15":
            exercicio15();
            break;
        case "16":
            exercicio16();
            break;
        case "17":
            exercicio17();
            break;
        case "18":
            exercicio18();
            break;
        case "19":
            exercicio19();
            break;
        case "20":
            exercicio20();
            break;
        case "0":
            console.log("Saindo...");
            return false;
        default:
            console.log("Opção inválida!");
    }
    return true;
}

// Programa principal
function main() {
    let continuar = true;
    while (continuar) {
        exibirMenu();
        const opcao = prompt("Escolha um exercício para executar (0 para sair):");
        continuar = executarExercicio(opcao);
    }
}

// Iniciar o programa
main();
