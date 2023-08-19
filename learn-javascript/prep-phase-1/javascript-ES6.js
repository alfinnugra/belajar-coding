// arrow function
// Fungsi biasa
function multiply(a, b) {
    return a * b;
  }
  
  // Arrow function
  const multiply1 = (a, b) => a * b;

// let dan const
let x = 5;
x = 10; // Nilai x bisa diubah

const y = 20;
// y = 30; // Akan menyebabkan error, karena y nilainya tidak bisa diubah

// Template Literals
const name = 'John';
const age = 25;

const message = `Nama saya ${name} dan saya berusia ${age} tahun.`;
console.log(message);

// spread operator dan Rest Parameter
const numbers = [1, 2, 3];
const newArray = [...numbers, 4, 5]; // Menambahkan elemen pada array

function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // Output: 6

// Array Methods (Array Function)
const numbers1 = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2); // Menghasilkan [2, 4, 6, 8, 10]

const evenNumbers = numbers.filter(num => num % 2 === 0); // Menghasilkan [2, 4]

const sum = numbers.reduce((total, num) => total + num, 0); // Menghasilkan 15