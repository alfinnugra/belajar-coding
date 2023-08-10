/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
// function targetTerdekat(arr) {
//     let test = 0;
//     let indexo = -1;
//     let indexx = -1;

//     for(let i = 0; i < arr.length; i++) {
//         if(indexo !== -1 && indexx !== -1) {
//             break;
//         } 
//         if(arr[i] === 'o') {
//             indexo = i;
//         } else if(arr[i] === 'x') {
//             indexx = i;
//         }
        
//     }
//     if(indexo === -1 || indexx === -1) {
//         return 0;
//     }
//     if(indexo - indexx > -1) {
//         return indexo - indexx;
//     } else {
//         return (indexo - indexx) * -1;
//     }
// }

    
  
//   // TEST CASES
//   console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
//   console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
//   console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
//   console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
//   console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

//   /*
// Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang berisi angka-angka. Function akan me-return array multidimensi dimana array tersebut berisikan 3 kategori/kelompok:

// kelompok pertama (baris pertama) merupakan angka-angka genap
// kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
// kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
// Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]
// */
// function mengelompokkanAngka(arr) {
//     let hasil = [[],[],[]]

//     for(let i = 0; i < arr.length; i++) {
//         let number = arr[i];  

//         if(number % 3 === 0) {
//             hasil[2].push(number);
//         } else if(number % 2 === 0) {
//             hasil[0].push(number)
//         } else {
//             hasil[1].push(number)
//         }
//     }
//     return hasil;
//   }
  
//   // TEST CASES
//   console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
//   console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
//   console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
//   console.log(mengelompokkanAngka([])); // [ [], [], [] ]


//   soal 3
/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  let hasil = []; // ini adalah variable sebagai tempat hasil nantinya
  let penampung = []; // ini adalah variable sebagai tempat penampung nantinya
  let animalSort = animals.sort(); // di code ini untuk men sorting animal sort nya
  for(let i = 0; i < animalSort.length; i++) { // ini adalah looping jadi i = 0; i lebih kecil dari animalSort.length maka akan di tambahkan sampai sama nilai nya dengan animalSort
    if(penampung.length == 0) { // jika penampung.length = 0
        penampung.push(animalSort[i]) // maka kita push animalSort di bagian variable i nya
        continue; // continue agar dia tidak duplicate nantinya
    }
    if(animalSort[i][0] === penampung[0][0]) { // jika animalSort nilai di dalam [i] lalu mengambil index 0 [0] maka di cek sama tidak dengan penampumg[index 0] lalu mengakses lagi index[0] di dalam index [0]
        penampung.push(animalSort[i]) // penampung.push adalah push atau memasukan animalSort isi variable i kedalam penampung
    } else { // jika bukan tipe data dari atas contoh tipe datanya adalah a [ayam] dam a [anoa]
        hasil.push(penampung) // maka kita push kemabali penampung nya kedalam hasil
        penampung = [animalSort[i]] // lalu di sini kita memasukan animalsort isi variable [i] kedalam penampung
    }
  }
  hasil.push(penampung) // di sini kita push kembali penampung kedalam hasil
  return hasil; // lalu tinggal kita return hasil nya
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]