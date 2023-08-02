// Problem
// Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka. 
// Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya. 
// Jika kedua angka bernilai sama, function akan me-return -1.

function bandingkanAngka(angka1, angka2) {
    if(angka1 == angka2) {
        return -1;
    } else if (angka2 > angka1) {
        return true;
    } else if (angka2 < angka1) {
        return false
    }
}
    
    // TEST CASES
    console.log(bandingkanAngka(5, 8)); // true
    console.log(bandingkanAngka(5, 3)); // false
    console.log(bandingkanAngka(4, 4)); // -1
    console.log(bandingkanAngka(3, 3)); // -1
    console.log(bandingkanAngka(17, 2)); // false
  
  
  // ------------------------------------
  console.log('')
  // ------------------------------------

  
// Problem
// Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string. 
// Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".

function balikkata(kata) {
    let balikkata = "";
    for(let i = kata.length -1;i >= 0; i--) {
        balikkata += kata[i];
    }
    return balikkata;
}
  
  // TEST CASES
  console.log(balikkata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikkata('John Doe')); // eoD nhoJ
  console.log(balikkata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikkata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikkata('Super')); // repuS

// ------------------------------------
console.log('')
// ------------------------------------

// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(value) {
    let result =  value / 60;
    let hours = Math.floor(result)
    let menit = value - (hours * 60)
 

    if(menit < 10){
        return `${hours}:0${menit}`;
    } else {
        return `${hours}:${menit}`;
    }
}


  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00
  console.log(konversiMenit(70)) // 1:10

// ------------------------------------
console.log('')
// ------------------------------------

//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    let tempatx = 0;
    let tempato = 0;
    for(let i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            tempatx++;
        } else if(str[i] === 'o'){
            tempato++;
        }
      }
      
    return tempatx === tempato;
}
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true