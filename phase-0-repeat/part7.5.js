// Tugas 1
// Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!", 
// yang kemudian akan ditampilkan di console.

//bikin fungsinya disini
function shoutOut() { // function yang namanya shoutOut
    return "Halo Function!" // menampilkan halo function
}
console.log(shoutOut()); // console.log yang memanggil nama function nya


// ------------------------------------
console.log('')
// ------------------------------------

// Tugas 2
// Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari 
// dua parameter yang dikirim.

//bikin fungsinya disini

let num1 = 1 // varibale num1 sama dengan 1
let num2 = 2 // variable num2 sama dengan 2

function calculateMultiply(num1,num2) { // function yang namanya calculateMultiply yang parameter nya num1 dan num2 atau memanggil variable
    return num1 + num2 // return variable isi num1 ditambah isi num2
}

let hasilPerkalian = calculateMultiply(num1,num2); // variable hasilPerkalian yang isinya calculateMulyiply memanggil variable num1 dan num2
console.log(hasilPerkalian); // console.log hasilPerkalian

// ------------------------------------
console.log('')
// -----------------------------------

// Tugas 3
// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi 
// satu kalimat berikut: 
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

//bikin fungsinya disini

let name = "Agus"; // variable name yang isinya agus
let age = 30; // variable age yang isinya 30
let address = "Jln. Malioboro, Yogjakarta"; // variable address yang isinya Jln, Malioboro, Yogjakarta
let hobby = "gaming"; // variable hobby yang isinya gaming

function processSentence(name, age, address, hobby) { // function yang namanya processSentence yang memanggil variable name,age,address,dan hobby
    return `Nama saya ${name}, Umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!` // menampilkan `Nama saya ${name}, Umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`
}

let fullSentence = processSentence(name,age,address,hobby); // variable fullSentence yang isinya processSentence yang memanggil variable name,age,address,dan hobby
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"