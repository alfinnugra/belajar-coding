let kata = 'juga';
let result = ''

for(let i = 0; i < kata.length; i++) {
    result += kata[i]
    for(let j = kata.length -1; j >= 0; j--) {
        result += kata[j]
    }

    if(kata[i] === kata[kata.length -1 - i]) {
        console.log(true)
    } else {
        console.log(false)
    }
}

