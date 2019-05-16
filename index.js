function convertToRoman(num) {
  let arr = generatePlaceValues(num);
  console.log(arr);
  let number = arr.map(function(ele){
    return romanObj[ele] ? romanObj[ele] : findReplacementNumeral(ele)
  }).join('');
 return number;
}

function findReplacementNumeral(num){
  let keys = Object.keys(romanObj);
  let replacementNumeral = keys.find(function(ele){
    if(ele-10 >= num){
     return ele;
    }
    else if(ele+30 <= num){
      return ele;      
    }
  });
    return replacementNumeral ? romanObj[replacementNumeral] : timeToSplit(num);
}

function timeToSplit(num){
  let placeValue =  computePlaceValue(num);
  let noOfRepeat = num/placeValue;
  let str = "";
  for(let i =0;i< noOfRepeat;i++){
    str+= romanObj[placeValue];
  }
  return str;
}

function computePlaceValue(num){
    let placeValue = 1;
    let noOfZeros = (num.toString()).length - 1;
    for (let i = 0; i < noOfZeros; i++) {
      placeValue = placeValue * 10;
    }
    return placeValue;
}

function generatePlaceValues(x, array) {
    let numString = x ? x.toString() : "";
    let arr = array;
    arr = (arr && arr.length > 0) ? arr : [];
    let placeValue = computePlaceValue(numString);
    let reduceValue = (Math.floor(x / placeValue)) * placeValue;
    arr.push(reduceValue);
    if(numString.length > 1)
      generatePlaceValues(x % placeValue, arr);
    return arr;
} 

let romanObj = {
  "1" : "I",
  "2" : "II",
  "3" : "III",
  "4" : "IV",
  "5" : "V",
  "6" : "VI",
  "7" : "VII",
  "8" : "VIII",
  "9" : "IX",
  "10": "X",
  "50": "L",
  "100": "C",
  "500": "D",
  "1000": "M"
}

let result = convertToRoman(41);
console.log(result);
// examples 
console.log(computePlaceValue(83913,[]));

// response
returns an array : [80000, 3000, 900, 10, 3]
