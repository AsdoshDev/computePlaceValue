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
    else if(num>= ele && num-ele <= (3* placeValue){
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
