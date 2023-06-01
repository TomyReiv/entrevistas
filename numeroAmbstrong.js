function narcissistic(value) {
    // Code me to return true or false
    
    let arrValue = value.toString().split("");
    let n = arrValue.length; 
    let arrMap = arrValue.map( num => Math.pow(num, n) )
    let number = arrMap.reduce((acc, num) => acc + num);
    return value === number
  }

  narcissistic(123);