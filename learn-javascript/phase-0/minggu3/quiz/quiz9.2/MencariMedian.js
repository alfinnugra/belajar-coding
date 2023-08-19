function cariMedian(arr) {
    let urut = arr.sort((a,b) => {
        return a - b;
    })

    if(arr.length % 2 !== 0) {
        median = arr[(arr.length - 1) / 2]
    } else {
        let kanan = arr.length / 2;
        let kiri = kanan -1;
        median = (arr[kanan] + arr[kiri]) /2
    }
    return median
}
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5