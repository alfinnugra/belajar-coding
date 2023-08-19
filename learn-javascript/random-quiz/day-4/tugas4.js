function ganjilGenap(plat) {
    // your code here
    if(typeof plat !== 'string') {
        return "invalid data"
    }

    if(plat === '') {
        return "plat tidak di temukan"
    }

    let platNumbers = plat.split(';')
    let tempGenap = 0
    let tempGanjil = 0

    for(let i = 0; i < platNumbers.length; i++) {
        let platNumber = platNumbers[i]
        let lastDigit = parseInt(platNumber.charAt(platNumber.length -1)) 

        if(!isNaN(lastDigit)) {
            if(lastDigit % 2 === 0) {
                tempGenap++
            } else {
                tempGanjil++
            }
        }
    }

    let result = ''
    if(tempGenap > 0) {
        result += `plat genap sebanyak ${tempGenap} dan`
    } else {
        result += `plat genap tidak di temukan`
    }

    if(tempGanjil > 0) {
        result += ` plat ganjil sebanyak ${tempGanjil}`
    } else {
        result += ` plat ganjil tidak di temukan`
    }

    return result
  }
  
  console.log(ganjilGenap('2341;3429;864;1309;1276')) //plat genap sebanyak 2 dan plat ganjil sebanyak 3
  console.log(ganjilGenap('2347;3429;1305')) //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
  console.log(ganjilGenap('864;1308;1276;1432')) //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
  console.log(ganjilGenap('')) //plat tidak ditemukan
  console.log(ganjilGenap()) //invalid data