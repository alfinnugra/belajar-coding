/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals (str) {
    //code di sini
    let hasil = "";
    for(let i = 0; i < str.length; i++) {
      if(str[i] == 'a') {
        hasil += str[i] = 'b';
      } else if(str[i] == 'i') {
        hasil += str[i] = 'j'
      } else if(str[i] == 'u') {
        hasil += str[i] = 'v'
      }else if(str[i] == 'e') {
        hasil += str[i] = 'f'
      } else if(str[i] == 'o') {
        hasil += str[i] = 'p'
      } else if(str[i] == 'A') {
        hasil += str[i] = 'B';
      } else if(str[i] == 'I') {
        hasil += str[i] = 'J'
      } else if(str[i] == 'U') {
        hasil += str[i] = 'V'
      }else if(str[i] == 'E') {
        hasil += str[i] = 'F'
      } else if(str[i] == 'O') {
        hasil += str[i] = 'P'
      } else {
        hasil += str[i]
      }
    } 
    return hasil;
  }
  
  function reverseWord (str) {
    //code di sini
    let hasil = "";
    for(let i = str.length - 1; i >= 0; i--) {
      hasil += str[i];
    }
    return hasil;
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    let hasil = "";
    for(let i = 0; i < str.length; i++) {
      if(str[i] == str[i].toLowerCase()) {
        hasil += str[i].toUpperCase()
      } else if(str[i] == str[i].toUpperCase()) {
        hasil += str[i].toLowerCase()
      } else {
        hasil += str[i]
      }
    }
    return hasil
  }
  
  function removeSpaces (str) {
    //code di sini
    let hasil = "";
    for(let i = 0; i < str.length; i++) {
      if(str[i] !== " ") {
        hasil+= str[i]
      }
    }
    return hasil
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length < 5) {
      return "Name minimal 5 Charackter"
    } 
      let changeVocal = changeVocals(name);
      let reverseWords = reverseWord(changeVocal)
      let setLowerUpperCases = setLowerUpperCase(reverseWords)
      let removespace = removeSpaces(setLowerUpperCases)
      let hasil = removespace

    return hasil
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'