/*
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/
function sorting(arrNumber) { // function yang namanya sorting yang memanggil variable arrNumber / parimeter
    // code di sini 
    for(let i = 0; i < arrNumber.length; i++) { // variable i yang isinya 0; varibale i kurang dari arrNumber.length; maka variable i akan di tambahkan sampai sama nilainya dengan arrnumber
        for(let j = 0; j < arrNumber[i].length; j++) { // variable j yang isinya 0; variable j kurang dari arrnumber[i].length; maka j akan di tambahkan
            if(arrNumber[i] > arrNumber[j]) { // jika arrNumber[i] lebih besar dari arrNumber[j]
                let tempat = arrNumber[j] // varibale tempat yang isinya arrNumber[j]
                arrNumber[j] = tempat // arrNumber[j] yamg isnya variable tempat 
            }
        }
    }
    return arrNumber // return arrNumber
  }
  
  function getTotal(arrNumber) { // function yang namanya getTotal yang parimeter nya arrNumber
    // code di sini
    if(arrNumber.length == 0) { // jika arrNumber.length sama dengan 0
        return ""; // return string kosong
    }

    let max = 0 // variable max yang isinya 0
    let hasil = 0 // variable hasil yang isinya 0 
    for(let i = 0; i < arrNumber.length; i++) { // variable i  yang isinya 0; variable i kurang dari arrNumber.length; maka i akan di tambahkan
        if(arrNumber[i] > max) { // jika arrNumber[i] lebih besar dari variable max
            max = arrNumber[i]; // maka arrNumber[i] akan di masukan ke variable max
        }
    }
    for(let j = 0; j < arrNumber.length; j++) { // variable j yang isinya 0; variable j kurang dari arrNumber.length; maka j akan di tambahkan
        if(arrNumber[j] == max) { // jika arrNumber[j] sama dengan max
            hasil++ // maka hasil nya akan di tambahkan
        }
    }
    return `angka paling besar adalah ${max} dan jumlah kemunculan sebanyak ${hasil} kali`
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''


  /*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals (str) {
    //code di sini
    let result = ""; //variable result yang isinya string kosong
    for(let i = 0; i < str.length; i++) { // variable i yang isinya 0; variable i kurang dari str.length; maka i akan di tambahkan
        if(str[i] == 'a') { // jika str[i] sama dengan isinya a
            result += str[i] = 'b'; // maka result akan di tambahkan dengan str[i] yang isinya b
        } else if(str[i] == 'i') { // tapi jika str[i] sama dengan isinya i
            result += str[i] = 'j' // maka result akan di tambahkan dengan str[i] yang isinya j
        } else if(str[i] == 'u') { // dan seterusnya
            result += str[i] = 'v'
        } else if(str[i] == 'e') {
            result += str[i] = 'f'
        } else if(str[i] == 'o') {
            result += str[i] = 'p'
        } else if(str[i] == 'A') {
            result += str[i] = 'B'
        } else if(str[i] == 'I') {
            result += str[i] = 'J'
        } else if(str[i] == 'U') {
            result += str[i] = 'V'
        } else if(str[i] == 'E') {
            result += str[i] = 'F'
        } else if(str[i] == 'O') {
            result += str[i] = 'P'
        } else { // jika tidak ada dari atas
            result += str[i] // maka result kan di tambahkan dengan str[i]
        }
    }
    return result; // return result
  }
  
  function reverseWord (str) { // function yang namanya reverseWord yang parimeter nya str
    //code di sini
    let result = "";  // variable result yang isinya string kosong
    for(let i = str.length -1; i >= 0; i--) { // variable i yang isinya str.length di baca dari kiri atau di balik katanya; i lebih besar sama dengan 0; maka i akan di kurang 
        result += str[i] // result akan di tambahkan dengan str[i]
    }
    return result; // return result
  }
  
  function setLowerUpperCase (str) { // function yang namanya setLowerUpperCase yang parimeter nya str
    //code di sini
    let result = ""; // variable result yang isinya string kosong
    for(let i = 0; i < str.length; i++) { // variable i yang isinya 0; variable i lebih kurang dari str.length; maka i akan ditambahkan
        if(str[i] == str[i].toLowerCase()) { // jika str[i] sama dengan nilanya str[i] huruf kecil
            result += str[i].toUpperCase() // maka result akan di tambahkan dengan str[i] huruf besar
        } else if(str[i] == str[i].toUpperCase()) { // tapi jika str[i] sama dengan str[i] huruf besar
            result += str[i].toLowerCase() // maka result akan di tambahkan dengan str[i] huruf kecil
        } else { // jika tidak ada kondisi di atas
            result += str[i] // maka result akan di tambahkan dengan str[i]
        }
    }
    return result; // return result
  }
  
  function removeSpaces (str) { // function yang namanya removeSpaces yang parimeter nya str
    //code di sini
    let result = ""; // variable result yang isinya string kosong
    for(let i = 0; i < str.length; i++) { // variable i yang isinya 0; variable i kurang dari str.length; i akan di tambahkan
        if(str[i] !== ' ') { // jika str[i] tidak sama dengan nilanya string kosong atau spasi
            result += str[i] // maka result akan di tambahan dengan str[i]
        }
    }
    return result //return result
  }
  
  function passwordGenerator (name) { // function yang namanya passwordGenerator yang parimeternya name
    //code di sini
    if(name.length < 5) { // jika name.length kurang dari 5
        return "Minimal karakter yang diinputkan adalah 5 karakter" // maka kita return Minimal karakter yang diinputkan adalah 5 karakter
    }
    let changeVocal = changeVocals(name) // variable changeVocal yang isinya function changeVocals yang parimeter nya name
    let reverseWords = reverseWord(changeVocal) // variable reverseWords yang isinya function reverseWord yang memanggil variable changeVocal
    let setUpperCase = setLowerUpperCase(reverseWords) // variable setUpperCase yang isinya function setLowerUpperCase yang memanggil variable reverseWords
    let removespace = removeSpaces(setUpperCase) // variable removespace yang isinya function removeSpaces yang memanggil variable setUpperCase
    let result = removespace // variable result yang isinya varibale removespace
    return result; // return result
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

  /*
Seorang customer sedang makan di sebuah restaurant AYCE(All You Can Eat). Dia akan terus makan sampai waktu yang diberikan oleh restaurant tersebut habis. Setiap customer memesan/mengambil makanan dan memakan pesanannya maka waktu customer berkurang 15 menit. Begitu seterusnya sampai waktunya habis .Customer masih bisa memesan/mengambil makanan selama waktunya belum 0.

Diberikan sebuah function makanTerusRekursif(waktu) yang menerima satu parameter berupa waktu. Function akan memproses jika waktu masih ada. Function akan mengembalikan/me-return berapa kali seorang customer memesan/mengambil makanan dalam waktu yang diberikan. Wajib menggunakan rekursif.

Contoh:

45 => 3

100 => 7

10 => 1
*/

