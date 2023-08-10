// quiz 1
/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini: */
let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

for(let i = 0; i < input.length; i++) {
    for(let j = 0; j < input[i].length; j++) {
        if(j === 0) {
            console.log(`Nomor ID: ${input[i][j]}`)
        } else if(j === 1) {
            console.log(`Nama Lengkap: ${input[i][j]}`)
        } else if(j === 2) {
            console.log(`TTL: ${input[i][j]} ${input[i][j + 1]}`)
        } else if(j === 4) {
            console.log(`Hobi: ${input[i][j]}`)
        }
    
}
console.log(" ");
}

console.log(" ")

let quiz2 = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(quiz2) {
    console.log("Output pertama:");
    quiz2.splice(2,3, "Provinsi Bandar Lampung", "21/05/1989",  "Pria", "SMA Internasional Metro")
    console.log(quiz2)

    console.log(" ")

    console.log("Output kedua:")
    let tanggal = quiz2[3].split("/")
    if([tanggal[1] === '05']) {
        bulan = "mei";
        console.log(bulan)
    }

    console.log(" ")

    // membalikan tanggal
    console.log("Output Ketiga:")
    let membalikantanggal = [tanggal[2], tanggal[0], tanggal[1]]
    console.log(membalikantanggal)

    console.log(" ")

    // menambahkan simbol
    console.log("Output keempat:")
    let tambahkansimbol = tanggal.join('-');
    console.log(tambahkansimbol)

    console.log(" ")

    // membatasi 15 karakter
    console.log("Output kelima")
    console.log([quiz2[1].substring(0 ,15)])
}

dataHandling(quiz2);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 * 
*/