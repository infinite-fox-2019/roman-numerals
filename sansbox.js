function to_roman(integer){
    let romans = {
        '01M':1000,
        '02CM':900,
        '03D':500,
        '04CD':400,
        '05C':100,
        '06XC':90,
        '07L':50,
        '08XL':40,
        '09X':10,
        '10IX':9,
        '11V':5,
        '12IV':4,
        '13I':1
    }
    let output = ''
    while(integer > 0){
        for(let key in romans){
            if(integer >= romans[key]){
                integer -= romans[key]
                output += key.slice(2)
            }
        }
    }
    return output
}

console.log(to_roman(4))
console.log(to_roman(8))
console.log(to_roman(9))
console.log(to_roman(15))
console.log(to_roman(1453))
