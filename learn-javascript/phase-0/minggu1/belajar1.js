// belajar algoritma

/*
algoritma adalah suatu proses atau alur suatu program 
contoh nya adalah kita mempunyai baju yang akan di cuci kedalam mesin cuci
namun mesin cuci hanya dapat menampung 3 baju sekali cuci
apa yang terjadi jika kita melebihi kapasitas mesin cuci tersebut? dan bagaimana mengatasinya?
jika kita memasukan lebih dari 3 baju maka mesin cuci dapat memberikan peringatan kepada kita,
dan kita dapat memasukan 3 baju untuk di cuci lalu baju yang kotor kita kurangi dengan baju yang di cuci tadi
dan lakukan hal tersebut sampai baju kotor habis.
*/

// psoucode/variable
// apa saja var yang dapat kita gunakan?
const a =  "isinya";
let b =  'isinya';
var c =  'isinya';

// variable bisa menampung nama (string), number/angka(integer), bolean, array, object
let name = 'alfin'; //string (dapat di gunakan dengan '' atau "")
let number = 123; //integer
let NameNumber = true; //bolean

// operator aritmatika
let angka1 = 10;
let angka2 = 20;
console.log(angka1 + angka2); 

//bagaimana operator aritmatika bekerja dan syntaxnya
// tambah/plus
let hasil = angka1 + angka2;
console.log(hasil);
// pengurangan/mines
hasil = angka1 - angka2;
console.log(hasil);
// perkalian
hasil = angka1 * angka2;
console.log(hasil);
//pembagian
hasil = angka1 / angka2;
console.log(hasil);
// modules
hasil = angka1 % angka2;
console.log(hasil);

//string dapat di tambahkan namun tidak dapat di kurangkan
let fristname = 'alfin';
let lastname = 'nugraha';
let fullname = fristname + ' ' + lastname;
console.log(fullname);
// jika output tidak terdapat bisa di tambahkan + '' +

// membaca code dari kanan ke kiri dan dari atas ke bawah