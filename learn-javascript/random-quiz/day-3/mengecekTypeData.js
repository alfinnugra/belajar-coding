//Contoh 1:
let nilai = undefined;
//Output: 'Nilai berupa string: Hello World'
if(typeof nilai === 'string') {
    if(nilai === '') {
        console.log(`Nilai adalah empty string`)
    } else {
        console.log(`Nilai berupa string: ${nilai}`)
    }
}
if(typeof nilai === 'number') {
    if(isNaN(nilai)) {
        console.log(`Nilai adalah NaN`)
    } else if(nilai === 0) {
        console.log(`Nilai adalah angka 0`)
    } else {
        console.log(`Nilai berupa number: ${nilai}`)
    }
}
if(typeof nilai === 'boolean' && nilai === true) {
    console.log(`Nilai berupa boolean dan bernilai true`)
}

if(nilai === undefined) {
    console.log(`Nilai adalah ${nilai}`)
}

if(!isNaN(nilai) && nilai !== true && nilai !== 0 && nilai !== '') {
    console.log(`Nilai adalah ${nilai}`)
}
