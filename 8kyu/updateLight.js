function updateLight(current) {
  
    //your code here!
    const traffic = ["green", "yellow", "red"]
    return current === "red" ? "green" : traffic[traffic.indexOf(current)+1];


}

// const updateLight = current => ({
//     green: 'yellow',
//     yellow: 'red',
//     red: 'green',
//   })[current]