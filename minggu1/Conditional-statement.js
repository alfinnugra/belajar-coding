// conditional statemen
// let nilai = 100; //nilai nya adalah 100

// if (nilai >= 80) { // ini adalah conditional yang akan di baca pertama
//     console.log("Lulus dan terus belajar kembali") // jika nilai lebih besar dari 80 maka akan menampilkan lulus
// } else if (nilai >= 50) { // tapi jika nilai lebih besar dari 50 
//     console.log("Anda gagal, belajar kembali") // maka akan menampilkan hasil anda gagal
// } else { // jika dari kedua di atas tidak termasuk kriteria conditional
//     console.log("gagal") // maka akan menghasilkan gagal
// }

// // Operator conditional statement &&
// let nilaisiswa = 79;

// if(nilaisiswa >= 80 && nilaisiswa <= 100) {
//     nilaisiswa = "A";
// } else if(nilaisiswa >= 70 && nilaisiswa <= 80) {
//     nilaisiswa = "B";
// } else if(nilaisiswa >= 50 && nilaisiswa <=  70) {
//     nilaisiswa = "C";
// } else {
//     nilaisiswa = "D";
// }

// console.log(nilaisiswa)
// nilaisiswa = 70;

// // && jika semua hasil nya terpenuhi maka akan menghasilkan nilai true
// // || salah satu ada yang terpenuhi maka akan menghasilkan nilai true

// let banding = nilaisiswa >= 80 && nilaisiswa <= 100; // maka akan menghasilkan false karna nilai nya hanya terpenuhi 1 saja
// console.log(banding)
// banding1 = nilaisiswa >= 70 || nilaisiswa <= 80; //maka akan menghasilkan true karna salah satu nilat nya benar
// console.log(banding1)
// banding2 = nilaisiswa  != 50; // maka akan menghasilkan true karna ! artinya tidak, nilai nya 50 dan nilai sebenarnya 70 maka benar, karna tidak sama dengan 50
// console.log(banding2)

// // apa sih perbedaan == dengan ===
// let number = 50; // tipe data number
// let string = "50"; // tipe data string

// let hasil = number == string; // maka hasilnya akan benar karna == hanya mencocokan kedua nilai nya saja
// console.log(hasil)
// let hasil1 = number === string; // maka hasilnya akan false karna === mencocokan tipe data dan isi nya
// console.log(hasil1)

// latihan
// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peranharus memiliki isi data, 
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)


// let nama = "", peran = "";

//code disini gunakan console.log untuk outputnya
let nameplayer = prompt("Siapa nama kamu?"); 
let playerposisi = prompt("Silahkan pilih anda ingin menjadi apa?");

if(nameplayer == '') {
    console.log("Anda harus memasukan nama anda")
} else if (playerposisi == 1) {
    console.log(`Halo ${nameplayer}, anda sekarang menjadi ksatria`);
} else if(playerposisi == 2) {
    console.log(`Halo ${nameplayer}, anda sekarang menjadi tabib`);
} else if(playerposisi == 3) {
    console.log(`Halo ${nameplayer}, anda sekarang menjadi penyihir`);
} else if(playerposisi == 0) {
    console.log(`Halo ${nameplayer}, anda harus memilih peran`);
}

// latihan soal 2
// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let x = 0; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

switch (x) {
    case 0 :
        text = "Januari";
        break;
    case 1 :
        text = "Februari";
        break;
    case 2 :
        text = "Maret";
        break;
    case 3 :
        text = "April";
        break;
    case 4 :
        text = "Mei";
        break;
    case 5 :
        text = "Juni";
        break;
    case 6 :
        text = "Juli";
        break;
    case 7 :
        text = "Agustus";
        break;
    case 8 :
        text = "September";
        break;
    case 9 :
        text = "Oktober";
        break;
    case 10 :
        text = "November";
        break;
    case 11 :
        text = "Desember";
        break;
    default:
    text = "Looking forward to the Weekend";
}

console.log(tanggal + " " + text + " " + tahun)


