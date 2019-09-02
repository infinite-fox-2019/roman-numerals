function to_roman (num) {
  var convertionTable = [
      ['I',1],
      ['IV',4],
      ['V',5],
      ['IX',9],
      ['X',10],
      ['XL',40],
      ['L',50],
      ['XC',90],
      ['C',100],
      ['CD',400],
      ['D',500],
      ['CM',900],
      ['M',1000],
  ]
  var output = ''
  var countUp = 0
  while(countUp<num){
      for(var i=convertionTable.length-1;i>=0;i--){
          if(convertionTable[i][1]<=num - countUp){
              output += convertionTable[i][0]
              countUp += convertionTable[i][1]
              break
          }
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
