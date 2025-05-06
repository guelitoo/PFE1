function ex1() {

    let nomes = ['Miguel', 'Murilo', 'Mateus', 'Julio', 'Pedro'];

    for (let nome of nomes) {
        console.log(nome);
    }

}

function ex2() {

    let values = [1, 2, 3, 4, 5];
    let sum = 0;

    for (let number of values) {
        sum += number;
    }

    console.log(sum); // -> 15

}

function ex3() {

    let pessoas = {
        nome: "Calvin",
        idade: 66,
        cidade: "Sorocaba"
    };

    for (let key in pessoas) {
        console.log(`${key} -> ${pessoas[key]}`);
    };

}

function ex4() {

    let pessoas = {
        nome: "Calvin",
        idade: 66,
        cidade: "Sorocaba"
    };

    let contador = 0;

    for (let key in pessoas) {
        contador++;
    }

    console.log("O objeto tem", contador, "propriedades.");

}

function ex5() {

    let nomes = ['Miguel', 'Murilo', 'julio', 'mateus'];
    let con = '';

    for (let number of nomes) {
        con += number + ", ";
    }
    console.log(con);
}

function ex6() {

    let valoresMistos = [10, 'texto', true, null, { nome: 'Objeto' }];

    for (let valor of valoresMistos) {
        console.log(typeof valor);
    }

}

function ex7() {

    let pessoas = {
        Ana: 25,
        Carlos: 30,
        Maria: 20,
        Joao: 35
    };

    for (let nome in pessoas) {
        pessoas[nome] += 1;
    }
    console.log(pessoas);
}

function ex8() {

    let objeto = {
        nome: 'Ana',
        idade: 25,
        cidade: 'São Paulo',
        profissao: 'Engenheira'
    };

    let arrayStrings = [];

    for (let chave in objeto) {
        arrayStrings.push(`${chave}: ${objeto[chave]}`);
    }

    console.log(arrayStrings);
}

ex1();
ex2();
ex3();
ex4();
ex5();
ex6();
ex7();
ex8();