console.log('Quiz 1')

let angka  = [3,5,12] 
let hasil = 0;
for(let i = 0; i < angka.length; i++) {
    console.log(angka[i])
    hasil += angka[i]
}

console.log(hasil)

console.log("Mencari Media:")

function MencariMean(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += arr[i]
    }

    let hasil = total / arr.length;
    return Math.round((hasil))
}

// test case
console.log(MencariMean([3,5,12]))

console.log("Mencari Nilai Tengah:")
function MencariNilaiTengah(arr) {
    return arr[(arr.length + 1) / 2]
}

console.log(MencariNilaiTengah([3,5,12]))

console.log("Mencari Median:")
function MencariMedian(arr) {
    for(let i = 0; i < arr.length; i++) {
        let kanan = arr.length / 2; // kita buat var kanan yang berisi arr.length atau panjang si arr nya lalu kita bagi 2
        let kiri = kanan - 1; // lalu buat var kiri yang berisi bahwa kita mengecek var kanan dari kiri
        median = (arr[kanan] + arr[kiri]) / 2 // di sini var median menbamhkan kan arr kanan dan kiri lalu di bagi 2 
        console.log(kanan, kiri)
    }
    return median;
}
function MencariMedian(arr) {
    let kanan = arr.length / 2;
    kiri = kanan -1;
    median = (arr[kanan] + arr[kiri]) / 2;
    console.log(median)
    return median;
}

console.log(MencariMedian([3,5,12,15]))