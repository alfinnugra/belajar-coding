//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

//code here
console.log(`${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh} `);

// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word = 'wow JavaScript is so cool';
let exampleFirstWord = word[0] + word[1] + word[2];
let substring = word.substring(0, 3);
let kedua = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];
let substring1 = word.substring(4, 14);
let ketiga = word[15] +  word[16];
let substring2 = word.substring(15, 17);
let word1 = word[18] + word[19];
let substring3 = word.substring(18, 20);
let word2 = word[21] + word[22] + word[23] + word[25]
let substring4 = word.substring(21, 25);


console.log('First Word: ' + exampleFirstWord);
console.log("substring:" + substring);
console.log("kata kedua:" + kedua);
console.log("substring1:" + substring1);
console.log("kata ketiga:" + ketiga);
console.log("substring2:" + substring2);
console.log("kata keempat:" + word1);
console.log("substring3:" + substring3);
console.log("kata kelima:" + word2);
console.log("substring4:" + substring);


/*
saya di kasih contoh dari pa harcon langsung paham ini kayak gimana
ini kita itung setiap kata di mulai dari nol
cara memanggilnya word[urutan angka]
kenapa ada angka yang di lewat seperti 0 , 1 ,2,4 ,5 dll
mana tiganya karena tiganya itu spasi mas bro dan seterusnya


w itu 0 ,  o itu 1 , dan w itu 2
-------
untuk soal 3 sama tapi cuma di ganti memakai substring
contoh javascript
cuma bedanya substring itu misalnya 0,4 dia akan ter print sebagai java bukan jav seperti di soal kedua
*/

// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


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

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + exampleKeduaWord + ', with length: ' + keduawordLength);
console.log('Three Word: ' + exampleKetigaWord + ', with length: ' + ketigawordLength);
console.log('Four Word: ' + exampleKeempatWord + ', with length: ' + keempatwordLength);
console.log('Five Word: ' + exampleKelimaWord + ', with length: ' + kelimawordLength);
/*tulis code sesuai dengan keterangan soalnya dan pola example yang ada

Selamat Mengerjakan */