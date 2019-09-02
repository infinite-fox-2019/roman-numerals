function to_roman (num) {
  var strNum = num.toString();
  var arrRoman = ['M','DM','D','CD','C','LC','L','XL','X','XV','V','IV','I'];
  var arrRomanValue = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  var hasilRoman = '';
  for(i = 0; i <strNum.length; i++){
    var pengali = parseInt(strNum[i]) * (Math.pow(10, (strNum.length - (1 + i))));

    if(pengali == 0 && i == strNum.length - 1){
      break;
    }
    else{
      for(var j = 0; j<arrRoman.length; j++){
        if(pengali - arrRomanValue[j] >= 0){
          if(pengali - arrRomanValue[j] == 0){
            hasilRoman += arrRoman[j];
            break;
          }
          else{
            hasilRoman += arrRoman[j];
            pengali -= arrRomanValue[j];
            
            if(pengali % arrRomanValue[j] == 0){
              if(pengali !== 0){
                for(var k = pengali; k > 0; k -= arrRomanValue[j]){
                  hasilRoman += arrRoman[j];
                } 
              }
            }
          }
        }
      }
    }
  }
  return hasilRoman;
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

// console.log(to_roman(600));
