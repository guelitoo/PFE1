function getMax(arr) {
    let maxTemp = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxTemp) {
            maxTemp = arr[i];
        }
    }
    return maxTemp;
}