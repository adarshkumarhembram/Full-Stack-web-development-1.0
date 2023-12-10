// function sum(value1,value2){
//     console.log("sum is :",value1+value2);
// }
// sum(3,5);//calling function
// sum(4,5);
// sum(1,2);

//function with return type
// function sum(val1,val2){
//     result= val1 + val2;
//     return result;
// }

// let add = sum(3,2);
// console.log(add);

// string

// function URL(url,domain){
//     let con = 'https://';
//     let result = con + url + domain;
//     return result;
// }
// let adarshsite = URL('adarshhembram','.me');
// console.log(adarshsite);

function sum(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum= sum+ arr[i];
        
    }
    return sum;
}
let sumarray = [1,2,3,4,5,6,7,8,9];
let arrayresult=sum(sumarray);
console.log(arrayresult);

