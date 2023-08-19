let kalimat = 'Hello, how are you?'
let result  = 0

for(let i = 0; i < kalimat.length; i++) {
    if(kalimat[i] === 'a' || kalimat[i] === 'e' || kalimat[i] === 'i' || kalimat[i] === 'u' || kalimat[i] === 'o') {
        result++
    }
}
console.log(result)