function ladder(word) {
    //your code here
    let result = []
    for(let i = word.length; i >= 1; i--) {
        result.push(word.slice(0, i))
    }
    return result;
  }
  
  // DRIVER CODE
  console.log(ladder('iphone14'));
  [
    [ 'i', 'p', 'h', 'o', 'n', 'e', '1', '4' ],
    [ 'i', 'p', 'h', 'o', 'n', 'e', '1' ],
    [ 'i', 'p', 'h', 'o', 'n', 'e' ],
    [ 'i', 'p', 'h', 'o', 'n' ],
    [ 'i', 'p', 'h', 'o' ],
    [ 'i', 'p', 'h' ],
    [ 'i', 'p' ],
    [ 'i' ],
  ]