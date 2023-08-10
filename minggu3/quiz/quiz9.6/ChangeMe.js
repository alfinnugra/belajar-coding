function changeMe(arr) {
    // you can only write your code here!
    for(let i = 0; i < arr.length; i++) {
      let Obj = {
        fristname: arr[i][0],
        lastname: arr[i][1],
        gender: arr[i][2],
        age: arr[i][3] ? 2023 - arr[i][3] : 'invalid Birth Year'
      }
      console.log(`${Obj.fristname} ${Obj.lastname}:`)
      console.log(Obj)
    }
  }
  
  // TEST CASES
  changeMe([
    ['Christ', 'Evans', 'Male', 1982], 
    ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // Christ Evans: { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 41 } 2023 - 1982 = 41 kan yak wkwk
  // Robert Downey: { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  
  changeMe([]); // ""