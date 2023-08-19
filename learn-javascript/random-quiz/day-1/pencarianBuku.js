var nama = 'Galang';
var usia = 25;
var jumlahUang = 150000;

if(nama === '') {
    console.log("Silakan isi nama anda terlebih dahulu.")
} else if(usia <= 10) {
    console.log("Anda dapat mencari buku anak anak.")
} else if(jumlahUang < 100000) {
    console.log("Maaf, uang anda tidak mencukupi untuk mencari buku. Anda harus Dpulang")
} else if(jumlahUang > 100000){
    jumlahUang -= 100000
    console.log(`Anda dapat mencari buku. Sisa uang anda: ${jumlahUang}`)
}

/*
algoritma 
1. mengecek nama jika nama kosong maka akan di tampilkan Silakan isi nama anda terlebih dahulu. dan program berhenti
2. mengecek usia kurang dari sama dengan 10 maka akan di tampilkan Anda dapat mencari buku anak anak. dan program berhenti
3. mengecek jumlahUang kurang dari 100000 maka akan di tampilkan Maaf, uang anda tidak mencukupi untuk mencari buku. Anda harus pulang dan program berhenti
4. jika semua benar maka akan di tampilkan Anda dapat mencari buku. Sisa uang anda: JumlahUang dan program berhenti
*/