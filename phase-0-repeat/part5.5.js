// //1. Let's Form a Sentence

// // Problem
// // Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
// //  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
// //  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
// //   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

// let word = 'JavaScript'; // varibale yang isinya JavaScript
// let second = 'is'; // varibale yang isinya is
// let third = 'awesome'; // variable yang isinya awesome
// let fourth = 'and'; // variable yang isinya and
// let fifth = 'I'; // variable yang isinya i 
// let sixth = 'love'; // variable yang isinya love
// let seventh = 'it!'; // variable yang isinya it

// //code here


// // ---------------------------------------
// console.log(`${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`); // kita ambil variable word second third fourth fifth sixth dan seventh
// // ---------------------------------------

// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

// let word = 'wow JavaScript is so cool';
// let exampleFirstWord = word[0] + word[1] + word[2];
// let substring = word.substring(0,3)
// let exampleSecondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13]
// let substringSecond = word.substring(4,14)
// let exampleThereWord = word[15] + word[16]
// let substringThere = word.substring(15, 17)
// let exampleKeempat = word[18] + word[19]
// let substringKeempat = word.substring(18, 20)
// let exampleKelima = word[22] + word[23] + word[24] + word[25]
// let substringKelima = word.substring(21,26)

// console.log('First Word: ' + exampleFirstWord);
// console.log("substring:" + substring);
// console.log("Second Word:" + exampleSecondWord);
// console.log("substringSecond:" + substringSecond);
// console.log("There Word:" + exampleThereWord);
// console.log("substringKeempat:" + substringThere);
// console.log("Keempat Word:" + exampleKeempat);
// console.log("substringKeempat:" + substringKeempat);
// console.log("Kelima Word:" + exampleKelima);
// console.log("substringKelimat:" + substringKelima);


// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let exampleKeduaWord = word4.substring(4, 14);
let exampleKetigaWord = word4.substring(15, 17);
let exampleKeempatWord = word4.substring(18, 20);
let exampleKelimaWord = word4.substring(21, 25);

let firstWordLength = exampleFirstWord4.length;
let keduawordLength = exampleKeduaWord.length;
let ketigawordLength = exampleKetigaWord.length;
let keempatwordLength = exampleKeempatWord.length;
let kelimawordLength = exampleKelimaWord.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + exampleKeduaWord + ', with length: ' + keduawordLength);
console.log('Three Word: ' + exampleKetigaWord + ', with length: ' + ketigawordLength);
console.log('Four Word: ' + exampleKeempatWord + ', with length: ' + keempatwordLength);
console.log('Five Word: ' + exampleKelimaWord + ', with length: ' + kelimawordLength);