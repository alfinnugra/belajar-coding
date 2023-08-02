// apa fungi dari array? 
// array berfungsi untuk menyimpan data data dalam suatu array
// array bisa menampung tipe data, number/integer, string, false, null, indefined dan sebuah object

// contoh 
let contoharray = [1,2,3,4,5,6] // ini adalah tipe data integer
// dan array juga dapat menampung banyak tipe data contohnya
// tetepi tidak banyak di gunakan
let contoharray1 = [1, "abc", false, null, {name: "alfin"}]; 
//index 0 = integer
//index 1 = string
//index 2 = false
// index 3 = null
// index 4 = object

// array juga memiliki 2 dimensi
// contohnya
let dimensi1 = [1,2,3,4,5,6] // contoh array 1 dimensi
let dimensi2 = [[1,2,3],[4,5,6]] // contoh array 2 dimensi

// bagaimana sih cara kita menampilkan hasil code di atas?
// kita bisa menggunakan console.log lalu menggunakan index
console.log(dimensi1[0]) // ini akan menampilkan 1 karna index berawal dari 0
console.log(dimensi2[0]) // ini akan menampilkan array pertama karna array 2 dimensi masih menjadi pembungkus tidak dapat mengakses secara langsung
// trus gimana cara kita menampilkan isinya? tinggal tambahin index nya aja mau yang mana
console.log(dimensi2[0][1]) // maka akan menampilkan 2

// apakah array bisa di gunakan looping? ya bisa lah
// trus buatnya gimana? caranya gini

for(let i = 0; i < dimensi2.length; i++) {
    for(let j = 0; j < dimensi2[i].length; j++){
        console.log(dimensi2[i][j])
    }
}

// apa code maksud diatas? 
// jadi pertama membuat var i dengan data di dalam nya 0
// lalu jika data var di var i kurang dari var dimensi2.length maka i++ akan di tambahkan sampai hasilnya sama
// lalu var j ngapain? sama aja cuma var j mengakses kedalam dimensi 2 nya
// lalu kok console.log nya [i] sama [j] gitu si? ya karna kita memiliki 2 variable yang harus di tampilkan
// trus output nya apa? 1 sampai 6 dan dimensi 2 array index 1

// normal nya array 2 dimensi di gunakan untuk membuat table contoh nya

let datasiswa = [
    ["Alfin", "Indonesia", "14 Tahun"],
    ["Rizki", "Indonesia", "15 Tahun"],
]

// itu contoh table untuk menampilkan hasil output nya bisa menggunakan looping kembali
console.log("Data siswa")
for(let i = 0; i < datasiswa.length; i++) {
    for(let j = 0; j < datasiswa[i].length; j++) {
    //    di sini kita condisi kembali
        if(j === 0) {
            console.log(`Nama: ${datasiswa[i][j]}`) // untuk mengakses di dalam i menggunakan var j
        } else if(j === 1) { // index 1 berati alamat
            console.log(`Alamat: ${datasiswa[i][j]}`)
        } else { // jika tidak index 0 atau 1 berati else mencari condisi yang tidak di tentukan berati 2
            console.log(`Umur: ${datasiswa[i][j]}`)
        }
    }
    console.log(" ")
}


