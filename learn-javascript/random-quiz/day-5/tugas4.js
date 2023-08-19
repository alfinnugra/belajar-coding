function sittingArrangement(person, column) {
    // Write your code here
    if(column == 0) {
        return "Invalid number"
    }

    let result = []
    let baris = []

    for(let i = 0; i < person.length; i++) {
        baris.push(person[i])

        if(baris.length === column) {
            result.push(baris)
            baris = []
        }
    }

    if(baris.length > 0) {
        while(baris.length < column) {
            baris.push('Kursi Kosong')
        }
        result.push(baris)
    }
    return result
  }
  
  //DRIVER CODE
  
  console.log(sittingArrangement(['A', 'B', 'C'], 0 )); //Invalid number
  console.log(sittingArrangement([ 'Juli', 'Nisa', 'Desi', 'Ulfa', 'Puji' ], 2)); //[ [ 'Juli', 'Nisa' ], [ 'Desi', 'Ulfa' ], [ 'Puji', 'Kursi Kosong' ] ]
  console.log(sittingArrangement([ 'Yosia', 'Asrawi', 'Andru' ], 3)); //[ [ 'Yosia', 'Asrawi', 'Andru' ] ]
  console.log(sittingArrangement([ 'Lukman', 'Adam', 'Dimas', 'Hansin', 'Orion' ], 4));
  // [
  //   [ 'Lukman', 'Adam', 'Dimas', 'Hansin' ],
  //   [ 'Orion', 'Kursi Kosong', 'Kursi Kosong', 'Kursi Kosong' ]
  // ]