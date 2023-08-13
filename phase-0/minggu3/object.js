// contoh object
/* const myObj = {
    nama: 'Alfin',
    Kelas: '9',
    umur: '14',
}*/

// didalam object kita juga bisa membuat object kembali contohnya
const myObj = {
    nama: 'Alfin',
    Kelas: '9',
    hobbi: ['Makan','Minum','Ngoding'],
    Detail: {
        Asal: 'Bogor',
        Umur: '14'
    }
}

// lalu bagaimana kita mengakses / menjadikan object di atas agar bisa menjadi output, Kita bisa gunakan console.log()
console.log(myObj) // panggil nama var nya, contoh ini adalah contoh untuk kita membuat output semua nya
console.log(myObj.nama) // lalu ini adalah contoh untuk memanggil class nya saja contoh nama nya atau umur menggunakan myObj.nama
console.log(myObj.hobbi[1]) // ini adalah contoh untuk kita membuat output array pada object jadi kita bisa mengakses index nya
console.log(myObj.Detail.Asal) // ini untuk memanggil object di dalam object jadi kita bisa memanggil nama class nya kembali

console.log(" ")
// lalu kita juga bisa mengakses menggunakan seperti ini

// dalam metode ini adalah metode membuat varible baru var detail menampung myObj.Detail nya saja, lalu kita console.log() isinya
const detail = myObj.Detail;

console.log(detail.Asal) 

// lalu kita juga bisa menggunakan seperti ini
let tempatangka = {};
for(let i = 1; i <= 3; i++) {
    tempatangka[i] = i
}

console.log(tempatangka) // maka output nya akan {'1': 1, '2': 2, '3': 3}

// di dalam object juga, object mempunyai cara khusus untuk membuat output yaitu for in
// contoh nya
console.log(' ')
for(const key in myObj) { // const key itu bisa di sebut juga property tapi saya memanggilnya class, lalu in myObj adalah var object nya
    console.log(`${key}: ${myObj[key]}`) // ini cara menconsole nya
}

