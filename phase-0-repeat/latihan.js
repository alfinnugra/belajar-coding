/*
Count solo
===========
Diberikan sebuah function countSolo, dimana function ini akan menerima parameter sebagai array
dan akan mereturn total jumlah dari angka angka yang TIDAK memiliki pasangan.
Example:
input: [ 5, 5, 6, 6, 3, 1, 2, 7, 7 ]
proses: 3 + 1 + 2
result: 6
RULES:
 
TIDAK BOLEH MENGGUNAKAN built in function .map, .filter, .reduce!
TIDAK BOLEH MENGGUNAKAN built in function .indexOf dan .include!
*/

function countSolo(numbers) {
    let tempatObj = {}

    for(const number of numbers) {
        if(tempatObj[number] === undefined) {
            tempatObj[number] = 1;
        } else {
            tempatObj[number]++;
        }
    }
    
    let soloNum = 0;

    for(const number in tempatObj) {
        if(tempatObj[number] === 1) {
            soloNum += parseInt(number)
        }
    }
    return soloNum
}

console.log(countSolo([5, 5, 6, 6, 3, 1, 2, 7, 7])); // 6
console.log(countSolo([3, 6, 3, 6, 1, 1, 2, 1])); // 2
console.log(countSolo([3, 3, 3, 3, 4, 5, 8, 10, 11])); // 38