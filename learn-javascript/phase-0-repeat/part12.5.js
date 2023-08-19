function hapusSimbol(str) {
    // you can only write your code here!
    return str.match(/[a-z0-9]+/gi).join('') // menggunakan metode match yang memfilter a sampai z dan 0 sampai 9 dari global i dan menggunakan join untuk menambahkan filter nya
  }
  
  // TEST CASES
  console.log(hapusSimbol('test%$4aa')); // test4aa
  console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
  console.log(hapusSimbol('ma@#k!an~')); // makan
  console.log(hapusSimbol('coding')); // coding
  console.log(hapusSimbol('1+3-5*2=100')); // 1352100

  /*
Diberikan sebuah function cariPelaku(kalimat) yang menerima satu parameter berupa string. Function akan me-return jumlah berapa kali ditemukan kata "abc" secara berturut-turut di dalam kalimat tersebut. Gunakan regex untuk melatih kemampuan regex.
*/
function cariPelaku(str) {
    // you can only write your code here!
    let kalimat = /abc/g; // membuat variable kalimat yang isinya filter abc dari global
    let match = str.match(kalimat) // membuat variable match yang isinya str.match variable kalimat
    return match.length // terurn match.length
  }
  
  // TEST CASES
  console.log(cariPelaku('mabcvabc')); // 2
  console.log(cariPelaku('abcdabdc')); // 1
  console.log(cariPelaku('bcabcac')); // 1
  console.log(cariPelaku('abcabcabc')); // 3
  console.log(cariPelaku('babcbacabc')); // 2