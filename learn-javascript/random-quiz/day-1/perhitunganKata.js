var kalimat = 'Hari ini adalah hari yang cerah';
let start = 0;
let end = kalimat.indexOf(' ')

while(end !== -1) {
    let kata = kalimat.substring(start, end)
    console.log(kata + '(panjang: ' + kata.length + ')')
    start = end + 1
    end = kalimat.indexOf(' ',start)
}

var kataTerakhir = kalimat.substring(start);
console.log(kataTerakhir + ' (panjang: ' + kataTerakhir.length + ')');
// Pemecahan kata menggunakan substring dan perhitungan panjang kata
// Output:
// Hari (panjang: 4)
// ini (panjang: 3)
// adalah (panjang: 6)
// hari (panjang: 4)
// yang (panjang: 4)
// cerah (panjang: 5)