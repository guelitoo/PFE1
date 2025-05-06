function average(scores) {
    let sum = 0; 

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i]; 
    }

    let media = sum / scores.length; 
    return media; 
}

let resultado = average([8, 7.5, 9, 10]);
console.log("Média:", resultado);
