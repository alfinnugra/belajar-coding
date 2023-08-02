// looping terbagi menjadi 2
// ada while dan for

// while 

// jika kita ke kanan hasilnya - jika ke kiri hasilnya +
// let i = 5;
// while (i > 0) {
//     console.log(i);
//     i--
// }

// for 

// sama saja cuma for bisa di lakukan di dalam conditional nya jadi tidak usah membuat variable terpisah
// sama saja jika ke kanan hasilnya - jika ke kiri hasilnya +
// for(let i = 5; i > 0; i--) {
//     console.log(i)
// }

// mencari length name

// let name = "Udin";

// for(let i = 0; i < name.length; i++) {
//   console.log(name[i])
// }

// mengembalikan suatu kata/kalimat
// let name = "udin";
// let result = "";

// for(let i = name.length -1; i >= 0; i-- ) { // jadi var i adalah mencakup var name yang di kurang index nya 1 index di awali dengan 0
//     result+= name[i];
// }
// console.log(result)  // maka hasilnya akan nidu karna di baca dari kiri ke kanan

// // nested loop
// for(i = 0; i < 5; i++) {
//     for(j = 0; j < 5; j++) {
//         console.log(j)
//     }
//     console.log(" ")
// }

// quiz 
// menghitung maju dan mundur menggunakan while
let j = 0; 
console.log("Looping pertama:");
while(j < 5) {
    console.log(j);
    j++;
}
console.log(" ");

console.log("Looping kedua:")
for(let i = 5; i > 0; i--) {
    console.log(i)
}
console.log(" ");

// ganjil genap quiz
let a = 0;
console.log("Ganjil Genap");
while(a < 100) {
    if(a % 2 === 0) {
        console.log(`${a} Ini adalah genap`);
    } else {
        console.log(`${a} Ini adalah ganjil`);
    }
    a++;
}
console.log(" ");


// counter 

// console.log("Kelipatan 2:");
// while(b < 100) {
//     console.log(b);
//     b += 2;
// }
// console.log(" ");

// let c = 1;
// console.log("Kelipata 5");
// while(c < 100) {
//     console.log(c);
//     c += 5;
// }
// console.log(" ");

// let d = 1;
// console.log("Kelipatan 9:");
// while(d < 100) {
//     console.log(d);
//     d += 9;
// }

let b = 1;
while(b < 100) {
    if(b % 3 === 0) {
        console.log(`${b} Kelipatan 3`);
    }
    b += 2;
}

b = 1;
while(b < 100) {
    if(b % 6 === 0) {
        console.log(`${b} Kelipatan 6`);
        
    }
    b+= 5;
}

b = 1;
while(b < 100) {
    if(b % 10 === 0) {
        console.log(`${b} Kelipatan 10`);
    }
    b+= 9;
}
