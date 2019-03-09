function fibonacci(num){
    var a = 1, b = 0, temp;
    if(num === 0) return b = 1
    while (num >= 1){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
    return b;
  }
  console.log(fibonacci(20));
