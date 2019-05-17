/* my solution */


function convertToRoman(num) {
  let arr = generatePlaceValues(num);
  let number = arr.map(function(ele){
    return romanObj[ele] ? romanObj[ele] : findReplacementNumeral(ele)
  }).join('');
 return number;
}

function findReplacementNumeral(num){
  let keys = Object.keys(romanObj);
  let isLess;
  let isMore;
  let repArray = [1000,500,100,50];
  let placeValue =  computePlaceValue(num);
  let replacementNumeral = repArray.find(function(ele){
    if(num<= ele && (ele - placeValue) <= num){
      isLess = true;
     return ele;
    }
    else if(num>= ele && num-ele <= (3* placeValue)){
      isMore = true;
      return ele;      
    }
  });
 
  let finalValue;
    if(isLess){
     finalValue = romanObj[placeValue] + romanObj[replacementNumeral]
    }
  else if(isMore){
           finalValue = romanObj[replacementNumeral] + convertToRoman(num - parseInt(replacementNumeral));
  }
    return replacementNumeral ? finalValue : timeToSplit(num);
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



/* other solutions fond in net */

var convertToRoman = function(num) {

  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var romanized = '';

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
}



function convertToRoman(num) {
  var romans = 
  // 10^i 10^i*5
    ["I", "V"], // 10^0
    ["X", "L"], // 10^1
    ["C", "D"], // 10^2
    ["M"]       // 10^3
  ],
      digits = num.toString()
        .split('')
        .reverse()
        .map(function(item, index) {
          return parseInt(item);
        }),
      numeral = "";

  // Loop through each digit, starting with the ones place
  for (var i=0; i<digits.length; i++) {
    // Make a Roman numeral that ignores 5-multiples and shortening rules
    numeral = romans[i][0].repeat(digits[i]) + numeral;
    // Check for a Roman numeral 5-multiple version
    if (romans[i][1]) {
      numeral = numeral
        // Change occurrences of 5 * 10^i to the corresponding 5-multiple Roman numeral
        .replace(romans[i][0].repeat(5), romans[i][1])
        // Shorten occurrences of 9 * 10^i
        .replace(romans[i][1] + romans[i][0].repeat(4), romans[i][0] + romans[i+1][0])
        // Shorten occurrences of 4 * 10^i
        .replace(romans[i][0].repeat(4), romans[i][0] + romans[i][1]);
    }
  }

  return numeral;
}

