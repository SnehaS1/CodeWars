function towerBuilder(nFloors) {
    // build here
    const floors = [];
    const t= (nFloors-1)*2+1;
   for(let i =0; i < nFloors; i++){
     const j = 2*i+1;
      floors.push(" ".repeat((t-j)/2)+"*".repeat(j)+" ".repeat((t-j)/2));
    }
    return floors
}