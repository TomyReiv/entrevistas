var majorityElement = function (nums) {
    const countMap = {}; // Objeto para realizar el conteo de elementos

    // Realizar el conteo de cada elemento
    for (let num of nums) {
        if (countMap[num]) {
            countMap[num]++;
        } else {
            countMap[num] = 1;
        }
    }

    let mostFrequentElement;
    let maxCount = 0;

    // Encontrar el elemento más frecuente
    for (let num in countMap) {
        if (countMap[num] > maxCount) {
            maxCount = countMap[num];
            mostFrequentElement = num;
        }
    }

    return mostFrequentElement;
};