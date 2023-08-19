let detik = 9;

let menit = Math.floor(detik /60) 
let sisaDetik = detik % 60

if(detik < 10) {
    sisaDetik = '0'  + sisaDetik
}

let waktu = menit + ':' + sisaDetik
console.log(waktu)