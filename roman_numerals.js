function to_roman (num) {
  var hasil = ''
 var convert = {
   1 : 'I',
   4 : 'IV',
   5 : 'V',
   9 : 'IX',
   10 : 'X',
   40 : 'XL',
   50 : 'L',
   90 : 'LC',
   100 : 'C',
   400 : 'CD',
   500 : 'D',
   900 : 'CM',
   1000 : 'M'
 }
var angka = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
for (var i=0; i<angka.length;i++){
  while (num >= angka[i]){
    num = num - angka[i]
    hasil = hasil + convert[angka[i]]
  }
}
return hasil
}
/*
1 = I
2 = II
3 = III
4 = IV
5 = V
6 = VI
7 = VII
8 = VIII
9 = IX
10 = X
11 = XI
12 = XII
49 = XL
*/



// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
