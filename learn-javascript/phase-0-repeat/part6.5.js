// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua


console.log("Looping Pertama:") // penanda bahwa ini looping pertama
let i = 0 // variable i yang isinya 0
while(i <= 5) { // while i  kurang sama dengan 5
    console.log(i) 
    i++ // i akan di tambah sampai dengan 5
}
console.log(" ")

console.log("Looping Kedua:") // penanda looping kedua
for(let i = 5; i > 0; i--) { // variable i yang isinya 5; i lebih besar dari 0; i akan di kurang sampai dengan 5
    console.log(i)
}

console.log(" ")

// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL
let j = 0 // variable j yang isinya 0
console.log("Ganjil Genap:") // penanda Ganjil Genap
while(j <= 100) { // j kurang dari sama dengan 100
    if(j % 2 === 0) { // jika j di modulus 2 sama dengan nilai nya 0 
        console.log(`${j} Adalah Genap`) // maka j adalah genap
    } else { // jika tidak
        console.log(`${j} Adalah Ganjil`) // maka j adalah ganjil
    }
    j++ // j akan terus di tambahkan sampai dengan 100
}

console.log(" ")

//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.


let b = 1 // variable b yang isinya 1
while(b < 100) { // b kurang dari 100
    if(b % 3 === 0) { // jika b di modulus 3 sama dengan nilainya 0
        console.log(`${b} Kelipatan 3`) // maka b kelipatan 3
    }
    b+=2 // variable b di tambah 2
}

b = 1 // variable b yang isinya 1
while(b < 100) { // b kurang dari 100
    if(b % 6 === 0) { // jika b dimodulus 6 sama dengan nilai nya 0
        console.log(`${b} kelipatan 6`) // maka b kelipatan 6
    }
    b+=5 // variable b ditambah 5
}

b = 1 // variable b yang isinya 1 
while(b < 100) { // b kurang dari 100
    if(b % 9 === 0) { // jika b di modulus 9 sama dengan nilainya 0
        console.log(`${b} Kelipatan 9`) // maka b kelipatan 0
    }
    b+= 8
}

//5. Bintang asteriks
//Problem buatlah bintang seperti berikut
let input = 5 // variable input yang isinya 5
for(let i = 1; i <= input; i++) { // varibale i yang isinya 1; i kurang dari sama dengan input; i akan di tambahkan
    let starts = '' // variable starts yang isinya string kosong
    for(let j = 1; j <= i; j++) { // variable j yang isinya 1; j kurang dari sama dengan i; j akan di tambahkan
        starts += '*' // variable starts yang akan di tambahkan dengan bintang
    }
    console.log(starts)
}
//hasilnya
//*
//**
//***
//****
//*****