let arrAndi = [3, 5, 7, 9, 15, 12, 10, 6, 8, 20]
let kelompokPertama = []
let kelompokKedua = []
let kelompokKetiga = []

for(let i = 0; i < arrAndi.length; i++) {
    if(arrAndi[i] % 3 === 0) {
        kelompokPertama.push(arrAndi[i])
    } else if(arrAndi[i] % 5 === 0) {
        kelompokKedua.push(arrAndi[i])
    } else {
        kelompokKetiga.push(arrAndi[i])
    }
}

console.log("Kelompok Pertama:", kelompokPertama)
console.log("Kelompok Kedua:", kelompokKedua)
console.log("Kelompok Ketiga:", kelompokKetiga)