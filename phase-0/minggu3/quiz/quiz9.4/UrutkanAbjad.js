//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
    // you can only write your code here!
    let RemoveSpace = str.split('');
    let Cek = RemoveSpace.length;

    for(let i = 0; i < Cek - 1; i++) {
      for(let x = 0; x < Cek -1; x++) {
        if(RemoveSpace[x] > RemoveSpace[x + 1]) {
          let TempatCek = RemoveSpace[x]
          RemoveSpace[x] = RemoveSpace[x + 1]
          RemoveSpace[x + 1] = TempatCek
        }
      }
    }
    return RemoveSpace.join('')
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'