function makanTerusRekursif(waktu) {
    // you can only write your code here!
    if(waktu == 0) { // jika waktu sama dengan nilainya 0
        return 0; // maka return 0
    }

    let jumlahMakan = 1; // variable jumlahMakan yang isinya 1
    if(waktu < 0) { // jika waktu kurang dari 0
        return 0 // maka return 0
    } else { // jika tida
        return jumlahMakan + makanTerusRekursif(waktu - 15)  // return variable jumlahMakan ditambhah makanTerusRekursif yang isinya waktu di kurang 15
    }
    return jumlahMakan // return jumlahMakan
  }
  
  // TEST CASES
  console.log(makanTerusRekursif(66)); // 5
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0)); // 0

  /*
Diberikan sebuah function totalDigitRekursif(angka) yang menerima satu parameter berupa angka. Function akan me-return nilai total dari digit tersebut dengan menambahkan satu per satu angka dari digit paling depan ke paling belakang. Wajib menggunakan rekursif untuk berlatih rekursif! Disarankan untuk tidak menggunakan looping for untuk soal ini.

Contoh:

512, berarti outputnya adalah 8, karena 5 + 1 + 2 = 8. 1542, berarti outputnya adalah 12, karena 1 + 5 + 4 + 2 = 12.
*/

function totalDigitRekursif(angka) {
    // you can only write your code here!
    if(angka < 10) { // jika angka kurang dari 10
        return angka // maka return angka
    }

    return angka % 10 + totalDigitRekursif(Math.floor(angka /10)) // return angka di modulus 10 di tambahkan totalDigitalRekursif yang isnya di Math.floor yang isinya angka di bagi 10
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5

  /*
Diberikan sebuah function kaliTerusRekursif(angka) yang menerima satu parameter berupa angka. Function akan memproses angka yang lebih dari satu digit menjadi satu digit dengan melakukan perkalian. Bila masih lebih dari satu digit, terus lakukan perkalian setiap digit-nya untuk pada akhirnya mendapatkan satu digit. Wajib menggunakan rekursif untuk berlatih rekursif, namun kamu boleh menggunakan looping juga disini.

Contoh:

3 => 3, karena sudah satu digit 24 => 8. Karena 24 dua digit, maka kita lakukan 2 * 4 = 8. 8 satu digit, maka hasilnya adalah 8. 654 => 0. Karena 654 tiga digit, maka lakukan 6 * 5 * 4 = 120. 120 tiga digit, maka lakukan 1 * 2 * 0 = 0. 0 satu digit, maka hasilnya adalah 0.
*/
console.log(" ")

function kaliTerusRekursif(angka) {
    // you can only write your code here!
    if(angka < 10) { // jika angka kurang dari 10
        return angka // maka kita return angka
    }

    let angkaString = angka.toString() // variable angkaString yang isinya mengubah angka menjadi string
    let result = 1; // variable result yang isinya 1
    for(let i = 0; i < angkaString.length; i++) { // variable i yang isinya 0; i kurang dari angkaString.length; i akan di tambahkan
        result *= parseInt(angkaString[i]) // result di kali sama dengan mengubah string menjadi number yang isinya angkaString[i]
    }
    return kaliTerusRekursif(result) //return function kaliTerusRekursif yang isinya result
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6
