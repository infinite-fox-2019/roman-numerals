function to_roman (integer) {
  // your implementation code here
  function eachIntegerToRoman(eachInteger){
    if(eachInteger === 1)return 'I'
    else if(eachInteger === 4)return 'IV'
    else if(eachInteger === 5)return 'V' 
    else if(eachInteger === 9)return 'IX'
    else if(eachInteger === 10)return 'X'
    else if(eachInteger === 40)return 'XL'
    else if(eachInteger === 50)return 'L'
    else if(eachInteger === 90)return 'XC'
    else if(eachInteger === 100)return 'C'
    else if(eachInteger === 400)return 'CD'
    else if(eachInteger === 500)return 'D'
    else if(eachInteger === 900)return 'CM'
    else if(eachInteger === 1000)return 'M'
}


var integerContainer = []
while(integer > 0){
    if(integer >= 1000){
        integer -= 1000;
        integerContainer.push(1000)
    }else if(integer >= 900){
        integer -= 900;
        integerContainer.push(900)
    }else if(integer >= 500){
        integer -= 500;
        integerContainer.push(500)
    }else if(integer >= 400){
        integer -= 400;
        integerContainer.push(400)
    }else if(integer >= 100){
        integer -= 100;
        integerContainer.push(100)
    }else if(integer >= 90){
        integer -= 90;
        integerContainer.push(90)
    }else if(integer >= 50){
        integer -= 50;
        integerContainer.push(50)
    }else if(integer >= 40){
        integer -= 40;
        integerContainer.push(40)
    }else if(integer >= 10){
        integer -= 10;
        integerContainer.push(10)
    }else if(integer >= 9){
        integer -= 9;
        integerContainer.push(9)
    }else if(integer >= 5){
        integer -= 5;
        integerContainer.push(5)
    }else if(integer >= 4){
        integer -= 4;
        integerContainer.push(4)
    }else if(integer >= 1){
        integer -= 1;
        integerContainer.push(1)
    }
}

  var output = ''
  for(var i = 0; i < integerContainer.length; i++){
      output += eachIntegerToRoman(integerContainer[i])
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
