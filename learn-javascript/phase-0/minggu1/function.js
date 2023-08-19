// cara membuat function bisa menggunakan funtion namafunctionnya()
function HelloWord() {
    return 'helo word' //return di dalam function ini mempunyai nilai hello word
}
// cara menjalan code function bisa menggunakan namafunction();
// tapi dalam code ini kita tidak bisa menggunakan nya karna tidak ada console yang akan di tampilksan;
console.log(HelloWord());

// function mempunyai parameter
function test() {
    console.log('test')
}
test();

// return memberikan nilai kepada function
// jika tidak memiliki return maka akan menghasilkan undefined

function tambahangka(angka1, angka2) {
    return angka1 + angka2;
}

// function bisa di gunakan berkali kali contohnya
console.log(tambahangka(1,2));
console.log(tambahangka(15,1));
console.log(tambahangka(21,2));
console.log(tambahangka(2,6));
console.log(tambahangka(0));

// contoh membalikan kata
function balikkata(kata) {
    let balikkata = "";
    for(let i = kata.length -1; i >= 0; i--) {
        balikkata += kata[i];
    }
    return balikkata;
}
console.log(balikkata("gajah"))
console.log("");

function NambahinHurufKapital(kata) {
    let result = "";
    for(let i = 0; i < kata.length; i++) {
        if((i === 0 || kata[i - 1] === ' ')) {
            result += kata[i].toUpperCase();
        } else {
            result += kata[i]
        }
    }
    return result;
}

console.log(NambahinHurufKapital('alfin nugraha'))


// ------------------------------------
console.log('')
// ------------------------------------

// quiz 

// Tugas 1
// Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!", 
// yang kemudian akan ditampilkan di console.

//bikin fungsinya disini
function shoutOut() {
    return 'Halo Function!';
}

console.log(shoutOut());


// ------------------------------------
console.log('')
// ------------------------------------

// Tugas 2
// Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari 
// dua parameter yang dikirim.

//bikin fungsinya disini

let num1 = 1
let num2 = 2

function calculateMultiply() {
    return num1 * num2;
}

let hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);

// ------------------------------------
console.log('')
// -----------------------------------

// Tugas 3
// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi 
// satu kalimat berikut: 
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

//bikin fungsinya disini

let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

function processSentence(name,age,address,hobby) {
    return `Name saya ${name}, umur saya ${age}, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}`;
}

let fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"