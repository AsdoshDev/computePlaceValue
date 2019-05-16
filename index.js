function computePlaceValue(x, array) {
    let numString = x ? x.toString() : "";
    let noOfZeros = (numString).length - 1;
    let placeValue = 1;
    let arr = array;
    arr = (arr && arr.length > 0) ? arr : [];
    for (let i = 0; i < noOfZeros; i++) {
      placeValue = placeValue * 10;
    }
    let reduceValue = (Math.floor(x / placeValue)) * placeValue;
    arr.push(reduceValue);
    if(numString.length > 1)
      computePlaceValue(x % placeValue, arr);
    return arr;
}  
  
// examples 
console.log(computePlaceValue(83913,[]));

// response
returns an array : [80000, 3000, 900, 10, 3]
