function jarakTerdekat(arr) {
    //code here
    let posisi = []

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] === 'X') {
                posisi.push([i, j])
            }
        }
    }
    console.log(posisi)
    if(posisi.length !== 2) {
        return 0;
    }

    return Math.abs(posisi[0][0] - posisi[1][0]) + Math.abs(posisi[0][1] - posisi[1][1])
  }
  
  console.log(jarakTerdekat([
    ['','','','','','','','','','X'],
    ['','','','','','','','','X',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
  ])) //2
  
  console.log(jarakTerdekat([
    ['','','X','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','X',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
  ])) //10
  
  console.log(jarakTerdekat([
    ['','X','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','','X'],
  ])) //14
  
  console.log(jarakTerdekat([
    ['','','X','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
  ])) //0