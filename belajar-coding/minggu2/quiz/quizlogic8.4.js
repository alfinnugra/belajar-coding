// // soal 1
// function palindrome(kata) {
//         let balikkata = "";
//         for(let i = kata.length -1; i >= 0; i--) {
//             balikkata += kata[i];
//         }
//         if(kata == balikkata){
//             return true;
//         } else {
//             return false;
//         }
//     }
    
  
//   // TEST CASES
//   console.log(palindrome('katak')); // Output: true
//   console.log(palindrome('blanket')); // Output: false
//   console.log(palindrome('civic')); // Output: true
//   console.log(palindrome('kasur rusak')); // Output: true
//   console.log(palindrome('mister')); // Output: false

//   console.log(" ")
// //   soal 2
// // function angkaPalindrome(num) {
// //     function membuatPalindrome(number) {
// //         let numberstring = number.toString();
// //         let membalikan = numberstring.split('').reverse().join('')
// //         return numberstring === membalikan;
// //     }

// //     function mengambilpalindrome(number) {
// //         while(true) {
// //             number++;
// //             if(membuatPalindrome(number)) {
// //                 return number;
// //             }
// //         }
// //     }
// //     return mengambilpalindrome(num);
// // }



  
//   // TEST CASES
//   console.log(angkaPalindrome(8)); // 9
//   console.log(angkaPalindrome(10)); // 11
//   console.log(angkaPalindrome(117)); // 121
//   console.log(angkaPalindrome(175)); // 181
//   console.log(angkaPalindrome(1000)); // 1001

//   console.log(" ")

// Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

// note kenapa angka 8 adalah palindrome? karena angka 8 dibalik tetep 8 wkwkw
// note kenapa angka 343 adalah palindrome? karena angka 343 dibalik tetep 343 eaaaa
// */

// function angkaPalindrome(num) {
//     let i = num + 1
//     while(true) {
//         let numStr = i.toString();
//         let angkabalik = ""
//         for(let j = numStr.length -1; j >= 0; j--){
//             angkabalik += numStr[j]
//         }
//         if(angkabalik == i) {
//             return angkabalik;
//         }
//         i++
//     }
//   }
  
//   // TEST CASES
//   console.log(angkaPalindrome(8)); // 9
//   console.log(angkaPalindrome(10)); // 11
//   console.log(angkaPalindrome(117)); // 121
//   console.log(angkaPalindrome(175)); // 181
//   console.log(angkaPalindrome(1000)); // 1001

function hitungJumlahKata(kalimat) {
  let hitungkalimat = " ";
  let jumlahKata = 1;
  for(let i = 0; i < kalimat.length; i++) {
    if(kalimat[i] == ' ') {
        jumlahKata++
    }
  }
  return jumlahKata;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5

// soal 4
function pasanganTerbesar(num) {
    let numStr = num.toString();
    let Cek = Number(numStr[0] + numStr[1])
    for(let i = 1; i < numStr.length -1; i++) {
        let total  = Number(numStr[i] + numStr[i + 1])
        if(total > Cek) {
            Cek = total;
        }
    }
    return Cek;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99  

  
  
  