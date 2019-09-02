// Old
function extendedNum(num){
  let stringNum = String(num);
  let output = [];

  let counter = 0;
  for(let i = stringNum.length-1; i >= 0; i--){
    output.push(Number(stringNum[counter])*(10**i))
    counter++;
  }
  return output;
}

function to_romanOld(num) {
  var data = extendedNum(num);
  var output = '';
  for(var i = 0; i < data.length; i++){
    if(data[i]%1000 == 0){
      for(var j = 0; j < data[i]/1000; j++){
        output += 'M'
      }
    }
    else if(data[i] == 900){
      output += 'CM'
    }
    else if(data[i] - 500 != 0 && data[i] > 500){
      output += 'D';
      for(var j = 0; j < (data[i]-500)/100; j++){
        output += 'C'
      }
    }
    else if(data[i] == 500){
      output += 'D'
    }
    else if(data[i] == 400){
      output += 'CD'
    }
    else if(data[i]%100 == 0){
      for(var j = 0; j < data[i]/100; j++){
        output += 'C'
      }
    }
    else if(data[i] == 90){
      output += 'XC'
    }
    else if(data[i] - 50 != 0 && data[i] > 50){
      output += 'L';
      for(var j = 0; j < (data[i]-50)/10; j++){
        output += 'X';
      }
    }
    else if(data[i] == 50){
      output += 'L'
    }
    else if(data[i] == 40){
      output += 'XL'
    }
    else if(data[i]%10 == 0){
      for(var j = 0; j < data[i]/10; j++){
        output += 'X'
      }
    }
    else if(data[i] == 9){
      output += 'IX'
    }
    else if(data[i] - 5 != 0 && data[i] > 5){
      output += 'V';
      for(var j = 0; j < (data[i]-5)/1; j++){
        output += 'I';
      }
    }
    else if(data[i] == 5){
      output += 'V'
    }
    else if(data[i] == 4){
      output += 'IV'
    }
    else{
      for(var j = 0; j < data[i]/1; j++){
        output += 'I'
      }
    }
  }
  return output;
}

// REVISI new
function to_roman(num){
  var output = '';

  while(num > 0){
    if(num >= 1000){
      output += 'M';
      num -= 1000;
    }
    else if(num >= 900){
      output += 'CM';
      num -= 900;
    }
    else if(num >= 500){
      output += 'D';
      num -= 500;
    }
    else if(num >= 400){
      output += 'CD';
      num -= 400;
    }
    else if(num >= 100){
      output += 'C';
      num -= 100;
    }
    else if(num >= 90){
      output += 'XC';
      num -= 90;
    }
    else if(num >= 50){
      output += 'L';
      num -= 50;
    }
    else if(num >= 40){
      output += 'XL';
      num -= 40;
    }
    else if(num >= 10){
      output += 'X';
      num -= 10;
    }
    else if(num >= 9){
      output += 'IX';
      num -= 9;
    }
    else if(num >= 5){
      output += 'V';
      num -= 5;
    }
    else if(num >= 4){
      output += 'IV';
      num -= 4;
    }
    else{
      output += 'I';
      num -= 1;
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
