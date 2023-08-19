function vocalSeeker(board) {
    // Write your code here
    let tempVokal = 0
    let vokalColection = ''

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            let gabung = board[i][j]
            if(gabung === 'a' || gabung === 'i' || gabung === 'e' || gabung === 'o' || gabung === 'u' || gabung === 'A' || gabung === 'I' || gabung === 'E' || gabung === 'O' || gabung === 'U') {
                tempVokal++
                vokalColection += gabung
            }
        }
    }
    return `vokal ditemukan ${tempVokal} dan kumpulan vokal adalah ${vokalColection}`
  }
  
  //DRIVER CODE
  
  let board = [
    ['*', '*', '*', 10],
    ['*', '*', -5, -10, '*', 100],
    ['a', 'A', 'o', 'b']
  ]
  
  console.log(vocalSeeker(board)); // vokal ditemukan 3 dan kumpulan vokal adalah aAo