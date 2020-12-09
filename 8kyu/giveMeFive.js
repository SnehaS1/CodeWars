function giveMeFive(obj){
    //coding here
    const val = [];
     for (var key in obj){
       if(key.length == 5){
         val.push(key)
       }
       if(obj[key].length == 5){
         val.push(obj[key]);
       }
    }
    return(val)
  }