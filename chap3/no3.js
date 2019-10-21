
let countChar = (x,y) => {
    let count = 0;
    for(let i = 0; i < x.length; i++){
        if(x[i] == y){
            count ++;
        }
    }
    return count;
}
console.log(countChar('Anita',"A"));
