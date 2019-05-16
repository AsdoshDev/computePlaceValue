function computePlaceValue(x, arr) {
    let numString = x ? x.toString() : "";
    var arr = (arr && arr.length > 0) ? arr : [];
    let noOfZeros = (numString).length - 1;
    let placeValue = 1;
    for (let i = 0; i < noOfZeros; i++) {
      placeValue = placeValue * 10;
    }
    let reduceValue = (Math.floor(x / placeValue)) * placeValue;
    arr.push(reduceValue);
    if (numString.length > 1) {
      computePlaceValue(x % placeValue, arr);
    }
    else {
      console.log(arr);
      return arr;
    }
  }
  
// examples 
console.log(computePlaceValue(83913,[]));

// response
returns an array : [80000, 3000, 900, 10, 3]
