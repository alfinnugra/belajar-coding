//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    while(angka2 !== 0) { // di sini kita cek jika angka 2 tidak sama dengan 0
        let tempat = angka2; // kita membuat variable sebagai tempat angka2
        angka2 = angka1 % angka2; // angka2 sama dengan angka1 maka di modulus / sisa bagi dengan angka2
        angka1 = tempat; // lalu kita samakan angka 1 dengan variable tempat angka 2
    }
    return angka1; // maka kita return angka1
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1