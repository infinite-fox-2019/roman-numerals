function to_roman (num) {
    //error handling
    if (num<1 || num>3000) return 'Invalid input'
    //kamus angka romawi
    var rom = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1   
    }
    var output = ''
    for (var key in rom) {
        while (num >= rom[key]) {
            output += key
            num -= rom[key]
        }
    }
    return output
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
