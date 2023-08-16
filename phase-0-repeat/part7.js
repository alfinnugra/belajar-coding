// Problem
// Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka. 
// Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya. 
// Jika kedua angka bernilai sama, function akan me-return -1.

function bandingkanAngka(angka1, angka2) { // function yang namanya bandingkanAngka yang parameternya angka1, dan angka2
    //code disini
    if(angka1 < angka2) { // jika isi angka1 kurang dari isi angka2
        return true; // maka hasilnya true 
    } else if(angka1 === angka2) { // tapi jika isi angka1 sama dengan nilainya isi angka2 
        return -1; // maka hasilnya -1
    } else { // jika tidak ada kondisi selain di atas
        return false; // maka hasilnya false
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

function balikKata(kata) {
    // you can only write your code here!
    let hasil = '' // variable hasil yang isinya string kosong
    for(let i = kata.length -1; i > 0; i--) { // variable i yang isinya kata.length atau huruf dalam variable kata di baca dari kiri; variable i lebih besar dari 0; i akan di kurang
        hasil += kata[i] // maka kata dari varibale i atau kata[i] akan di masukan ke variable hasil
    }
    return hasil; // return variable hasil
}
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS

// ------------------------------------
console.log('')
// ------------------------------------

// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) { // function yang nama nya konversiMenit yang memanggil variable menit
    // you can only write your code here!
    let hasil = menit / 60 // variable hasil yang isinya menit di bagi 60
    let jam = Math.floor(hasil) // variable jam yang isinya Math.floor variable hasil
    let time = menit - (jam * 60) // variable time yang isinya variable menit - varible jam di kali 60 | ingat di matematika perkalian di dahulukan |

    if(time < 10) { // jika isi variable time kurang dari 10
        return `${jam}:0${time}` // maka kita return variable jam dan time kita tambahkan 0 sebelum time
    } else { // jika bukan
        return `${jam}:${time}` // maka kita akan return variable jam dan time
    }
}
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00

// ------------------------------------
console.log('')
// ------------------------------------