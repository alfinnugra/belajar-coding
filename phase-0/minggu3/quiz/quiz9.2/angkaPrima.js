// soal 1
//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
  if(angka < 2) { // kita cek bahwa jika angka kurang dari 2 maka hasilnya false
    return false;
  }
  for(let i = 2; i < angka; i++) { // lalu kita membuat for() yang di dalam nya ada var i yang nilai nya 2, jika angka kurang dari 2 maka di tambahkan sampai dengan 2
    if(angka % i === 0) { // kita cek kembali jika angka di modulus/ sisa bagi dari i atau dari loopingan di atas, sama dengan nilai nya 0 maka hasilnya false
        return false
    }
}
    return true; // lalu kita buat jika memenuhi kondisi di atas maka hasilnya true
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false