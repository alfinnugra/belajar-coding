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
  for(let i = 0; i < animalSort.length; i++) {
    if(penampung.length == 0) {
        penampung.push(animalSort[i])
        continue;
    }
    if(animalSort[i][0] === penampung[0][0]) {
        penampung.push(animalSort[i])
    } else {
        hasil.push(penampung)
        penampung = [animalSort[i]]
    }
  }
  hasil.push(penampung)
  return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]