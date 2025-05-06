let analysisType = "sum";

function analyzeNumbers(analysisType, numbers) {

    function sumNumbers(arr) {
        let total = 0; 
        for (let num of arr) {
            total += num;
        }
        return total;
    }

    function averageNumbers(arr) {
        let total = 0; 
        for (let num of arr) {
            total += num;
        }
        return total / arr.length;
    }

    if (analysisType === "sum") {
        return sumNumbers(numbers);
    } else if (analysisType === "average") {
        return averageNumbers(numbers);
    } else {
        return "Tipo de análise inválido.";
    }
}

console.log(analyzeNumbers("sum", [1, 2, 3, 4]));     
console.log(analyzeNumbers("average", [1, 2, 3, 4])); 
