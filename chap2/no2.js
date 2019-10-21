
for (let num = 0; num < 100; num ++){
    let number=" ";
    if (num % 3 === 0) number +='fizz';
    if (num % 3 === 0) number +='buzz';
    console.log(number || num);
    }
