/*
Diberikan function attack(), damageCalculation().

Function damageCalculation() akan menerima 2 parameter yaitu numberOfAttacks dan damagePerAttack
Function attack() akan menerima 1 parameter yaitu damage
[IMPLEMENTASI] Gunakan function damageCalculation() untuk menghitung damage yang diterima dan gunakan function attack() untuk mensimulasikan setiap attack dengan rumus damage - 2 disetiap attack.

[CONTOH] damageCalculation(3, 10) akan mengembalikan nilai 24

Karena attack akan dikurangi 2, maka setiap attack akan menghasilkan damage 8
*/

function attack (damage) { // function yang namanya attack yang parimeter nya damage
    // Code disini
    return damage -2; // memaggil parimater damage dari function attack lalu di kurang 2
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) { // function yang nama nya damageCalculation yang parimeter nya numberOfAttacks dan damagePerAttack
    // Code disini
    let totalDamage = numberOfAttacks * attack(damagePerAttack) // variable totalDamage yang isinya nmemanggil numberOfAttacks  di kali attack yang isinya damagePerAttack
    return totalDamage // return totalDamage
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90


  /*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {
    //your code here
    if(str == "") { // jika str sama dengan string kosong
        return [] // maka kita return array kosong
      }
  
      let herolist = str.split(',') // variable herolist yang isinya str.split ,
      let rangedhero = [] // variable rangedhero yang isinya array kosong
      let meleehero = [] // variable meleehero yang isinya array kosong
  
      for(let hero  of herolist) { // variable hero dari herolist
        let [heroname, typehero] = hero.split('-') // membuat variable yang isinya array yang isinya heroname, typehero dari hero.split -
        if(typehero == 'Ranged') { // jika typehero sama dengan nilainya ranged
          rangedhero.push(heroname) // hasilnya akan di push ke variable rangedhero dari heroname
        } else if(typehero == 'Melee') // tapi jika type hero nya sama dengan melee
        meleehero.push(heroname) // hasilnya akan di push ke variable meleehero dari heroname
      }
      return [rangedhero, meleehero] // return array yamg isinya rangedhero dan meleehero
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []