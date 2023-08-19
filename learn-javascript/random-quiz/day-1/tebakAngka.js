let tebakan = 6;
let text;

switch(tebakan) {
    case 1 : 
        text = "Coba lagi ya."
        break;
    case 2 : 
        text = "Selamat kamu mendapatkan kupon sebanyak 5."
        break;
    case 3 :
        text = "Selamat kamu mendapatkan kupon sebanyak 15."
        break;
    case 4 :
        text = "Selamat kamu mendapatkan kupon sebanyak 50."
        break;
    case 5 :
        text = "WOW, kamu menang jackpot! Selamat!!"
        break;
    default :
        text = "Tebakan anda Salah"
        break;
}

console.log(text)