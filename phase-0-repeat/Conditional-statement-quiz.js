// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
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
// pertama buat 2 variable yang berisi nama dan peran
// kedua kita mengecek apakah nama dan peran sudah di isi
// ketiga kita cocokan variable peran dengan isinya jika isinya ksatria maka console.log(ksatria)
// keempat jika tabib maka console.log(tabib)
// kelima jika penyihir maka console.log(penyihir) 


let nama = "Alfin", peran = "Penyihir"; // ini adalah variable yang menampung nama dan peran

if(nama === "") { // di sini kita mencek jika nilai/isi dari variable nama === "" atau kosong
    console.log("Nama Wajib Diisi!"); // maka ita console.log nama wajib di isi!
} else if(peran === "")  { // di sini kita cek jika nilai/isi dari variable peran === "" atau kosong
    console.log("Pilih Peranmu untuk memulai game!") // maka kita console.log pilih peranmu untuk memulai game!
} else if(peran == "Ksatria") { // di sini kita mengecek jika nilai/isi dari varibale peran itu ksatria
    console.log(`Halo ${peran} ${nama}, Kamu dapat menyerang dengan senjatamu!`) // maka kita console.log halo perannya namanya, kamu dapat menyerang
} else if(peran == "Tabib") { // jika nilainya/isi tabib 
    console.log(`Halo ${peran} ${nama}, Kamu akan membantu temanmu yang terluka`) // maka kita console.log hala perannya namanya, kamu dapat membantu temanmu
} else { // jika nilai nya bukan ksatria atau tabib maka dia akan menjadi penyihir
    console.log(`Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`) // maka kita console.log halo perannya namanya, kamu dapat membuat keajaiban
}

//code disini gunakan console.log untuk outputnya

// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = "februari"; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini

switch(bulan) { //di sini kita switch variable bulan
    case 0 :  // case 0
        text = "Januari" // isinya januari 
        break; // kita break
    case 1 :  // case 1
        text = "Febuari" // isinya febuari
        break; // kita break
    case 2 :  // case 3 
        text = "Maret" // isinya maret
        break; // kita break
    case 3 :
        text = "April"
        break;
    case 4  : 
        text = "Mei"
        break;
    case 5 : 
        text = "Juni"
        break;
    case 6 :
        text = "Juli"
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
        default : // default adalah sama saja dengan else jika tidak ada nilai dari atas
        text = "Bulan tersebut tidak tersedia!" // bulan tidak tersedia
}

console.log(tanggal + ' ' + bulan + ' ' + tahun) // maka kita console.log tangan + spasi + bulan + spasi + tahun