var position="";
for(let x = 0;x < 8; x++){
    for(let y = 0;y < 8; y++){
        if((x+y) % 2 == 0){
            position += " ";
        }else{
            position += "#";
        }
    }
    position +="\n";
}
console.log(position);