function to_roman (num) {
  // your implementation code here
  // var arr = [1000, 500, 100, 50, 10, 5, 1]
  var obj = {
      'M' : 1000,
      'D' : 500,
      'C' : 100,
      'L' : 50,
      'X' : 10,
      'V' : 5,
      'I' : 1
  }
  var hasil = ""
  if (num > 3000){
      return "input maksimal 3000"
  }
  for(var i = 0 ; i < Object.keys(obj).length ; i++){
      if(Math.floor(num / obj[Object.keys(obj)[i]]) != 0){
          if(Math.floor(num / obj[Object.keys(obj)[i]]) == 4){
              hasil += Object.keys(obj)[i]
              hasil += Object.keys(obj)[i-1]
              num = num % obj[Object.keys(obj)[i]]
          }
          else if(Math.floor(num / obj[Object.keys(obj)[i+1]]) == 9){
              hasil += Object.keys(obj)[i+1]
              hasil += Object.keys(obj)[i-1]
              num = num % obj[Object.keys(obj)[i+1]]
          }
          else{
              for(var j = 0 ; j < Math.floor(num / obj[Object.keys(obj)[i]]) ; j++){
                  hasil += Object.keys(obj)[i]
              }
              num = num % obj[Object.keys(obj)[i]]
          }
      }
  }
  return hasil
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
