function to_roman(num) {
    // your implementation code here
    if (num > 3000) {
        return 'Sorry this app cant do that'
    } else {

        let roma = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
        let arab = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
        let pecah = [1000,100,10,1];
        let numArray = [];
        for (let i = 0;i<pecah.length;i++) {
          if (num>=pecah[i]) {
            let rek = Math.floor(num/pecah[i]);
            numArray.push(rek*pecah[i])
            num -= (rek*pecah[i])
          }
        }//end loop i
      
        let strNum = [];
        for (let i = 0;i<numArray.length;i++) {
          let rekString = ''
          while (numArray[i]>0) {
            for (let j = 0;j<arab.length;j++) {
              if (numArray[i] >= arab[j]) {
                rekString+=roma[j];
                let rek = numArray[i];
                rek = rek - arab[j];
                numArray[i] = rek;
              }
            }//end loop j
          }//endwhile
          strNum.push(rekString)
        }//end loop i     
      
      
       return strNum.join('')
    } //end else

} //end function

// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))