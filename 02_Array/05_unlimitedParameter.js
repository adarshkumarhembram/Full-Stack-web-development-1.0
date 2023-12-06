function SumOfallParameters (){
    let sum =0;
    for(var i=0; i<arguments.length; i++) sum+= arguments[i];
    return sum;
}

// Function call

let result = SumOfallParameters(1,2,3,4,5);
console.log(result);