function digPow(n, p){
    // ...
    const num = n.toString().split("").map(Number).reduce(function(acc,val,index){
      return acc+Math.pow(val, p+index)
    },0);
    return num%n ===0 ? num/n : (-1);
  }