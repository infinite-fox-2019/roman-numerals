function to_roman (num) {
  // your implementation code here
  if (num > 3000 || num < 1){
    return 'input number between 1 to 3000'
  }

  var romanNumeral = {
    MMM: 3000,
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    CCC: 300,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    XXX: 30,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    III: 3,
    I: 1
  }
  var romanArr = Object.keys(romanNumeral)

  var result = ''
  for(i=0 ; i<romanArr.length ; i++){
    if(num >= romanNumeral[romanArr[i]]){
      num -= romanNumeral[romanArr[i]]
      result += romanArr[i]
    }
  }
  return result
}

// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
