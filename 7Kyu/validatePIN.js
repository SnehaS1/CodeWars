function validatePIN (pin) {
    //return true or false
    if(!/^\d+$/.test(pin)){
      return false;
    }
    else{
      const len = pin.toString().length;
      return len === 4 || len === 6;
    }
    
  }