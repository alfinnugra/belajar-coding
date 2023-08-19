let jumlahBuku = 0
let kapasitasRak = 10

while(jumlahBuku < kapasitasRak) {
    console.log(`Budi memiliki jumlah buku sebanyak ${jumlahBuku}`)

    const mendapatkanBukuBaru = true;
    if(mendapatkanBukuBaru) {
        jumlahBuku++
    }

    if(jumlahBuku < kapasitasRak) {
        console.log(`Budi menyimpan buku baru ke rak buku.`)
    } else {
        console.log(`Rak buku sudah penuh, Budi tidak dapat menyimpan buku baru.`)
        break;
    }
}