/*

Diberikan sebuah function angka terbesar yang menerima satu parameter berupa array. 
fungsi ini akan mengembalikan atau me return nilai berupa angka terbesar dari array. 
Jika array kosong maka akan mengembalikan nilai -1

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter
- Dilarang Menggunakan Loop
*/

function angkaTerbesar(sentence) {
    //code here
    if(sentence.length == 0) {
        return -1;
    }

    let max = angkaTerbesar(sentence.slice(1))
    if(sentence[0] > max) {
        max = sentence[0]
    }

    return max
  }
  
  // TEST CASES
  console.log(angkaTerbesar([2, 3, 7, 6, 5])) // 7
  console.log(angkaTerbesar([9, 3, 7, 4, 1])) // 9
  console.log(angkaTerbesar([2, 1, 7, 2, 8])) // 8
  console.log(angkaTerbesar([])) // -1