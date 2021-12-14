// funzione a tre argomenti che accetta un array e due numeri e filtra le posizioni comprese tra essi
function betweenArrayFilter(array, minIndex, maxIndex) {
    let result = "invalid parameters";
    if(minIndex < array.length && maxIndex < array.length && minIndex <= maxIndex) {
        result = array.filter((element) => {return (array.indexOf(element) >= minIndex && array.indexOf(element) <= maxIndex)});
    }
    return result;
}

const aArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log((betweenArrayFilter(aArray, 3, 5)));