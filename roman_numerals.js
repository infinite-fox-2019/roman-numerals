function to_roman(num) {

  let result = ''

  // while (num > 0) {

  //   if ((num - 1000) >= 0) {
  //     result += 'M'
  //     num -= 1000;
  //   } else if ((num - 900) >= 0) {
  //     result += 'CM'
  //     num -= 900
  //   } else if ((num - 500) >= 0) {
  //     result += 'D'
  //     num -= 500
  //   } else if ((num - 400) >= 0) {
  //     result += 'CD'
  //     num -= 400
  //   } else if ((num - 100) >= 0) {
  //     result += 'C'
  //     num -= 100
  //   } else if ((num - 90) >= 0) {
  //     result += 'XC'
  //     num -= 90
  //   } else if ((num - 50) >= 0) {
  //     result += 'L'
  //     num -= 50
  //   } else if ((num - 40) >= 0) {
  //     result += 'XL'
  //     num -= 40
  //   } else if ((num - 10) >= 0) {
  //     result += 'X'
  //     num -= 10
  //   } else if ((num - 9) >= 0) {
  //     result += 'IX'
  //     num -= 9
  //   } else if ((num - 5) >= 0) {
  //     result += 'V'
  //     num -= 5
  //   } else if ((num - 4) >= 0) {
  //     result += 'IV'
  //     num -= 4
  //   } else {
  //     result += 'I'
  //     num--
  //   }

  // }

  let romanNum = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ]

  while (num > 0) {
    for (let i = 0; i < romanNum.length; i++) {
      while (num >= romanNum[i][0]) {
        result += romanNum[i][1]
        num -= romanNum[i][0];
      }
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
