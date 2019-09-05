// Add your functions here
function map(src,transformerFunction) {
    let newArray = [];
    for (let i = 0; i < src.length; i++) {
        newArray.push(transformerFunction(src[i]));
    }
    return newArray
}

function reduce(src,reducerFunction,startingValue) {
    let memo
    if (startingValue) {
        memo = reducerFunction(src[0], startingValue);
    } else {
        memo = src[0]
    }
    for (let i = 1; i < src.length; i++) {
        memo = reducerFunction(src[i], memo);
    }

    return memo
}