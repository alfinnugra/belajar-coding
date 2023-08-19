function slice(data, start, end) {
    // Write your code here
    if(start === undefined) {
        return data.slice();
    }
    if(end === undefined) {
        end = data.length
    }
    return data.slice(start,end)
  }
  
  //DRIVER CODE
  
  console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2)); // [ 'camel', 'duck', 'elephant' ]
  console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2, 4)); // [ 'camel', 'duck' ]
  console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 1, 5)); // [ 'bison', 'camel', 'duck', 'elephant' ]
  console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'])); //[ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
  console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 20)); //[]