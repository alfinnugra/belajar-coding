let angka = 24

while(true) {
    let angkaStr = angka.toString()
    let penampung = ''
    for(let i = angkaStr.length -1; i >= 0; i--) {
        penampung += angkaStr[i]    
    }
    if(angkaStr === penampung) {
        console.log(penampung)
        break;
    }
    angka++
}